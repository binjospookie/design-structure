module.exports = {
  title: 'Design structure',
  tagline: 'The tagline of my site',
  baseUrl: '/design-structure/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  url: 'https://design-structure.github.io', // Your website URL
  projectName: 'design-structure',
  organizationName: 'binjospookie',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Design structure',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/binjospookie/design-structure',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      defaultLanguage: 'typescript',
      theme: require('prism-react-renderer/themes/vsDark'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/binjospookie/design-structure',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
