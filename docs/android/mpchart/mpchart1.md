---
title: 概要
---

![smaller](../../assets/android/feature_graphic_smaller.png)

MPAndroidChart 是 Android 中比较流行的一项图表框架（虽然已经好久没更新，但依旧排在图表的前面），该系列是对于官方文档的翻译及实践所写，关于引用到的地址，请看文章末尾。

## MPAndroidChart 核心功能

* 多样的图表类型：
  * 折线图（LineChart），
  * 条形图（BarChart）【垂直，水平，堆叠，分组】，
  * 扇形图（PieChart），
  * 散点图（ScatterChart），
  * 烛台图（CandleStickChart）【用于财务数据】，
  * 雷达图（RadarChart），
  * 气泡图（BubbleChart）
* 组合图（例如：折线图和条形图的组合）
* X，Y 轴上的缩放（支持触摸手势，单独的轴缩放等）
* 拖动/平移（带有触摸手势）
* 分开的（双）Y 轴
* 高亮显示值（带有可自定义的弹出视图）
* 将图表保存到SD卡（作为图片）
* 预定义颜色模板
* 图例（自动生成，可自定义）
* 可自定义的轴（X 轴和 Y 轴）
* 动画（在X 轴和 Y 轴上建立动画）
* 极限线（提供其他信息，最大值等，也可以理解为参考线）
* 触摸，手势和选择回调的侦听器
* 完全可定制（绘画，字体，图例，颜色，背景，虚线等）
* 支持[Realm.io](https://realm.io)移动数据库
* 在折线图（LineChart）和条形图（BarChart）中平滑渲染多达10.000个数据点（在运行Android 6.0的2014 OnePlus One上测试）
* 轻量级（方法计数〜1.4K）
* 可作为.jar文件使用（大小仅为500kb）
* 可作为gradle依赖项并通过Maven获得
* [Google Play](https://play.google.com/store/apps/details?id=com.xxmassdeveloper.mpchartexample)可获得演示应用
* 可通过[Github Issues](https://github.com/PhilJay/MPAndroidChart/issues) 或者 [StackOverFlow](https://stackoverflow.com/questions/tagged/mpandroidchart)来跟进和进行交流
* 提供了与之工作方式形同的：iOS [Charts](https://github.com/danielgindi/Charts)图表库
* 提供了Xamarin支持：[MPAndroidChart.Xamarin](https://github.com/Flash3001/MPAndroidChart.Xamarin)
* 对动态和实时数据的支持有限

>* MPAndroidChart是免费软件，因此**未正式支持动态和实时数据**。如果您正在寻找具有极高实时性能和技术支持的企业级图表解决方案，我们建议您使用 [SciChart Android](https://www.scichart.com/android-chart-features/?source=MPAndroidChart)
>* 所有MPAndroidChart用户都可以享受SciChart商店**5％**的特别折扣：**MPANDROIDCHART**

## 指导文档

1. [入门]
2. [图表的互动]
3. [突出价值]
4. [坐标轴]
5. [X 轴]
6. [Y 轴]
7. [设定数据]
8. [设置颜色]
9. [格式化值]
10. [常规设置和样式]
11. [具体设置和样式]
12. [图例]
13. [描述]
14. [动态和实时数据]
15. [修改视口]
16. [动画]
17. [MarkerView]
18. [ChartData类]
19. [ChartData子类]
20. [DataSet类（通用DataSet样式）]
21. [DataSet子类（特定的DataSet样式）]
22. [ViewPortHandler]
23. [自定义填充线位置（FillFormatter）]
24. [Xamarin]
25. [创建自己的（自定义）数据集]
26. [杂项（更有用的东西）]

## 附录

* 原仓库：[MPAndroidChart](https://github.com/PhilJay/MPAndroidChart)
* 官方教程：[Tutorials](https://weeklycoding.com/mpandroidchart/)  
* 个人练习示例：[RootCluster](https://github.com/RootCluster/MPAndroidChart)
