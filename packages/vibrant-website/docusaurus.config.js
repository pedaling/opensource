// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vibrant Design System',
  tagline: 'Open source design system for building modern, cross-platform web and mobile applications.',
  url: 'https://vibrant-design.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: '101 Inc.',
  projectName: 'vibrant',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pedaling/opensource/edit/main/packages/vibrant-website/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/pedaling/opensource/edit/main/packages/vibrant-website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    navbar: {
      title: 'Vibrant Design System',
      items: [
        {
          type: 'doc',
          docId: 'getting-started/introduction',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          type: 'html',
          position: 'right',
          value: '<a href="https://github.com/pedaling/opensource" target="_blank" class="header-github-link"></a>',
        },
      ],
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
          block: { start: 'error-start', end: 'error-end' },
        },
      ],
    },
  },
};

module.exports = config;
