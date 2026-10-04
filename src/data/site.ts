// Everything on the home page lives here.
// Lines are HTML so you can drop links in; keep them lowercase and short.

export const site = {
  name: 'edeki okoh',
  title: 'Edeki Okoh',
  description:
    'Software engineer. Side projects for agents, sound and video, and the ideas you save.',

  // Put your photo in /public (e.g. public/me.jpg) and set this to 'me.jpg'.
  // Empty hides the photo column.
  photo: '',
  photoAlt: 'Edeki Okoh',

  lines: [
    {
      label: 'day',
      html: 'software engineer, working on financial-services software.',
    },
    {
      label: 'night',
      html:
        'side projects: <a href="https://github.com/Okohedeki/airlock">agents you run from your own machine</a>, ' +
        '<a href="https://github.com/Okohedeki/braindance-studio">tools for sound and video</a>, ' +
        'and <a href="projects#riffborn">a game where your weapon is a guitar</a>.',
    },
    {
      label: 'off-hours',
      html:
        'crpgs. sometimes i <a href="https://github.com/Okohedeki/crpg-rle">teach an rl agent to play one</a>.',
    },
  ],

  // e.g. 'phoenix'. Leave empty to hide the line.
  currently: '',

  links: [
    { label: 'projects', href: 'projects' },
    { label: 'resources', href: 'resources' },
    { label: 'github', href: 'https://github.com/Okohedeki' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/edeki-o-58895bb2/' },
    { label: 'email', href: 'mailto:okohedeki@gmail.com' },
  ],
};

export const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);

// Prefixes internal paths with the deploy base (/blog).
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
