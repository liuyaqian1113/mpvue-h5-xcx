import Vue from 'vue'
import App from './App'

// 去掉生产环境的提示
Vue.config.productionTip = false
App.mpType = 'app'

Vue.mixin({
  data() {
    return {
      service: '',
      router: '/',
      imgSrc: '/'
    }
  },
  methods: {
      newroot () {
          return this.$root.$mp
      },
      navigatePageTo (url) {
          wx.navigateTo({url: url})
      },
      reLaunchPageTo (url) {
          wx.reLaunch({url: url})
      },
      setStorageSync (name, data) {
          wx.setStorageSync(name, data)
      },
      getStorageSync (name) {
          return wx.getStorageSync(name)
      }
  },
  created() {
      // console.log(wx)
      // this.service = wxService
  }
})

const app = new Vue(App)
app.$mount()