// Prompts people paste into Claude Code. Each one gets its own page at /resources/<slug>.

export type Resource = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  prompt: string;
  does: string[];
  forWho: string;
  note?: string; // HTML, shown under "for who"
};

export const resources: Resource[] = [
  {
    slug: 'push-often',
    category: 'claude code setup',
    title: 'Push your work after every step',
    summary:
      'A skill that makes Claude Code commit and push to a private GitHub repo as it goes, so nothing lives only on your laptop.',
    prompt: `Set up a Claude Code skill for me called push-often, so my work gets committed and pushed to GitHub as I go.

1. Check that git and the GitHub CLI (gh) are installed and that \`gh auth status\` shows I'm logged in. If anything is missing, stop and walk me through fixing it.

2. Create ~/.claude/skills/push-often/SKILL.md. Its description should say to use it as soon as a project folder has real work in it but no remote, after each meaningful unit of work, before long-running jobs, before switching tasks, and at the end of every session. The steps:
   - Look first: git status, git remote -v, the current branch, git diff --stat.
   - No repo or no remote: git init -b main, add a .gitignore, then run \`gh repo create <me>/<short-kebab-name> --private --source . --remote origin --push\`. Always private. Public only if I explicitly say so.
   - Never commit secrets (.env files, keys, tokens), environments or caches (node_modules, .venv, build output), or model weights, datasets and large media. Put them in .gitignore instead. Ask me before committing any file over 50 MB.
   - Commit with a message that says what changed and why. Unfinished work is fine as "WIP: ...".
   - Push. Never force-push, rewrite pushed history or skip hooks. If the push is rejected, pull --rebase, fix any conflicts, and push again.
   - Report in one line what was pushed and where.

3. Add this line to ~/.claude/CLAUDE.md (create the file if it doesn't exist): "Push work often, in every repo, following the push-often skill."

4. Show me the finished SKILL.md and tell me how to run it by hand with /push-often.`,
    does: [
      'Checks that git and the GitHub CLI are ready',
      'Writes a push-often skill into ~/.claude/skills',
      'Adds a standing rule to your global CLAUDE.md',
      'Keeps every new repo private unless you say otherwise',
    ],
    forWho:
      'Anyone using Claude Code who has lost work to a deleted folder, or who forgets to push until the end of the day.',
  },
  {
    slug: 'portable-claude-code',
    category: 'claude code setup',
    title: 'Take your Claude Code setup to a new machine',
    summary:
      'Keep your settings, hooks and skills in one repo you can install anywhere, using dotclaude as the starting point.',
    prompt: `I want my Claude Code setup (settings, hooks and the skills I've written) in a git repo, so I can install it on a new machine with one script. Use https://github.com/Okohedeki/dotclaude as the starting point.

1. Read the dotclaude README and the setup script for my OS (setup.sh on macOS, setup.ps1 on Windows). Explain in plain words what it installs and which files it links into ~/.claude/.
2. Look at my current ~/.claude/ and list what should travel (settings.json, hooks, skills I wrote myself) and what must stay on this machine (memory, sessions, caches, and anything that contains a token or key).
3. Create a new private repo under my GitHub account with dotclaude's scripts, then swap in my settings and skills. Remove anything of dotclaude's that I don't use.
4. Before running the setup script, tell me exactly what it will change and wait for my OK. It moves existing files to .pre-dotclaude.bak backups, so tell me where those will end up.
5. Run it, then tell me how to confirm that my skills show up in a new session.

Never copy ~/.claude/memory or any credentials into the repo.`,
    does: [
      'Explains what the installer does before anything runs',
      'Separates the config that travels from the data that stays local',
      'Builds a private repo of your own setup',
      'Backs up anything it replaces',
    ],
    forWho:
      'People who use Claude Code on more than one computer, or who are about to set up a new one.',
  },
  {
    slug: 'is-my-agent-getting-worse',
    category: 'measuring quality',
    title: 'Check whether your coding agent is getting worse',
    summary:
      'Measure, from your own session logs, whether Claude Code still researches before it edits.',
    prompt: `I want to know whether Claude Code's work quality has changed over the last few weeks, using my real session logs rather than gut feeling.

Claude Code saves sessions as JSONL files under ~/.claude/projects/. Write a small script (Python or Node, no extra dependencies) that reads them, then run it. Only read the files. Don't change or move them.

Group the results by week and calculate:
1. Read:edit ratio: file reads per file edit. Around 6 or more means it researches before acting; around 2 means it's guessing.
2. Research:mutation ratio: all research tools (Read, Grep, Glob, searches) per change (Edit, Write).
3. Blind edit rate: the share of edits to a file that wasn't read earlier in the same session.
4. Write vs edit: how often it rewrites a whole file instead of making a targeted edit.
5. Interrupts: how often I stopped it mid-task.
6. Prompts per session.

Show a table with one row per week, mark any metric that got noticeably worse, and list the three sessions with the most blind edits so I can look at them. Then suggest one or two concrete changes (CLAUDE.md rules or settings) aimed at the worst number.

Don't include any of my prompts or file contents in the summary. Counts only.`,
    does: [
      'Reads your local session logs and reports counts, not content',
      'Tracks the research-before-editing ratios from a 234,760-tool-call analysis',
      'Finds the sessions with the most blind edits',
      'Suggests a fix aimed at your worst metric',
    ],
    forWho:
      'Claude Code users who feel the quality has dropped and want numbers to check that feeling against.',
    note:
      'A lightweight version of claude-vitals. The metrics come from <a href="https://github.com/anthropics/claude-code/issues/42796">@stellaraccident’s analysis</a> of 234,760 tool calls.',
  },
];
