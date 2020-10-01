<template>
  <div id="app">
    <el-button type="primary" @click="handlePopup">popup</el-button>
  </div>
</template>

<script>
import MyComponent from './MyComponent'

export default {
  name: 'App',
  methods: {
    handlePopup() {
      this.$popup({
        title: 'Tips',
        // width: '400px',
        // top: '30px',
        // center: true,
        // fullscreen: true,
        content: MyComponent,
        props: {
          txt: 'vue-element-popup'
        },
        open() {
          console.log('open')
        },
        opened() {
          console.log('opened')
        },
        close() {
          console.log('close')
        },
        closed(ok) {
          if (ok) {
            console.log('You clicked the Ok button')
          } else {
            console.log('You clicked the Cancel button or only intend to close dialog')
          }
          console.log('closed')
        }
      })
    }
  }
}
</script>
