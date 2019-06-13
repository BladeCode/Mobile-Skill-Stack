// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'mobile.incoder.org', // 站点部署域名，无需协议和path等
  // defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'Home',
        link: '/en-us/index.html',
      },
      {
        key: 'android',
        text: 'Android',
        link: '/en-us/docs/android/android.html',
      },
      {
        key: 'ios',
        text: 'iOS',
        link: '/en-us/docs/ios/ios.html',
      },
      {
        key: 'flutter',
        text: 'Flutter',
        link: '/en-us/docs/flutter/flutter.html',
      },
      {
        key: 'reactnative',
        text: 'ReactNative',
        link: '/en-us/docs/reactnative/reactnative.html',
      },
      {
        key: 'milestones',
        text: 'Milestones',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'About',
        link: '/en-us/community/index.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Official link',
      list: [
        {
          text: 'Android',
          link: 'https://www.android.com',
        },
        {
          text: 'iOS',
          link: 'https://developer.apple.com',
        },
        {
          text: 'Flutter',
          link: 'https://flutter.dev',
        },
        {
          text: 'ReactNative',
          link: 'https://facebook.github.io/react-native',
        },
      ],
    },
    resources: {
      title: 'Link',
      list: [
        {
          text: 'BladeCode',
          link: 'https://incoder.org',
        },
        {
          text: 'RootCluster',
          link: 'https://rootcluster.github.io',
        },
      ],
    },
    copyright: 'Copyright © 2019 Jerry xu',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: 'Home',
        link: '/zh-cn/index.html',
      },
      {
        key: 'android',
        text: 'Android',
        link: '/zh-cn/docs/android/android.html',
      },
      {
        key: 'ios',
        text: 'iOS',
        link: '/zh-cn/docs/ios/ios.html',
      },
      {
        key: 'flutter',
        text: 'Flutter',
        link: '/zh-cn/docs/flutter/flutter.html',
      },
      {
        key: 'reactnative',
        text: 'ReactNative',
        link: '/zh-cn/docs/reactnative/reactnative.html',
      },
      {
        key: 'milestones',
        text: 'Milestones',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: 'About',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '免责声明的具体内容',
    },
    documentation: {
      title: '官方链接',
      list: [
        {
          text: 'Android',
          link: 'https://developers.android.google.cn',
        },
        {
          text: 'iOS',
          link: 'https://developer.apple.com',
        },
        {
          text: 'Flutter',
          link: 'https://flutter.dev',
        },
        {
          text: 'ReactNative',
          link: 'https://facebook.github.io/react-native',
        },
      ],
    },
    resources: {
      title: '链接',
      list: [
        {
          text: 'BladeCode',
          link: 'https://incoder.org',
        },
        {
          text: 'RootCluster',
          link: 'https://rootcluster.github.io',
        },
      ],
    },
    copyright: 'Copyright © 2019 Jerry xu',
  },
};
