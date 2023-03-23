
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
  favicon: '/img/Hinges_Logo_Favicon.png', 


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
          showLastUpdateTime: false,
          routeBasePath: '/',
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links. https://github.com/<user or org>/<repo>/edit/<branch>/<subfolder of website if used>
          editUrl:
            'https://github.com/hingeslab/doc/edit/main/',  
        },
        blog:false,
        //blog: {
          //showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/hingeslab/doc/',
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
            href: "https://github.com/hingeslab/doc",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: 'https://hinges.io/',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: null,
            items: [
              {
                html: `
                <div class="footer-left">
                  <a class="footer-logo" href="https://www.hinges.io/" target="_blank" rel="noopener noreferrer" title="Hinges">
                  <img src="/img/Hinges.png" alt="My Site Logo" class="themedImage_ToTc themedImage--dark_i4oU">
                  </a>
                  <div class="copyright">
                    <p class="copyright-text">© 2023 Hinges</p>
                    <div class="copyright-links">
                  </div>
                </div>
                `,
              },
            ],
          },
          {
            title: null,
            items: [
              {
                html: `
                  <p class="right">
                    <nav class="social-links">
                        <a class="social-link" href="https://t.me/hinges_EN" target="_blank" rel="noopener noreferrer" title="Github">
                         <svg style="color: white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M88,134.9,177.9,214a8,8,0,0,0,13.1-4.2L228.6,45.6a8,8,0,0,0-10.7-9.2L33.3,108.9c-7.4,2.9-6.4,13.7,1.4,15.3Z" fill="white" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path><line x1="88" y1="134.9" x2="224.1" y2="36.6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></line><path d="M132.9,174.4l-31.2,31.2A8,8,0,0,1,88,200V134.9" fill="white" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"></path></svg>
                        </a>
                        <a class="social-link" href="https://discord.gg/gC7cYZ4bbm" target="_blank" rel="noopener noreferrer" title="Discord">
                          <svg width="100%" height="100%" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M60.105 4.898A58.55 58.55 0 0 0 45.653.415a.22.22 0 0 0-.233.11 40.784 40.784 0 0 0-1.8 3.697c-5.456-.817-10.886-.817-16.23 0-.485-1.164-1.201-2.587-1.828-3.697a.228.228 0 0 0-.233-.11 58.386 58.386 0 0 0-14.451 4.483.207.207 0 0 0-.095.082C1.578 18.73-.944 32.144.293 45.39a.244.244 0 0 0 .093.167c6.073 4.46 11.955 7.167 17.729 8.962a.23.23 0 0 0 .249-.082 42.08 42.08 0 0 0 3.627-5.9.225.225 0 0 0-.123-.312 38.772 38.772 0 0 1-5.539-2.64.228.228 0 0 1-.022-.378 31.17 31.17 0 0 0 1.1-.862.22.22 0 0 1 .23-.03c11.619 5.304 24.198 5.304 35.68 0a.219.219 0 0 1 .233.027c.356.293.728.586 1.103.865a.228.228 0 0 1-.02.378 36.384 36.384 0 0 1-5.54 2.637.227.227 0 0 0-.121.315 47.249 47.249 0 0 0 3.624 5.897.225.225 0 0 0 .249.084c5.801-1.794 11.684-4.502 17.757-8.961a.228.228 0 0 0 .092-.164c1.48-15.315-2.48-28.618-10.497-40.412a.18.18 0 0 0-.093-.084Zm-36.38 32.427c-3.497 0-6.38-3.211-6.38-7.156 0-3.944 2.827-7.156 6.38-7.156 3.583 0 6.438 3.24 6.382 7.156 0 3.945-2.827 7.156-6.381 7.156Zm23.593 0c-3.498 0-6.38-3.211-6.38-7.156 0-3.944 2.826-7.156 6.38-7.156 3.582 0 6.437 3.24 6.38 7.156 0 3.945-2.798 7.156-6.38 7.156Z" fill="currentColor"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h71v55H0z"/></clipPath></defs></svg>
                        </a>
                        <a class="social-link" href="https://twitter.com/hingesHQ" target="_blank" rel="noopener noreferrer" title="Twitter">
                          <svg width="100%" height="100%" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 2.013a9.395 9.395 0 0 1-2.593.676A4.348 4.348 0 0 0 21.392.314a9.341 9.341 0 0 1-2.866 1.042A4.62 4.62 0 0 0 15.232 0c-2.493 0-4.514 1.922-4.514 4.292 0 .336.04.664.117.978C7.083 5.09 3.758 3.382 1.532.786A4.115 4.115 0 0 0 .92 2.944c0 1.489.796 2.802 2.007 3.571A4.669 4.669 0 0 1 .884 5.98v.053c0 2.08 1.555 3.815 3.62 4.209a4.744 4.744 0 0 1-2.038.074c.574 1.705 2.241 2.945 4.216 2.98a9.358 9.358 0 0 1-5.605 1.837c-.365 0-.724-.02-1.077-.06A13.257 13.257 0 0 0 6.918 17c8.303 0 12.843-6.54 12.843-12.21 0-.187-.004-.372-.013-.556A8.929 8.929 0 0 0 22 2.013Z" fill="currentColor"/></svg>
                        </a>
                    </nav>
                  </p>
              `,
              },
            ],
          },
        ],
      },
      colorMode: {
        // "dark" | "light"
        defaultMode: 'dark',
  
        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,
  
        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultMode
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;

