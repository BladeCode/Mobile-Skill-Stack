---
title: 入门
---

## 添加依赖

最新版本请可查看：[Github Release](https://github.com/PhilJay/MPAndroidChart/releases)，根据需要修改下面依赖的版本

### gradle

```gradle
# project 级别 build.gradle 文件
repositories {
    maven { url 'https://jitpack.io' }
}

# 对应 model 级别 build.gradle 文件
dependencies {
    implementation 'com.github.PhilJay:MPAndroidChart:v3.1.0'
}
```

### maven

```xml
<!-- <repositories> section of pom.xml -->
<repository>
    <id>jitpack.io</id>
   <url>https://jitpack.io</url>
</repository>
<!-- <dependencies> section of pom.xml -->
<dependency>
    <groupId>com.github.PhilJay</groupId>
    <artifactId>MPAndroidChart</artifactId>
    <version>v3.1.0</version>
</dependency>
```

## 创建 View

不同类型的图表，使用对应不同的 Chart，下面的示例已折线图为例
* 折线图：LineChart
* 条形图：BarChart
* 扇形图：PieChart
* 散点图：ScatterChart
* 烛台图：CandleStickChart
* 雷达图：RadarChart
* 气泡图：BubbleChart

### 布局方式

1. 布局文件中添加使用的图表布局
    ```xml
    <com.github.mikephil.charting.charts.LineChart
        android:id="@+id/chart"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
    ```
2. 在 Activity，或者 Fragment 中进行绑定
   ```java
    // in this example, a LineChart is initialized from xml
    LineChart chart = (LineChart) findViewById(R.id.chart);
   ```

### 代码方式

```java
// programmatically create a LineChart
LineChart chart = new LineChart(Context);
// get a layout defined in xml
RelativeLayout rl = (RelativeLayout) findViewById(R.id.relativeLayout);
rl.add(chart); // add the programmatically created chart
```

## 添加数据

