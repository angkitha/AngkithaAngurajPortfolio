export type Project = {
  title: string;
  coverSrc: string;
  coverClassName: string;
  screenClassName?: 'screen--standard' | 'screen--tall';
  caseStudyPath?: string;
};

export const studyProjects: Project[] = [
  {
    title: 'MACHINERY WEBSITE REDESIGN',
    coverSrc: '../images/machine-cover.png',
    coverClassName: 'cover--machine',
    caseStudyPath: '/case-study/machinery-website-redesign',
  },
  {
    title: 'INTERNAL PROJECT REDESIGN',
    coverSrc: '/images/redesign-cover-1.png',
    coverClassName: 'cover--redesign-1',
    caseStudyPath: '/case-study/internal-project-redesign',
  },
  {
    title: 'FINTECH WEBSITE DESIGN',
    coverSrc: '/images/design-orig-1.png',
    coverClassName: 'cover--design-orig',
    screenClassName: 'screen--tall',
    caseStudyPath: '/case-study/fintech-website-design',
  },
];

export const pluginProjects: Project[] = [
  {
    title: 'DESIGN SYSTEM PLUGIN',
    coverSrc: '/images/machine-cover-1.png',
    coverClassName: 'cover--machine-plugin',
    caseStudyPath: '/case-study/design-system-plugin',
  },
  {
    title: 'ACCESSIBILITY PLUGIN',
    coverSrc: '/images/redesign-cover-2.png',
    coverClassName: 'cover--redesign-2',
    caseStudyPath: '/case-study/accessibility-plugin',
  },
];
