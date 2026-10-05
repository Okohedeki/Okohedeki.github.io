// Newest first. No `url` = no link (private repo or not published yet).
// `status` shows a small tag next to the name; leave it out for shipped work.

export type Project = {
  id: string;
  name: string;
  date: string; // YYYY-MM
  blurb: string;
  url?: string;
  demo?: string; // live samples, shown as a second link under the blurb
  status?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: 'scroll-studio',
    name: 'Scroll Studio',
    date: '2026-10',
    url: 'https://github.com/Okohedeki/scroll-studio',
    demo: 'https://okohedeki.github.io/scroll-studio-showcase/',
    blurb:
      'An open-source engine that turns one YAML file into a scroll-driven website: AI film, artwork that paints itself, live 3D, product renders, photo parallax, charts and maps, all built on your own GPU.',
    tags: ['web', 'ai video', '3d', 'python', 'typescript'],
  },
  {
    id: 'icarus',
    name: 'Icarus',
    date: '2026-10',
    blurb:
      'The animation on the home page. He builds wings, flies, falls, changes one thing about the wings and flies a little longer, until he reaches the sun. Every pixel, note and wing design comes from code.',
    tags: ['pixel art', 'procedural', 'javascript'],
  },
  {
    id: 'braindance-studio',
    name: 'Braindance Studio',
    date: '2026-09',
    url: 'https://github.com/Okohedeki/braindance-studio',
    blurb:
      'Turn a walkthrough video into a 3D scene you can step into, explore and fill in.',
    tags: ['video', '3d', 'python'],
  },
  {
    id: 'resonance-studio',
    name: 'Resonance Studio',
    date: '2026-09',
    status: 'Prototype',
    blurb:
      'Find the speakers in a recording, listen to one voice alongside the video, and export each one as its own track. A local desktop app.',
    tags: ['audio', 'react', 'tauri', 'python'],
  },
  {
    id: 'fieldnotes',
    name: 'Fieldnotes',
    date: '2026-09',
    url: 'https://github.com/Okohedeki/fieldnotes',
    blurb:
      'A local-first workspace for posting consistently, with an inspiration tracker for LinkedIn, X and TikTok.',
    tags: ['writing', 'javascript'],
  },
  {
    id: 'rig',
    name: 'rig',
    date: '2026-07',
    url: 'https://github.com/Okohedeki/rig',
    blurb:
      'GitOps for production AI behavior. Version, diff, test, promote, canary and roll back complete AI harnesses.',
    tags: ['agents', 'devops'],
  },
  {
    id: 'crpg-rle',
    name: 'crpg-rle',
    date: '2026-07',
    url: 'https://github.com/Okohedeki/crpg-rle',
    status: 'In progress',
    blurb:
      'The first act of Tyranny as a reinforcement-learning environment. The agent plays the live game through the same inputs a player uses.',
    tags: ['rl', 'games', 'python'],
  },
  {
    id: 'claude-vitals',
    name: 'claude-vitals',
    date: '2026-04',
    blurb:
      'Is your coding agent getting worse? Reads your Claude Code session logs, tracks 20 quality metrics, flags regressions, and prescribes the config changes that fix them.',
    tags: ['claude code', 'quality', 'typescript'],
  },
];
