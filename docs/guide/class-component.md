# Class 组件

`@Component` 装饰器可以让我们创建一个基于 Class 的 Vue 组件：

```js
import Vue from 'vue';
import Component from 'vue-class-component';

// 类 HelloWorld 将被解析为一个 Vue 组件
@Component
export default class HelloWorld extends Vue {}
```

## Data

我们可以使用 class 属性来初始化 `data`：

```vue
<template>
  <div>{{ message }}</div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  // 声明为组件 data
  message = 'Hello World!';
}
</script>
```

上面的组件会将 `Hello World!` 作为组件 `data` 中 `message` 的值并渲染在 `<div>` 标签元素中。

注意：如果初始化属性的值为 `undefined`，则该 class 属性将不是响应式的，即 Vue 将不会检测到属性的变化：

```js
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  // message 将不是一个响应式的属性
  message = undefined;
}
```

为了避免这种情况，我们可以使用 `null` 值或者 `data` 钩子来替代 `undefined`：

```js
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  // 使用 null 将会使 message 变成一个响应式的属性
  message = null;

  // 关于 data 钩子的详细信息，请参阅钩子部分
  data() {
    return {
      // 在 data 钩子里声明的 hello 也将是响应式的属性
      hello: undefined
    };
  }
}
```

## Methods

我们可以将组件 methods 直接声明为 class 的原型方法：

```vue
<template>
  <button v-on:click="hello">Click</button>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  // 声明为组件 methods
  hello() {
    console.log('Hello World!');
  }
}
</script>
```

## 计算属性

我们可以使用 class 属性的 getter/setter 来声明计算属性：

```vue
<template>
  <input v-model="name" />
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  firstName = 'John';
  lastName = 'Doe';

  // 声明计算属性的 getter
  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  // 声明计算属性的 setter
  set name(value) {
    const splitted = value.split(' ');
    this.firstName = splitted[0];
    this.lastName = splitted[1] || '';
  }
}
</script>
```

## Hooks

`data` 函数，`render` 函数和所有的 Vue 生命周期钩子函数都可以直接声明为 class 原型方法，但是不能在实例本身上调用它们。声明自定义方法时，应该避免使用这些保留名称。

```js
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  // 声明 mounted 生命周期钩子函数
  mounted() {
    console.log('mounted');
  }

  // 声明 render 函数
  render() {
    return <div>Hello World!</div>;
  }
}
```

## 其他选项

对于所有其他选项，则需要将它们传递给装饰器函数：

```vue
<template>
  <OtherComponent />
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import OtherComponent from './OtherComponent.vue';

@Component({
  // 指定 component 选项
  // 查看 Vue.js 文档了解所有可用选项
  // https://vuejs.org/v2/api/#Options-Data
  components: {
    OtherComponent
  }
})
export default class HelloWorld extends Vue {}
</script>
```
