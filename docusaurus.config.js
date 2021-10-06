const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mobile-Skill-Stack',
  tagline: 'mobile skill stack are cool',
  url: 'https://mobile.incoder.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BladeCode',
  projectName: 'Mobile-Skill-Stack',
  noIndex: true,

  presets: [
    ['@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/BladeCode/Mobile-Skil-Stack/edit/dev/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'https://github.com/BladeCode/Mobile-Skil-Stack/edit/dev/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Mobile-Skill-Stack',
      logo: {
        alt: 'Logo',
        src: 'img/mobile_black.svg',
        srcDark: 'img/mobile_white.svg',
      },
      items: [
        { to: '/about/index', label: 'About', position: 'left' },
        {
          type: 'doc',
          docId: 'kotlin/index',
          position: 'left',
          label: 'Kotlin',
        },
        {
          type: 'doc',
          docId: 'swift/index',
          position: 'left',
          label: 'Swift',
        },
        {
          type: 'doc',
          docId: 'dart/index',
          position: 'left',
          label: 'Dart',
        },

        {
          type: 'doc',
          docId: 'android/roadmap',
          position: 'right',
          label: 'Android',
        },
        {
          type: 'doc',
          docId: 'ios/roadmap',
          position: 'right',
          label: 'iOS',
        },
        {
          type: 'doc',
          docId: 'flutter/roadmap',
          position: 'right',
          label: 'Flutter',
        },
        { to: '/blog', label: 'Milestones', position: 'right' },
        {
          href: 'https://github.com/BladeCode/Mobile-Skill-Stack',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'Android',
              to: '/docs/android/roadmap',
            },
            {
              label: 'iOS',
              to: '/docs/ios/roadmap',
            },
            {
              label: 'Flutter',
              to: '/docs/flutter/roadmap',
            },
          ],
        },
        {
          title: 'Official Developer',
          items: [
            {
              label: 'Android',
              href: 'https://developer.android.google.cn',
            },
            {
              label: 'iOS',
              href: 'https://developer.apple.com',
            },
            {
              label: 'Flutter',
              href: 'https://flutter.dev"',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://incoder.org',
            },
            {
              label: 'IncoderApp',
              href: 'https://incoder.app',
            },
            {
              label: 'Backend-Skill-Stafk',
              href: 'https://github.com/BladeCode/Backend-Skill-Stafk',
            },
          ],
        },
      ],
      logo: {
        alt: 'Logo',
        src: 'img/mobile_white.svg',
        href: 'https://mobile.incoder.org',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Jerry xu, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    googleAnalytics: {
      trackingID: 'UA-100235665-1',
      // 可选字段
      anonymizeIP: true, // 是否匿名化 IP？
    },
  },

  plugins: [
    ['@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: 'about',
        routeBasePath: 'about',
        sidebarPath: require.resolve('./sidebarsAbout.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    ['@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ]
};
