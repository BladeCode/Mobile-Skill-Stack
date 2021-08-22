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
  organizationName: 'Mobile-Skill-Stack', // Usually your GitHub org/user name.
  projectName: 'Mobile-Skill-Stack', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Mobile-Skill-Stack',
      logo: {
        alt: 'Site Logo',
        src: 'img/favicon.svg',
      },
      items: [
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
        // {
        //   href: 'https://github.com/BladeCode/Mobile-Skill-Stack',
        //   label: 'GitHub',
        //   position: 'right',
        // },
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
              label: 'GitHub',
              href: 'https://github.com/BladeCode/Moblie-Skill-Stack',
            },
          ],
        },
      ],
      // logo: {
      //   alt: 'Facebook Open Source Logo',
      //   src: 'img/oss_logo.png',
      //   href: 'https://opensource.facebook.com',
      // },
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/BladeCode/Mobile-Skil-Stack/edit/dev/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/BladeCode/Mobile-Skil-Stack/edit/dev/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
