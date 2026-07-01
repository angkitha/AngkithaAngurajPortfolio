import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  allSkillTags,
  applyCursorForce,
  assignSettledTargets,
  computeReleaseTimes,
  createBodies,
  hasScatterMotion,
  lerpTowardTargets,
  nudgeBodyFromPointer,
  scatterBody,
  snapToTargets,
  stepDropAnimation,
  stepHoverPhysics,
  stepScatterPhysics,
  type SkillBody,
  type TankBounds,
} from './skillsTankPhysics';
import './SkillsTank.css';

type SkillsTankProps = {
  /** Changes when Home is visited again — forces a full animation reset. */
  sessionKey: number;
};

export function SkillsTank({ sessionKey }: SkillsTankProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const bodiesRef = useRef<SkillBody[]>([]);
  const boundsRef = useRef<TankBounds>({ width: 0, height: 0, padding: 8 });
  const introDoneRef = useRef(false);
  const mouseInTankRef = useRef(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const returningRef = useRef(false);
  const rafRef = useRef<number>(0);
  const lastTimeRef = useRef(0);
  const [, setFrame] = useState(0);
  const [interactive, setInteractive] = useState(false);

  const [phase, setPhase] = useState<'measure' | 'animate' | 'static'>('measure');

  const initLayout = useCallback((animStartMs: number) => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return false;

    const bounds: TankBounds = {
      width: container.clientWidth,
      height: container.clientHeight,
      padding: 8,
    };
    boundsRef.current = bounds;

    const widths = new Map<string, number>();
    measure.querySelectorAll<HTMLElement>('[data-skill-id]').forEach((el) => {
      const id = el.dataset.skillId;
      if (!id) return;
      widths.set(id, el.offsetWidth);
    });

    const releaseTimes = computeReleaseTimes(allSkillTags, animStartMs);
    const bodies = createBodies(allSkillTags, widths, releaseTimes);
    assignSettledTargets(bodies, bounds);
    bodiesRef.current = bodies;
    return true;
  }, []);

  const resetAnimation = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    introDoneRef.current = false;
    mouseInTankRef.current = false;
    returningRef.current = false;
    bodiesRef.current = [];
    setInteractive(false);
    setPhase('measure');
  }, []);

  useLayoutEffect(() => {
    resetAnimation();
  }, [sessionKey, resetAnimation]);

  useLayoutEffect(() => {
    if (phase !== 'measure') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animStartMs = performance.now();
    if (!initLayout(animStartMs)) return;

    if (reducedMotion) {
      snapToTargets(bodiesRef.current);
      introDoneRef.current = true;
      setInteractive(true);
      setPhase('static');
      setFrame((n) => n + 1);
      return;
    }

    lastTimeRef.current = animStartMs;
    setPhase('animate');
    setFrame((n) => n + 1);
  }, [phase, initLayout, sessionKey]);

  useEffect(() => {
    if (phase !== 'animate') return;

    const loop = (now: number) => {
      const delta = Math.min(1.6, (now - lastTimeRef.current) / 16.67 || 1);
      lastTimeRef.current = now;

      const bodies = bodiesRef.current;
      const bounds = boundsRef.current;

      if (!introDoneRef.current) {
        const done = stepDropAnimation(bodies, now);
        if (done) {
          snapToTargets(bodies);
          introDoneRef.current = true;
          setInteractive(true);
        }
      } else if (mouseInTankRef.current) {
        returningRef.current = false;
        applyCursorForce(bodies, cursorRef.current.x, cursorRef.current.y);
        stepHoverPhysics(bodies, bounds, delta);
      } else if (returningRef.current || hasScatterMotion(bodies)) {
        stepScatterPhysics(bodies, bounds, delta);
        const home = lerpTowardTargets(bodies);
        if (home && areAtRest(bodies)) {
          snapToTargets(bodies);
          returningRef.current = false;
        } else {
          returningRef.current = true;
        }
      }

      setFrame((n) => n + 1);
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase]);

  useEffect(() => {
    const onResize = () => {
      const container = containerRef.current;
      if (!container || !bodiesRef.current.length) return;

      const bounds: TankBounds = {
        width: container.clientWidth,
        height: container.clientHeight,
        padding: 8,
      };
      boundsRef.current = bounds;
      assignSettledTargets(bodiesRef.current, bounds);

      if (introDoneRef.current && !mouseInTankRef.current && !returningRef.current) {
        snapToTargets(bodiesRef.current);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const updateCursor = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !interactive) return;
    const rect = containerRef.current.getBoundingClientRect();
    cursorRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  }, [interactive]);

  const handleTankEnter = useCallback(() => {
    if (!interactive) return;
    mouseInTankRef.current = true;
  }, [interactive]);

  const handleTankLeave = useCallback(() => {
    if (!interactive) return;
    mouseInTankRef.current = false;
    returningRef.current = true;
  }, [interactive]);

  const handleTankMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!interactive) return;
      updateCursor(event);
    },
    [interactive, updateCursor],
  );

  const handleTagHover = useCallback(
    (id: string, event: React.MouseEvent<HTMLSpanElement>) => {
      if (!interactive || !containerRef.current) return;

      const body = bodiesRef.current.find((b) => b.id === id);
      if (!body) return;

      const rect = containerRef.current.getBoundingClientRect();
      const px = event.clientX - rect.left - (body.x + body.width / 2);
      const py = event.clientY - rect.top - (body.y + body.height / 2);

      if (event.type === 'mouseenter') {
        scatterBody(body, bodiesRef.current, performance.now(), px, py);
      } else {
        nudgeBodyFromPointer(body, px, py);
      }
    },
    [interactive],
  );

  const bodies = bodiesRef.current;

  return (
    <div className="skills-tank-frame">
      <div
        ref={containerRef}
        className={`skills-tank ${interactive ? 'skills-tank--interactive' : ''}`}
        aria-label="Skills"
        onMouseEnter={handleTankEnter}
        onMouseLeave={handleTankLeave}
        onMouseMove={handleTankMove}
      >
        {phase === 'measure' && (
          <div ref={measureRef} className="skills-tank__measure" aria-hidden>
            {allSkillTags.map((tag) => (
              <span
                key={tag.id}
                data-skill-id={tag.id}
                className={`skills-tank__tag skills-tank__tag--${tag.variant}`}
                style={tag.opacity !== undefined ? { opacity: tag.opacity } : undefined}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {(phase === 'animate' || phase === 'static') &&
          bodies.map((body) => (
            <span
              key={body.id}
              className={`skills-tank__tag skills-tank__tag--${body.variant} skills-tank__tag--floating`}
              style={{
                width: body.width,
                height: body.height,
                transform: `translate3d(${body.x}px, ${body.y}px, 0)`,
                zIndex: Math.round(body.y),
                opacity: body.opacity,
              }}
              onMouseEnter={(event) => handleTagHover(body.id, event)}
              onMouseMove={(event) => handleTagHover(body.id, event)}
            >
              {body.label}
            </span>
          ))}
      </div>
    </div>
  );
}

function areAtRest(bodies: SkillBody[]): boolean {
  return bodies.every(
    (body) => Math.abs(body.vx) < 0.06 && Math.abs(body.vy) < 0.06,
  );
}
