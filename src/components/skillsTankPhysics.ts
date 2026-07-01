import type { SkillTag } from '../data/skills';
import { skillRows } from '../data/skills';

export type SkillTagWithRow = SkillTag & {
  id: string;
  rowIndex: number;
};

export const allSkillTags: SkillTagWithRow[] = skillRows.flatMap((row, rowIndex) =>
  row.map((tag) => ({
    ...tag,
    id: tag.label,
    rowIndex,
  })),
);

const ROW_COUNT = skillRows.length;
/** Bottom row (index 4) releases first, top row (index 0) last */
const ROW_RELEASE_ORDER = Array.from({ length: ROW_COUNT }, (_, i) => ROW_COUNT - 1 - i);

const TAG_STAGGER_MS = 150;
const ROW_GAP_MS = 380;
const INITIAL_DELAY_MS = 400;

/** Figma: 8px horizontal gap, tight vertical stack */
const TAG_GAP_PX = 8;
const ROW_GAP_PX = 4;
/** Figma tag — slightly scaled up from 8px base */
export const TAG_HEIGHT_PX = 20;

export function computeReleaseTimes(
  tags: SkillTagWithRow[],
  startTimeMs = typeof performance !== 'undefined' ? performance.now() : 0,
): Map<string, number> {
  const times = new Map<string, number>();
  let cursor = INITIAL_DELAY_MS;

  for (const rowIndex of ROW_RELEASE_ORDER) {
    const rowTags = tags.filter((tag) => tag.rowIndex === rowIndex);
    rowTags.forEach((tag, index) => {
      times.set(tag.id, startTimeMs + cursor + index * TAG_STAGGER_MS);
    });
    cursor += rowTags.length * TAG_STAGGER_MS + ROW_GAP_MS;
  }

  return times;
}

export function getLastReleaseTime(tags: SkillTagWithRow[]): number {
  const times = computeReleaseTimes(tags);
  return Math.max(...times.values(), 0);
}

export type SkillBody = SkillTagWithRow & {
  width: number;
  height: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  startY: number;
  dropStart: number;
  dropped: boolean;
  vx: number;
  vy: number;
  released: boolean;
  releaseAt: number;
  lastScatteredAt: number;
  floatDrift: number;
};

export type TankBounds = {
  width: number;
  height: number;
  padding: number;
};

export function createBodies(
  tags: SkillTagWithRow[],
  widths: Map<string, number>,
  releaseTimes: Map<string, number>,
): SkillBody[] {
  return tags.map((tag) => ({
    ...tag,
    width: widths.get(tag.id) ?? 48,
    height: TAG_HEIGHT_PX,
    x: 0,
    y: -TAG_HEIGHT_PX,
    targetX: 0,
    targetY: 0,
    startY: -TAG_HEIGHT_PX,
    dropStart: 0,
    dropped: false,
    vx: 0,
    vy: 0,
    released: false,
    releaseAt: releaseTimes.get(tag.id) ?? 0,
    lastScatteredAt: 0,
    floatDrift: ((tag.label.charCodeAt(0) + tag.label.length * 5) % 7 - 3) * 2.5,
  }));
}

/** Compute exact pyramid positions — rows stacked flush at tank bottom, centered. */
export function assignSettledTargets(bodies: SkillBody[], bounds: TankBounds) {
  let cursorY = bounds.height - bounds.padding;

  for (const rowIndex of ROW_RELEASE_ORDER) {
    const rowBodies = bodies.filter((body) => body.rowIndex === rowIndex);
    if (!rowBodies.length) continue;

    cursorY -= TAG_HEIGHT_PX;

    const rowWidth = rowBodies.reduce(
      (sum, body, index) => sum + body.width + (index > 0 ? TAG_GAP_PX : 0),
      0,
    );
    let cursorX = (bounds.width - rowWidth) / 2;

    rowBodies.forEach((body) => {
      body.targetX = cursorX;
      body.targetY = cursorY;
      cursorX += body.width + TAG_GAP_PX;
    });

    cursorY -= ROW_GAP_PX;
  }
}

export function snapToTargets(bodies: SkillBody[]) {
  for (const body of bodies) {
    body.x = body.targetX;
    body.y = body.targetY;
    body.vx = 0;
    body.vy = 0;
    body.dropped = true;
    body.released = true;
  }
}

const DROP_DURATION_MS = 2200;

/** Soft sine ease — slow start, gentle cruise, floaty landing */
function easeFloat(t: number) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

/** Intro: each tag drifts down slowly into its pyramid slot. */
export function stepDropAnimation(bodies: SkillBody[], now: number) {
  let allDone = true;

  for (const body of bodies) {
    if (!body.dropped) {
      if (now < body.releaseAt) {
        allDone = false;
        continue;
      }

      if (!body.released) {
        body.released = true;
        body.dropStart = now;
        body.x = body.targetX;
        body.startY = -body.height - 28 - Math.abs(body.floatDrift) * 2;
        body.y = body.startY;
      }

      const progress = Math.min(1, (now - body.dropStart) / DROP_DURATION_MS);
      const eased = easeFloat(progress);
      body.y = body.startY + (body.targetY - body.startY) * eased;

      const sway = Math.sin(progress * Math.PI * 1.15) * body.floatDrift * (1 - eased * 0.35);
      body.x = body.targetX + sway;

      if (progress < 1) {
        allDone = false;
      } else {
        body.y = body.targetY;
        body.x = body.targetX;
        body.dropped = true;
      }
    }
  }

  return allDone;
}

function resolveCollision(a: SkillBody, b: SkillBody) {
  if (!a.released || !b.released) return;

  const gap = COLLISION_GAP_PX;
  const overlapX =
    (a.width + b.width) / 2 + gap - Math.abs(a.x + a.width / 2 - (b.x + b.width / 2));
  const overlapY =
    (a.height + b.height) / 2 + gap - Math.abs(a.y + a.height / 2 - (b.y + b.height / 2));

  if (overlapX <= 0 || overlapY <= 0) return;

  if (overlapX < overlapY) {
    const push = overlapX / 2 + 0.5;
    if (a.x < b.x) {
      a.x -= push;
      b.x += push;
    } else {
      a.x += push;
      b.x -= push;
    }
    a.vx *= 0.5;
    b.vx *= 0.5;
  } else {
    const push = overlapY / 2 + 0.5;
    if (a.y < b.y) {
      a.y -= push;
      b.y += push;
    } else {
      a.y += push;
      b.y -= push;
    }
    a.vy *= 0.35;
    b.vy *= 0.35;
  }
}

const GRAVITY = 0.09;
const DAMPING = 0.986;
const HOVER_DAMPING = 0.972;
const SCATTER_COOLDOWN_MS = 120;
const SCATTER_SETTLE_FRAMES = 75;
const SCATTER_SETTLE_THRESHOLD = 0.08;
const CURSOR_RADIUS = 80;
const CURSOR_FORCE = 0.32;
const RETURN_LERP = 0.06;
const COLLISION_GAP_PX = 2;
const COLLISION_ITERATIONS = 6;

function clampBodyToBounds(body: SkillBody, bounds: TankBounds, bounce = 0.25) {
  const left = bounds.padding;
  const right = bounds.width - body.width - bounds.padding;
  const top = bounds.padding;
  const bottom = bounds.height - body.height - bounds.padding;

  if (body.x < left) {
    body.x = left;
    body.vx *= -bounce;
  }
  if (body.x > right) {
    body.x = right;
    body.vx *= -bounce;
  }
  if (body.y < top) {
    body.y = top;
    body.vy *= -bounce;
  }
  if (body.y > bottom) {
    body.y = bottom;
    body.vy *= -bounce;
  }
}

function resolveAllCollisions(bodies: SkillBody[], iterations = COLLISION_ITERATIONS) {
  for (let i = 0; i < iterations; i++) {
    for (let a = 0; a < bodies.length; a++) {
      for (let b = a + 1; b < bodies.length; b++) {
        resolveCollision(bodies[a], bodies[b]);
      }
    }
  }
}

/** Free 2D movement while hovering — no gravity, no row lock, tags stay separated. */
export function stepHoverPhysics(bodies: SkillBody[], bounds: TankBounds, dt: number) {
  for (const body of bodies) {
    if (!body.released) continue;

    body.vx *= HOVER_DAMPING;
    body.vy *= HOVER_DAMPING;
    body.x += body.vx * dt;
    body.y += body.vy * dt;
    clampBodyToBounds(body, bounds);
  }

  resolveAllCollisions(bodies);
}

export function stepScatterPhysics(bodies: SkillBody[], bounds: TankBounds, dt: number) {
  const floor = bounds.height - bounds.padding;

  for (const body of bodies) {
    if (!body.released) continue;

    body.vy += GRAVITY * dt;
    body.vx *= DAMPING;
    body.vy *= DAMPING;
    body.x += body.vx * dt;
    body.y += body.vy * dt;

    const left = bounds.padding;
    const right = bounds.width - body.width - bounds.padding;

    if (body.x < left) {
      body.x = left;
      body.vx *= -0.12;
    }
    if (body.x > right) {
      body.x = right;
      body.vx *= -0.12;
    }

    const floorY = floor - body.height;
    if (body.y > floorY) {
      body.y = floorY;
      body.vy *= -0.06;
      body.vx *= 0.95;
      if (Math.abs(body.vy) < 0.06) body.vy = 0;
    }

    if (body.y < bounds.padding) {
      body.y = bounds.padding;
      body.vy *= -0.08;
    }
  }

  resolveAllCollisions(bodies, 3);
}

/** Gentle repulsion from cursor — applied each frame while hovering the tank. */
export function applyCursorForce(
  bodies: SkillBody[],
  cx: number,
  cy: number,
  radius = CURSOR_RADIUS,
  maxForce = CURSOR_FORCE,
) {
  for (const body of bodies) {
    if (!body.dropped) continue;

    const ox = body.x + body.width / 2;
    const oy = body.y + body.height / 2;
    const dx = ox - cx;
    const dy = oy - cy;
    const dist = Math.hypot(dx, dy);

    if (dist > 0 && dist < radius) {
      const t = 1 - dist / radius;
      const force = t * t * maxForce;
      body.vx += (dx / dist) * force;
      body.vy += (dy / dist) * force;
    }
  }
}

export function hasScatterMotion(bodies: SkillBody[]): boolean {
  return bodies.some(
    (body) => Math.abs(body.vx) > 0.04 || Math.abs(body.vy) > 0.04,
  );
}

/** Smooth glide back into the pyramid after the cursor leaves. */
export function lerpTowardTargets(bodies: SkillBody[], factor = RETURN_LERP): boolean {
  let allClose = true;

  for (const body of bodies) {
    const dx = body.targetX - body.x;
    const dy = body.targetY - body.y;
    body.x += dx * factor;
    body.y += dy * factor;
    body.vx *= 0.88;
    body.vy *= 0.88;

    if (Math.hypot(dx, dy) > 0.4) allClose = false;
  }

  return allClose;
}

export function areScatterSettled(bodies: SkillBody[]): boolean {
  return bodies.every(
    (body) => Math.abs(body.vx) < SCATTER_SETTLE_THRESHOLD && Math.abs(body.vy) < SCATTER_SETTLE_THRESHOLD,
  );
}

export function nudgeBodyFromPointer(
  body: SkillBody,
  pointerDx: number,
  pointerDy: number,
  strength = 0.12,
) {
  const dist = Math.hypot(pointerDx, pointerDy) || 1;
  body.vx += (pointerDx / dist) * strength;
  body.vy += (pointerDy / dist) * strength;
}

export function scatterBody(
  body: SkillBody,
  bodies: SkillBody[],
  now: number,
  pointerDx = 0,
  pointerDy = 0,
) {
  if (now - body.lastScatteredAt < SCATTER_COOLDOWN_MS) return;
  body.lastScatteredAt = now;

  const dist = Math.hypot(pointerDx, pointerDy) || 1;
  body.vx += (pointerDx / dist) * 0.55;
  body.vy += (pointerDy / dist) * 0.55;

  for (const other of bodies) {
    if (other.id === body.id || !other.released) continue;
    const dx = other.x + other.width / 2 - (body.x + body.width / 2);
    const dy = other.y + other.height / 2 - (body.y + body.height / 2);
    const separation = Math.hypot(dx, dy);
    if (separation > 0 && separation < 48) {
      const force = ((48 - separation) / 48) * 0.5;
      other.vx += (dx / separation) * force;
      other.vy += (dy / separation) * force;
    }
  }
}

export { SCATTER_SETTLE_FRAMES, SCATTER_SETTLE_THRESHOLD };
