import Card from './card'
import Divider from './divider'
import Floor from './floor'

const components = {
  Card,
  Divider,
  Floor
}

const lego = {
  ...components
}

const install = function (Vue, opts = {}) {
  if (install.installed) return

  Object.keys(lego).forEach(key => {
    Vue.component(key, lego[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  install,
  ...components
}
export default API
// module.exports.default = module.exports = API // eslint-disable-line no-undef
