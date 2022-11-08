export const HistoryData: HistoryItem[] = [
  {
    title: 'Interos',
    description:
      "I'm here now! At Interos, I'm working with an amazing team and helping solve the supply chain issue affecting so much of our world. We're working on a greenfield project and it's been a ton of fun working with modern tools.",
    from: new Date(2022, 2),
    to: 'Current',
    highlights: [],
  },
  {
    title: 'Oracle',
    description:
      'I had been wanting to pivot into specializing in frontend development for a while and found my opportunity with Oracle. Here, I was able to begin deepening my understanding of my favorite part of the tech stack.',
    from: new Date(2021, 11),
    to: new Date(2022, 2),
    highlights: [],
  },
  {
    title: 'Counterpointe Solutions',
    description:
      "First position in software where I contributed as a full stack engineer at a small software consulting company. I was able to wear many hats and familiarize myself with facets of the software development lifecycle and stack. Couldn't have asked for a better foundation.",
    from: new Date(2020, 6),
    to: new Date(2021, 11),
    highlights: [],
  },
];

type HistoryItem = {
  title: string;
  description: string;
  from: Date;
  to: Date | 'Current';
  highlights: string[];
};
