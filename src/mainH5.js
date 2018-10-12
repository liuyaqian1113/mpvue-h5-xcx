import Vue from 'vue'
import App from './AppH5'
import router from './router'
import 'lib-flexible/flexible'

// 去掉生产环境的提示
Vue.config.productionTip = false
App.mpType = 'app'

Vue.mixin({
  	data () {
	    return {
	      service: '', // 服务
	      router: '/', // 路由路径
	      imgSrc: '' // 图片路径
	    }
  	},
  	methods: {
		newroot () {
		  return  this.$route
		},
		navigatePageTo (url) {
		  this.$router.push(url)
		},
		reLaunchPageTo (url) {
		  this.$router.replace(url)
		},
		setStorageSync (name, data) {
		  sessionStorage.setItem(name, JSON.stringify(data))
		},
		getStorageSync (name) {
		  return JSON.parse(sessionStorage.getItem(name))
		}
  	}
})

/* eslint-disable no-new */

new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
