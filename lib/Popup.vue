<template>
  <el-dialog
    :visible.sync="visible"
    :title="data.title"
    :width="data.width"
    :fullscreen="data.fullscreen"
    :top="data.top"
    :modal="data.modal"
    :lock-scroll="data.lockScroll"
    :custom-class="data.customClass"
    :close-on-click-modal="data.closeOnClickModal || false"
    :close-on-press-escape="data.closeOnPressEscape"
    :show-close="data.showClose"
    :before-close="data.beforeClose"
    :center="data.center || true"
    @open="onOpen"
    @opened="onOpened"
    @close="onClose"
    @closed="onClosed"
  >
    <!-- PopupContent Component have already been registered during Vue.extend -->
    <popup-content
      v-bind="data.popupContentProps"
      @close="hide"
      @success="onSuccess"
      @fail="onFail"
    />
  </el-dialog>
</template>

<script>
export default {
  name: 'Popup',

  props: {
    cache: Boolean
  },
  data() {
    return {
      visible: false,
      data: {}
    }
  },
  created() {
    this.noop = () => {}
  },
  methods: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    update(data) {
      this.data = data
    },
    onSuccess() {
      this.hide()
      this.data.onSuccess && this.data.onSuccess()
    },
    onFail() {
      this.data.onFail && this.data.onFail()
    },
    onOpen() {
      this.data.open && this.data.open()
    },
    onOpened() {
      this.data.opened && this.data.opened()
    },
    onClose() {
      this.data.close && this.data.close()
    },
    onClosed() {
      this.data.closed && this.data.closed()
      if (!this.cache) {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  }
}
</script>

<style lang="scss"></style>
