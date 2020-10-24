module.exports = {
  title: 'Mental structure',
  tagline: 'The tagline of my site',
  baseUrl: '/mental-structure/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  url: 'https://mental-structure.github.io', // Your website URL
  projectName: 'mental-structure',
  organizationName: 'binjospookie',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      title: 'Mental structure',
      logo: {
        alt: 'Hmmmm',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/binjospookie/mental-structure',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      defaultLanguage: 'typescript',
      theme: require('prism-react-renderer/themes/vsDark'),
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/binjospookie/mental-structure',
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
