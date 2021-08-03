# 概述

Vue Class Component 是一个可以让你使用 class 风格（class-style）语法来编写 Vue 组件的库。例如，下面是一个使用 Vue Class Component 编写的简单的计数器组件的例子：

```vue
<template>
  <div>
    <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// 使用 class 风格语法定义组件
@Component
export default class Counter extends Vue {
  // class 的属性将成为组件的 data
  count = 0

  // class 的方法将成为组件的 mehtods
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>
```

如这个例子所示，我们可以使用 `@Component` 装饰器来标注 class，从而使用直观且标准的 class 语法来定义组件的 data 和 methods。我们可以简单地用 class 风格组件替换原本的组件定义，因为它与组件定义的普通选项对象风格（ordinary options object style）等效。

使用 class 风格定义组件，您不仅可以更改语法，还可以利用一些 ECMAScript 语言功能，例如类继承和装饰器。Vue 类组件还提供了一个用于 mixin 继承的 `mixins` 功能，以及一个 `createDecorator` 函数来轻松创建自己的装饰器。 

我们还可以通过 [Vue Property Decorator](https://github.com/kaorun343/vue-property-decorator) 提供的 `@Prop` 和 `@Watch` 装饰器拓展 Vue Class Component 以便在组件中使用其他属性。
