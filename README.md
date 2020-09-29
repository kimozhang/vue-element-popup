# An imperative dialog based on el-dialog component in elemenet-ui

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
import 'element-ui/lib/theme-chalk/index.css';

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
import MyDialog from 'path/to/MyDialog.vue'

export default {
  name: 'App',
  methods: {
    handelPopup() {
      this.$popup({
        title: 'Hello',
        content: MyDialog,
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

- title: the title of dialog
- content: to display content in dialog
- props: declared props in the content component
- cache: whether to cache instance of dialog, default is true


