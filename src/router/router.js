import Vue from 'vue'
import router from 'vue-router'
import listone from '../components/videolist/list1'

Vue.use(router)

const routes=[
    {
        path: '/', // 默认页面重定向到主页
        redirect: {name: 'video', params: {name:'电视剧', nameid:'list0'}}
    },
    {
          path:'/video/:name/:nameid',
          name:'video',
          component:listone
    }
]

export default routes