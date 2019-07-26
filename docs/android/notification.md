---
id: notification
title: 通知
---

## 概述

通知是指Android在应用的界面之外显示的消息，旨在向用户提供提醒、来自他人的通信信息或应用中的其他实时信息。用户可以点按通知来打开应用，也可以直接在通知中执行某项操作，还可以下拉通知栏查看具体的通知扼要内容。

## 样式

通知在不同的位置有着不同的显示样式，主要表现位状态栏显示通知图标，通知栏中显示比较详细的条目，应用图标上的标志，锁屏界面显示的通知等样式

## 组成

![notification-callouts](https://developer.android.google.cn/images/ui/notifications/notification-callouts_2x.png)

1. 小图标：**必须提供**，通过`setSmallIcon()`进行设置
2. 应用图标：由系统提供
3. 时间戳：由系统提供，但您可以通过`setWhen()`将其替换掉或者通过`setShowWhen(false)`将其隐藏
4. 大图标：**可选内容**（通常仅用于联系人照片，请勿将其用于应用图标），通过`setLargeIcon()`进行设置
5. 标题：**可选内容**，通过`setContentTitle()`进行设置
6. 文本：**可选内容**，通过`setContentText()`进行设置

## 操作

## 参考
* [Notifications](https://developer.android.google.cn/guide/topics/ui/notifiers/notifications)
* [通知设计指南](https://material.io/design/platform-guidance/android-notifications.html)