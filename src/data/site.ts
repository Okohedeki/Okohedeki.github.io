// Everything on the home page lives here.
// Lines are HTML so you can drop links in; keep them short.

export const site = {
  name: 'Edeki Okoh',
  title: 'Edeki Okoh',
  description:
    'Software engineer. Side projects for agents, sound and video, and the ideas you save.',

  // Put your photo in /public (e.g. public/me.jpg) and set this to 'me.jpg'.
  // Empty hides the photo column.
  photo: '',
  photoAlt: 'Edeki Okoh',

  lines: [
    {
      label: 'By day',
      html: 'Software engineer, working on financial-services software.',
    },
    {
      label: 'By night',
      html: 'Side projects.',
    },
    {
      label: 'By accident',
      html:
        'CRPGs. Sometimes I <a href="https://github.com/Okohedeki/crpg-rle">teach my agent to play one</a>.',
    },
  ],

  // e.g. 'phoenix'. Leave empty to hide the line.
  currently: '',

  links: [
    { label: 'Projects', href: 'projects' },
    { label: 'GitHub', href: 'https://github.com/Okohedeki' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/edeki-o-58895bb2/' },
    { label: 'Email', href: 'mailto:okohedeki@gmail.com' },
  ],
};

export const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);

// Prefixes internal paths with the deploy base (BASE_URL).
export const url = (path = '') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
