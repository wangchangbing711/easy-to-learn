import  Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const slidevideo = {
    state:{
        mark:0,
        timmer:null,
        firstslide:[
            {img:'https://puui.qpic.cn/vupload/0/20190408_1554705576146_zkqq8d4c25.jpeg/0',title:'封神演义'},
            {img:'https://puui.qpic.cn/media_img/lena/PICmfvtwf_580_1680/0',title:'爱上你治愈我'},
            {img:'https://puui.qpic.cn/media_img/lena/PICkljzdm_580_1680/0',title:'神探独播'},
            {img:'https://puui.qpic.cn/tv/0/75015400_1680580/0',title:'权利的游戏'}
        ]
    },
    mutations:{
        autoplay(state){
            state.mark++;
            if(state.mark==4){
                state.mark=0
            }
        },
        onthis(state,index){
            state.mark=index
        }//鼠标移入title，显示相应的图片
    },
    actions:{
        play(context){
            this.timmer=setInterval(function () {
                context.commit('autoplay')
           },5000)
        },
        stop(context,index){
            clearInterval(this.timmer);
            if(index==null){
            }else{
                context.commit('onthis',index);
            }
        }//暂停轮播
    }
}

export default new Vuex.Store({
    modules:{
        slide:slidevideo
    }
})