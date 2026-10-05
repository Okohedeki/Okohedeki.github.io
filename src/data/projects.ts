// Newest first. No `url` = no link (private repo or not published yet).
// `status` shows a small tag next to the name; leave it out for shipped work.

export type Project = {
  id: string;
  name: string;
  date: string; // YYYY-MM
  blurb: string;
  url?: string;
  status?: string;
  tags: string[];
};

export const projects: Project[] = [
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
    id: 'windows-ai-workstation',
    name: 'Windows AI Workstation',
    date: '2026-09',
    status: 'Developer preview',
    blurb:
      'A native Windows interface for document-oriented AI tasks. Review individual actions, inspect output documents, and reopen local task history.',
    tags: ['agents', 'c#', 'winui 3'],
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
    id: 'agentaudit',
    name: 'AgentAudit',
    date: '2026-07',
    url: 'https://github.com/Okohedeki/AgentAudit',
    blurb:
      'Privacy-safe audits of Codex agent sessions, with a dependency-free Python toolkit for visualizing them.',
    tags: ['agents', 'evals', 'python'],
  },
  {
    id: 'autotrainer',
    name: 'AutoTrainer',
    date: '2026-07',
    url: 'https://github.com/Okohedeki/AutoTrainer',
    blurb:
      'Train and verify specialized 9B frontend models with QLoRA and reinforcement learning on one consumer GPU.',
    tags: ['ml', 'rl', 'python'],
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
    id: 'markov',
    name: 'Markov',
    date: '2026-06',
    blurb:
      'A bookmark app that remembers what you forgot. Save sources and notes, search your archive, and resurface old ideas with a reason to revisit them.',
    tags: ['knowledge', 'python', 'ios'],
  },
  {
    id: 'airlock',
    name: 'Airlock',
    date: '2026-05',
    url: 'https://github.com/Okohedeki/airlock',
    blurb:
      'Run agents on your own computer and call them through your own HTTPS relay, with access controls, remote approvals and execution records.',
    tags: ['agents', 'typescript', 'python'],
  },
  {
    id: 'dotclaude',
    name: 'dotclaude',
    date: '2026-05',
    url: 'https://github.com/Okohedeki/dotclaude',
    blurb:
      'My Claude Code setup in one repo: settings, skills, plan review and memory. One script on a fresh macOS or Windows machine and you’re back.',
    tags: ['claude code', 'tooling'],
  },
  {
    id: 'agentsentinel',
    name: 'AgentSentinel',
    date: '2026-04',
    url: 'https://github.com/Okohedeki/AgentSentinel',
    blurb: 'Automated quality recovery for AI coding agents.',
    tags: ['agents', 'quality'],
  },
  {
    id: 'claude-vitals',
    name: 'claude-vitals',
    date: '2026-04',
    blurb:
      'Is your coding agent getting worse? Reads your Claude Code session logs, tracks 20 quality metrics, flags regressions, and prescribes the config changes that fix them.',
    tags: ['claude code', 'quality', 'typescript'],
  },
  {
    id: 'riffborn',
    name: 'Riffborn',
    date: '2026-03',
    status: 'WIP',
    blurb:
      'A Roblox rhythm-combat game where your weapon is a guitar. Hit notes on the beat to land attacks.',
    tags: ['games', 'roblox', 'luau'],
  },
];
