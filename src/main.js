import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import Vuerouter from 'vue-router'
import routes from './router/router'
import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video

Vue.config.productionTip = false

const router= new Vuerouter({
    mode:'history',
    routes
})

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
