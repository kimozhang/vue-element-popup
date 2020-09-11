import PopupDefinition from './Popup'

const cache = {}
const keys = []
let pid = 1
// able to cache max count, default is 5
let max = 0
let PopupCtor

/**
 * Command Popup Dialog
 * @param {Object} options
 * @param {string} [options.title] title
 * @param {string} [options.width = 50%] width，default is 50%
 * @param {VueComponent} options.content content which is a Vue Component Definition
 * @param {Object} options.props props of content
 * @param {function} [options.closed] callback when the dialog be completely closed
 * @param {boolean} [options.cache] whether to cache instance called every time
 * @returns {VueComponent | null} returns null when cache is false, otherwise returns an instance of Vue Component
 */
function popup(options) {
  const { content, props, cache: _cache, ...ElDialogData } = options
  const componentDefinition = content
  const isCache = isBoolean(_cache) ? _cache : true
  const key = isCache
    ? componentDefinition._pid || (componentDefinition._pid = pid++)
    : null
  const toUpdateData = {
    ...ElDialogData,
    popupContentProps: options.props
  }
  let vm

  // The same component shares one instance
  if (isCache && cache[key]) {
    vm = cache[key]
    remove(keys, key)
    keys.push(key)
    update(vm, toUpdateData)
    return vm
  }

  // create with static options which will not be changed
  vm = new PopupCtor({
    components: {
      PopupContent: options.content
    },
    propsData: {
      cache: isCache
    }
  })
  // mount
  mount(vm)
  // update data
  update(vm, toUpdateData)

  if (isCache) {
    // cache
    cache[key] = vm
    keys.push(key)

    // Remove when the number of cache is more than max
    if (max && keys.length > max) {
      removeCache(cache, keys[0], keys)
    }
  } else {
    vm = null
  }

  return vm
}

// update and show
function update(vm, data) {
  vm.update(data)
  vm.show()
}

// mount and append
function mount(vm) {
  document.body.append(vm.$mount().$el)
}

function removeCache(cache, key, keys) {
  destory(cache[key])
  cache[key] = null
  remove(keys, key)
}

function remove(keys, key) {
  const index = keys.indexOf(key)
  if (index > -1) {
    return keys.splice(index, 1)
  }
}

function destory(vm) {
  vm.$destory()
  vm.$el.parentNode.removeChild(vm.$el)
}

function isBoolean(v) {
  return typeof v === 'boolean'
}

export default {
  install(Vue, options) {
    PopupCtor = Vue.extend(PopupDefinition)
    max = (options && options.max) || 5

    Vue.prototype.$popup = popup
  }
}
