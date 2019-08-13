import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md'
  },
  theme: {
    themes: {
      light: {
        primary: '#4F286C',
        warning: '#F68820'
      }
    },
    dark: false
  }
})
