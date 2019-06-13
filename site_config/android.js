export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'Index',
            link: '/en-us/docs/android/android.html',
          },
          {
            title: 'demo1',
            link: '/en-us/docs/android/content/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/android/content/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/android/content/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '大标题',
        children: [
          {
            title: '索引',
            link: '/zh-cn/docs/android/android.html',
          },
          {
            title: '示例1',
            link: '/zh-cn/docs/android/content/demo1.html',
          },
          {
            title: '示例2',
            link: '/zh-cn/docs/android/content/demo2.html',
          },
          {
            title: '目录',
            opened: true,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/android/content/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
