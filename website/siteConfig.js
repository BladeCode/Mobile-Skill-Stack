/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Jerry xu',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: 'https://res.cloudinary.com/incoder/image/upload/v1525515979/favicon-32x32.png',
    infoLink: 'https://incoder.org',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Mobile-Skill-Stack', // Title for your website.
  tagline: 'Mobile develope skill and learn roadmap',
  url: 'https://mobile.incoder.org', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'Mobile-Skill-Stack',
  organizationName: 'BladeCode',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    // {doc: 'test/test', label: 'Test'},
    {doc: 'android/roadmap', label: 'Android'},
    {doc: 'ios/roadmap', label: 'iOS'},
    {doc: 'flutter/roadmap', label: 'Flutter'},
    {doc: 'rn/roadmap', label: 'ReactNative'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Milestones'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon.svg',
  footerIcon: 'img/favicon.svg',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#282c34',
    secondaryColor: '#282c34',
    // tintColor: '#282c34',
    backgroundColor: '#f5fcff',
  },

  blogSidebarCount: 'ALL',

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Jerry xu.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'atom-one-dark',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  enableUpdateTime: true,
  enableUpdateBy: true,
  docsSideNavCollapsible: true,
  gaTrackingId: 'UA-100235665-1',

  // Open Graph and Twitter card images.
  ogImage: 'img/favicon.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  cname: 'mobile.incoder.org',
};

module.exports = siteConfig;
