<h2 align="center">
    <a href="https://mobile.incoder.org">Mobile-Skill-Stack</a>
</h2>

![Website Status](https://github.com/BladeCode/Mobile-Skill-Stack/actions/workflows/deploy.yml/badge.svg)
![dev branch parameter](https://github.com/BladeCode/Mobile-Skill-Stack/actions/workflows/deploy.yml/badge.svg?branch=dev)
![event parameter](https://github.com/BladeCode/Mobile-Skill-Stack/actions/workflows/deploy.yml/badge.svg?event=pull_request)

Mobile-Skill-Stack 项目是总结移动端开发，知识路线，项目遇到的坑，开发技巧等一系列围绕移动端开发，不仅限于 Native 方式开发，同样也包含当前热门的 flutter 开发等，欢迎有同样想法的朋友一起来完善。

## Summary

```
Mobile-Skill-Stack
    ├── master      # 项目主分支，稳定网站源码，接收其他分支（非 gh-pages ）PR
    ├── gh-pages    # 网站托管分支，由 master 分支通过脚本构建
    ├── dev         # 开发分支
    └── ……
```

> master 分支只接受其他分支（如：dev分支）merge

## Local Previwe

本地预览

```console
git clone https://github.com/BladeCode/Mobile-Skill-Stack.git -b dev
cd Mobile-Skill-Stack/
yarn install
yarn start
```

## Contributing

1. fork [project](https://github.com/BladeCode/Mobile-Skill-Stack)
2. clone your fork project and create new branch
3. add your content on your new branch and commit
4. send pull request and summary change content

## Rule

```
<type>(<scope>):(emoji) <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

通过git commit 命令带出 vim 界面填写的最终结果应该类似如上这个结构，大致分为三个部分（使用空行分隔）：
* 标题行：
* 主题内容

### 标题行

#### type（必须） 

commit 的类别，只允许使用下面几个标识
* feat : 新功能
* fix : 修复bug
* docs : 文档改变
* style : 代码格式改变
* refactor : 某个已有功能重构
* perf : 性能优化
* test : 增加测试
* build : 改变了build工具 如 grunt换成了 npm
* revert : 撤销上一次的 commit
* chore : 构建过程或辅助工具的变动

#### scope（可选）

用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

#### emoji（可选）

用于说明 commit 的类别，主要是为了便于查看

#### subject（必须）

commit 的简短描述，不超过50个字符

### 主题内容

描述为什么修改，做了什么样的修改，以及开发的思路等

### 页脚注释

放 breaking changes 或 closed issue

## Thanks

1. [Node](https://nodejs.org)
2. [Docusaurus](https://docusaurus.io)
3. [Git commit](https://incoder.org/2019/07/14/git-emoji)

## LICENSE
```
Copyright 2021 Jerry xu.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
