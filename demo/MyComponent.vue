<template>
  <div class="my-component">
    <div>{{ txt }}</div>
    <br>
    <el-button type="primary" @click="handleOk">Ok</el-button>
    <el-button type="primary" @click="handleCancel">Cancel</el-button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {
    txt: String
  },
  methods: {
    handleOk() {
      this.$emit('close', true)
    },
    handleCancel() {
      this.$emit('close')
    }
  }
}
</script>
