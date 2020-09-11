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
        title: 'nihao',
        content: MyComponent,
        closed() {
          console.log('closed')
        }
      })
    }
  }
}
</script>
