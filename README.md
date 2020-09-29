# vue-element-popup

An imperative dialog based on el-dialog component in elemenet-ui

# Install

## NPM

```bash
$ npm install element-ui @cany/vue-element-popup
```

## Yarn

```bash
$ yarn add element-ui @cany/vue-element-popup
```

# Example

## Register

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueElementPopup from '@cany/vue-element-popup'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueElementPopup)
```

## Invoke

```html
<template>
  <div>
    <el-button type="primary" @click="handelPopup">popup</el-button>
  </div>
</template>

<script>
import MyComponent from 'path/to/MyComponent.vue'

export default {
  name: 'App',
  methods: {
    handelPopup() {
      this.$popup({
        title: 'Hello',
        content: MyComponent,
        props: {
          txt: 'vue-element-popup'
        }
      })
    }
  }
}
</script>
```

# Options

Support most options on el-dialog component.

## Special options

- content: to display content in dialog
- props: declared props in the content component
- cache: whether to cache instance of dialog, default is true

## el-dialog options

- title: title of dialog
- width: width of dialog


