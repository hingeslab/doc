// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hinges',
  tagline: 'Dinosaurs are cool',
  url: 'https://paulieb14@github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'paulieb14', // Usually your GitHub org/user name.
  projectName: 'Hinges-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog:false,
        //blog: {
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hinges',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Hinges.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/hedgeplus-io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://hinges.io/',
            label: 'Website',
            position: 'right',
          },
        ],
    },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: 'docs/intro.md',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/hkqAHKUVGK',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/hingesHQ',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/hinges_EN',
              },
            ],
          },
          {
            title: 'More',
            items: [
             // {
              //  label: 'Blog',
               // to: '/blog',
            //  },
              {
                label: 'GitHub',
                href: 'https://github.com/hedgeplus-io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hinges.`,
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: 'dark',
  
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,
  
        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
