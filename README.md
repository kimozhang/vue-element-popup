# vue-element-popup

An imperative dialog based on [el-dialog](https://element.eleme.cn/#/en-US/component/dialog) component in [elemenet-ui](https://github.com/ElemeFE/element)

# Install

## NPM

```bash
$ npm install element-ui vue-element-popup
```

## Yarn

```bash
$ yarn add element-ui vue-element-popup
```

# Example

## Register

```js
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueElementPopup from 'vue-element-popup'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueElementPopup, { center: true })
```

## Invoke

`App.vue`:

```html
<template>
  <div id="app">
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
        },
        // callback when the dialog closing animation ends
        closed(ok) {  // The ok flag indicate that what you clicked is the Ok button
          if (ok) {
            // to do something, such as fetching data agains
          }
        }
      })
    }
  }
}
</script>
```

`MyComponent.vue`:

```html
<template>
  <div class="my-component">
    <p>{{ txt }}</p>
    <br>

    <div class="btn">
      <el-button type="primary" @click="handelOk">Ok</el-button>
      <el-button type="primary" @click="handleCancel">Cancel</el-button>
    </div>
  </div>
<template>

<script>
export default {
  name: 'MyComponent',
  props: {
    txt: String
  },
  methods: {
    handleOk() {
      // close dialog and tell user that what you clicked is the Ok button
      this.$emit('close', true)
    },
    handleCancel() {
      //only intend to close dialog
      this.$emit('close')
    }
  }
}
</script>
```

# Options

Support most options on [el-dialog](https://element.eleme.cn/#/en-US/component/dialog) component and use camelCase style.

## Special options

- content: required, to display content in dialog
- props: declared props in the content
- cache: whether to cache instance of dialog, default is true

## Other options

- title: title of dialog
- width: width of dialog, default is '50%'
- fullscreen: whether the dialog take up full screen, default is false
- top: value for margin-top of dialog CSS, default is '15vh'
- modal: whether a mask is displayed, default is true
- lockScroll: whether scroll of body is disabled while dialog is displayed, default is true
- customClass: custom class names for dialog
- closeOnClickModal: whether the dialog can be closed by clicking the mask, default is true
- closeOnPressEscape: whether the dialog can be closed by pressing ESC, default is true
- showClose: whether to show a close button, default is true
- beforeClose: callback before dialog closes, and it will prevent dialog from closing, which take a `done` params to close the dialog
- center: whether to align the header in center, default is false
- open: triggers when the dialog opens
- opened: triggers when the dialog opening animation ends
- close: triggers when the dialog closed
- closed: triggers when the dialog closing animation ends

# Events

- close: close dialog, which takes user custom params, default is null
