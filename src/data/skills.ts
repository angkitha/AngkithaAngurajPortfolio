export type SkillTag = {
  label: string;
  variant: 'blue' | 'purple' | 'green' | 'yellow' | 'pink';
  opacity?: number;
};

/** Figma row structure — bottom row releases first (index 4) */
export const skillRows: SkillTag[][] = [
  [
    { label: 'Figma', variant: 'blue', opacity: 0.78 },
    { label: 'Adobe Photoshop', variant: 'blue', opacity: 0.78 },
    { label: 'Design Systems', variant: 'purple', opacity: 0.78 },
    { label: 'Auto Layout', variant: 'purple', opacity: 0.78 },
    { label: 'Wireframing', variant: 'purple', opacity: 0.78 },
  ],
  [
    { label: 'Responsive Design', variant: 'purple', opacity: 0.84 },
    { label: 'Interactive Prototyping', variant: 'purple', opacity: 0.84 },
    { label: 'Cursor', variant: 'blue', opacity: 0.84 },
    { label: 'Claude', variant: 'green', opacity: 0.84 },
    { label: 'OpenAI', variant: 'green', opacity: 0.84 },
    { label: 'LLMs', variant: 'green', opacity: 0.84 },
  ],
  [
    { label: 'Prompt Engineering', variant: 'green', opacity: 0.89 },
    { label: 'Data Visualization', variant: 'yellow', opacity: 0.89 },
    { label: 'React', variant: 'yellow', opacity: 0.89 },
    { label: 'TypeScript', variant: 'yellow', opacity: 0.89 },
    { label: 'HTML/CSS', variant: 'yellow', opacity: 0.89 },
  ],
  [
    { label: 'Git', variant: 'yellow', opacity: 0.95 },
    { label: 'Bitbucket', variant: 'yellow', opacity: 0.95 },
    { label: 'Python', variant: 'yellow', opacity: 0.95 },
    { label: 'SQL', variant: 'yellow', opacity: 0.95 },
    { label: 'Java', variant: 'yellow', opacity: 0.95 },
    { label: 'Visual Design', variant: 'purple', opacity: 0.95 },
    { label: 'Jira', variant: 'pink', opacity: 0.95 },
  ],
  [
    { label: 'UI/UX Research', variant: 'purple' },
    { label: 'A/B Testing', variant: 'pink' },
    { label: 'Classification', variant: 'pink' },
  ],
];
