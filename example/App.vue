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
        title: 'Tip',
        // width: '400px',
        content: MyComponent,
        props: {
          txt: 'vue-element-popup'
        },
        // fullscreen: true,
        // top: '30px',
        // center: true,
        open() {
          console.log('open')
        },
        opened() {
          console.log('opened')
        },
        beforeClose(done) {
          console.log('beforeClose')
          done()
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
        },
      })
    }
  }
}
</script>
