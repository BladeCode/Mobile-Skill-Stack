"use strict";(self.webpackChunkmobile_skill_stack=self.webpackChunkmobile_skill_stack||[]).push([[100],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),h=a,s=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(s,o(o({ref:t},p),{},{components:r})):n.createElement(s,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6548:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"\u5165\u95e8"},c=void 0,d={unversionedId:"android/mpchart/mpchart2",id:"android/mpchart/mpchart2",isDocsHomePage:!1,title:"\u5165\u95e8",description:"\u6dfb\u52a0\u4f9d\u8d56",source:"@site/docs/android/mpchart/mpchart2.md",sourceDirName:"android/mpchart",slug:"/android/mpchart/mpchart2",permalink:"/docs/android/mpchart/mpchart2",editUrl:"https://github.com/BladeCode/Mobile-Skil-Stack/edit/dev/website/docs/android/mpchart/mpchart2.md",version:"current",frontMatter:{title:"\u5165\u95e8"},sidebar:"androidSidebar",previous:{title:"\u6982\u8981",permalink:"/docs/android/mpchart/mpchart1"},next:{title:"\u901a\u77e5\u9002\u914d",permalink:"/docs/android/notification/notification-adaptation"}},p=[{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",children:[{value:"gradle",id:"gradle",children:[]},{value:"maven",id:"maven",children:[]}]},{value:"\u521b\u5efa View",id:"\u521b\u5efa-view",children:[{value:"\u5e03\u5c40\u65b9\u5f0f",id:"\u5e03\u5c40\u65b9\u5f0f",children:[]},{value:"\u4ee3\u7801\u65b9\u5f0f",id:"\u4ee3\u7801\u65b9\u5f0f",children:[]}]},{value:"\u6dfb\u52a0\u6570\u636e",id:"\u6dfb\u52a0\u6570\u636e",children:[]}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,i.kt)("p",null,"\u6700\u65b0\u7248\u672c\u8bf7\u53ef\u67e5\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PhilJay/MPAndroidChart/releases"},"Github Release"),"\uff0c\u6839\u636e\u9700\u8981\u4fee\u6539\u4e0b\u9762\u4f9d\u8d56\u7684\u7248\u672c"),(0,i.kt)("h3",{id:"gradle"},"gradle"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"# project \u7ea7\u522b build.gradle \u6587\u4ef6\nrepositories {\n    maven { url 'https://jitpack.io' }\n}\n\n# \u5bf9\u5e94 model \u7ea7\u522b build.gradle \u6587\u4ef6\ndependencies {\n    implementation 'com.github.PhilJay:MPAndroidChart:v3.1.0'\n}\n")),(0,i.kt)("h3",{id:"maven"},"maven"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- <repositories> section of pom.xml --\x3e\n<repository>\n    <id>jitpack.io</id>\n   <url>https://jitpack.io</url>\n</repository>\n\x3c!-- <dependencies> section of pom.xml --\x3e\n<dependency>\n    <groupId>com.github.PhilJay</groupId>\n    <artifactId>MPAndroidChart</artifactId>\n    <version>v3.1.0</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"\u521b\u5efa-view"},"\u521b\u5efa View"),(0,i.kt)("p",null,"\u4e0d\u540c\u7c7b\u578b\u7684\u56fe\u8868\uff0c\u4f7f\u7528\u5bf9\u5e94\u4e0d\u540c\u7684 Chart\uff0c\u4e0b\u9762\u7684\u793a\u4f8b\u5df2\u6298\u7ebf\u56fe\u4e3a\u4f8b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6298\u7ebf\u56fe\uff1aLineChart"),(0,i.kt)("li",{parentName:"ul"},"\u6761\u5f62\u56fe\uff1aBarChart"),(0,i.kt)("li",{parentName:"ul"},"\u6247\u5f62\u56fe\uff1aPieChart"),(0,i.kt)("li",{parentName:"ul"},"\u6563\u70b9\u56fe\uff1aScatterChart"),(0,i.kt)("li",{parentName:"ul"},"\u70db\u53f0\u56fe\uff1aCandleStickChart"),(0,i.kt)("li",{parentName:"ul"},"\u96f7\u8fbe\u56fe\uff1aRadarChart"),(0,i.kt)("li",{parentName:"ul"},"\u6c14\u6ce1\u56fe\uff1aBubbleChart")),(0,i.kt)("h3",{id:"\u5e03\u5c40\u65b9\u5f0f"},"\u5e03\u5c40\u65b9\u5f0f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5e03\u5c40\u6587\u4ef6\u4e2d\u6dfb\u52a0\u4f7f\u7528\u7684\u56fe\u8868\u5e03\u5c40",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<com.github.mikephil.charting.charts.LineChart\n    android:id="@+id/chart"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n'))),(0,i.kt)("li",{parentName:"ol"},"\u5728 Activity\uff0c\u6216\u8005 Fragment \u4e2d\u8fdb\u884c\u7ed1\u5b9a",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"}," // in this example, a LineChart is initialized from xml\n LineChart chart = (LineChart) findViewById(R.id.chart);\n")))),(0,i.kt)("h3",{id:"\u4ee3\u7801\u65b9\u5f0f"},"\u4ee3\u7801\u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// programmatically create a LineChart\nLineChart chart = new LineChart(Context);\n// get a layout defined in xml\nRelativeLayout rl = (RelativeLayout) findViewById(R.id.relativeLayout);\nrl.add(chart); // add the programmatically created chart\n")),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u6570\u636e"},"\u6dfb\u52a0\u6570\u636e"))}m.isMDXComponent=!0}}]);