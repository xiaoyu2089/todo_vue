# vue 基础

##概述
Vue.js（读音 /vjuː/, 类似于 view）是一个构建数据驱动的 web 界面的库。Vue.js 的目标是通过尽可能简单的 API 实现*响应的数据绑定*和*组合的视图组件*。

## vue实例

###构造器
每个 Vue.js 应用的起步都是通过构造函数 Vue 创建一个 Vue 的根实例：

```js
var vm = new Vue({
  // 选项
})
```

一个 Vue 实例其实正是一个 MVVM 模式中所描述的 ViewModel - 因此在文档中经常会使用 vm 这个变量名。

在实例化 Vue 时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项。全部的选项可以在 API 文档中查看。

可以扩展 Vue 构造器，从而用预定义选项创建可复用的组件构造器：

```js
var MyComponent = Vue.extend({
  // 扩展选项
})

// 所有的 `MyComponent` 实例都将以预定义的扩展选项被创建
var myComponentInstance = new MyComponent()

```