# 安装

## Vue CLI 安装

你可以使用 [Vue CLI](https://cli.vuejs.org/) 轻松安装 Vue Class Component。运行下面命令来创建一个新项目：

```sh
$ vue create hello-world
```

系统会询问你是否使用预设配置。请选择 "Manually select features"：

选中 TypeScript 功能来使用 Vue Class Component。你可以添加其他需要的功能：

输入 `y` 来回答 `Use class-style component syntax?`：

你可以根据自己的喜好回答剩余的问题。在安装结束后，Vue CLI 会创建一个新的安装了 Vue Class Component 的项目目录。

## 手动安装

如果你更喜欢手动安装，请通过 npm 安装并配置你的构建工具。

### npm

你可以使用 `npm` 安装 Vue Class Component。作为 Vue Class Component 的依赖库，请确定你已经安装了 Vue 核心库：

```sh
$ npm install --save vue vue-class-component
```

使用 `yarn` 安装：

```sh
$ yarn add --save vue vue-class-component
```

### 构建设置

你需要在项目中配置 [TypeScript](https://www.typescriptlang.org/) 或者 [Babel](https://babeljs.io/)，才可以使用 Vue Class Component。因为它依赖于 [ECMAScript stage 1 decorators](https://github.com/wycats/javascript-decorators/blob/master/README.md)，需要将其转换为在浏览器上运行。

::: warning
它不支持第 2 阶段装饰器，因为 TypeScript 编译器只支持旧版本的装饰器。
:::

#### TypeScript

在项目根目录下创建 `tsconfig.json`，然后配置 `experimentalDecorators` 选项，它可以编译装饰器语法：

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "strict": true,
    "experimentalDecorators": true
  }
}
```

#### Babel

安装 `@babel/plugin-proposal-decorators` 和 `@babel/plugin-proposal-class-properties`：

```sh
$ npm install --save-dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
```

在文件根目录下配置 `.babelrc` 文件：

```json
{
  "plugins": [
    ["@babel/proposal-decorators", { "legacy": true }],
    ["@babel/proposal-class-properties", { "loose": true }]
  ]
}
```

注意：需要 `legacy` 和 `loose` 选项。因为 Vue Class Component 仅支持 stage 1 装饰器规范。

## CDN

[unpkg.com](https://unpkg.com/)提供基于 npm 的 CDN 链接。你可以选择对应版本的 Vue Class Component 来代替 `@latest` 版本（例如 `https://unpkg.com/vue-class-component@7.2.2/dist/vue-class-component.js` 就就是使用版本为 7.2.2 的 Vue Class Component）。

```html
<!-- UMD build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.js"></script>

<!-- UMD minified build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.min.js"></script>

<!-- ES Module build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.esm.browser.js"></script>

<!-- ES Module minified build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.esm.browser.min.js"></script>
```

## 不同的构建方式

Vue Class Component 针对不同的环境和用途提供了不同的构建方式。

- For development

  - `vue-class-component.js` (UMD)
  - `vue-class-component.common.js` (CommonJS)
  - `vue-class-component.esm.js` (ES Module for bundlers)
  - `vue-class-component.esm.browser.js` (ES Module for browsers)

- For production (minified)

  - `vue-class-component.min.js` (UMD)
  - `vue-class-component.esm.browser.min.js` (ES Module for browsers)
