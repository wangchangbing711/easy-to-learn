import  Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//轮播
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

//菜单栏
const toolbar = {
    state:{
        menu:[
            {name:'电视剧',nameid:'list0'},
            {name:'电影',nameid:'list1'},
            {name:'综艺',nameid:'list2'},
            {name:'动漫',nameid:'list3'},
            {name:'少儿',nameid:'list4'},
            {name:'纪录片',nameid:'list5'},
        ],
        active:0,
        list0:[
            {name:'神探',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/z/z2ovp6mu52rk0xl_y.jpg'},
            {name:'爱上你治愈我',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/y/ybfjiuufzct0gc6_y.jpg'},
            {name:'小时光',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/z/zvr5ohgsb72rnvd_y.jpg'},
            {name:'夜空中最闪亮的星',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/b/br4nav8daqim2vu_y.jpg'},
            {name:'趁年轻',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/y/ystzjtjsovm7vyq_y.jpg'},
        ],
        list1:[
            {name:'我口袋里的女朋友',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/c/cc8vlzbk7e5ncft_y.jpg'},
            {name:'风中有多雨做的云',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/d/dei6x0w0oikgzn8_y.jpg'},
            {name:'无问西东',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/wagzbx91asjomnu1527151117/220'},
            {name:'飞驰人生',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/8kw2uo89elwb7as1553851718/220'},
            {name:'大人物',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/owyequak2ck3bra1551418479/220'},
        ],
        list2:[
            {name:'拜托了冰箱',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/pmwga0rgqg6e6wq1555396694/220'},
            {name:'我和经纪人',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/iygb5kpi52nju811555062906/220'},
            {name:'女儿的男朋友',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/8s3d8cbmje1gfx11555346440/220'},
            {name:'创造营2019',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/rkg25pii1rzowfa1554987192/220'},
            {name:'趁年轻2',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/y/ystzjtjsovm7vyq_y.jpg'},
        ],
        list3:[
            {name:'斗罗大陆',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/m441e3rjq9kwpsc1531129675/220'},
            {name:'爱上你治愈我3',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/y/ybfjiuufzct0gc6_y.jpg'},
            {name:'小时光3',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/z/zvr5ohgsb72rnvd_y.jpg'},
            {name:'夜空中最闪亮的星3',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/b/br4nav8daqim2vu_y.jpg'},
            {name:'趁年轻3',imgsrc:'https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/y/ystzjtjsovm7vyq_y.jpg'},
        ],
        list4:[
            {name:'巴旦木儿歌',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/c7s2709g79bxcgxt1446627633.jpg/220'},
            {name:'小猪佩奇',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/bzfkv5se8qaqel2t1466571646.jpg/220'},
            {name:'熊出没',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/r5vi4b66gzdan211549072528/220'},
            {name:'小猪佩奇 第一季',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/bzfkv5se8qaqel2t1466571646.jpg/220'},
            {name:'小猪佩奇 第二季',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/bzfkv5se8qaqel2t1466571646.jpg/220'},
        ],
        list5:[
            {name:'火星时代',imgsrc:'  https://puui.qpic.cn/vcover_vt_pic/0/xjookxrskza6s5b1554720263/220'},
            {name:'水深火热的星球',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/qedmcr36hxong5d1553235499/220'},
            {name:'王朝',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/28wj897frl5hj401541898166/220'},
            {name:'野生萌宠',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/akgpvyd9x4duh311547792681/220'},
            {name:'蓝色星球 第二季',imgsrc:'https://puui.qpic.cn/vcover_vt_pic/0/t6udtxyvbhbbxv21534496791/220'},
        ],
    },
    mutations:{
        choose(state,index){
           state.active = index;
        }
    }
}
//游戏
const player={
    state:{
        cards:{
            cardArray:[],
            flippedCards:[],//已经被翻开（但未配对）的牌
            pairedCards:[],//已经翻开（并且已经配对）的牌
        },
    },
    mutations:{
        getrow(state){//随机生成卡片矩阵
            const row =2;
            const col =5;
            const kinds = 5;
            const arr = [];
            const origin = [];
            for( let i =1;i<=kinds;i++){
                origin.push(i);
                origin.push(i);
            }
            for( let i = 0 ; i < row ; i++ ){
                let temp = [];
                let index = Math.floor(Math.random()*origin.length);
                for( let j = 0 ; j < col ; j++ ){
                    while( !origin[index] ){
                        index = Math.floor(Math.random()*origin.length);
                    }
                    temp.push(origin[index]);
                    origin[index] = 0;
                }
                arr.push(temp);
            }
            state.cardArray = arr;//生成随机矩阵，如[1,1,2,2,3,3,4,4,5,5]生成[[1,2,3,4,5],[1,2,3,4,5]]
        },
        flipcard(state){//判断卡片是否需要翻转
            const _this = this;
            let flipped = state.cards.flippedCards;
            let card = event.target.parentNode;
            if( card.getAttribute('data-direction') == 'back' ){
                //防止翻开前连续点击多次
                card.setAttribute('data-direction','front');
                //如果已经翻开未配对的为0张
                if( flipped.length == 0 ){
                    flipped.push(card);
                }
                //如果已经翻开未配对的为1张
                else if( flipped.length == 1 ){
                    let last = flipped[0];
                    //如果之前翻开的和刚翻开的不一致，则都翻回去
                    if( last.getAttribute('data-id') !== card.getAttribute('data-id') ){
                        state.cards.flippedCards = [];
                        setTimeout(()=>{
                            _this.commit('flipToFront',last);
                            _this.commit('flipToFront',card);
                            last.setAttribute('data-direction','back');
                            card.setAttribute('data-direction','back');
                        },1000);
                    }
                    //如果之前的和刚翻开的一致，则保留
                    else if( last.getAttribute('data-id') === card.getAttribute('data-id') ){
                        state.cards.pairedCards.push(last,card);
                       state.cards.flippedCards = [];
                    }
                }
                // console.log(this.cards.flippedCards,this.cards.pairedCards)
            }
        },
        flipToFront(state,el){//将卡牌从正面翻回背面
            let backImg = el.getElementsByClassName('cardback')[0];
            let frontImg = el.getElementsByClassName('cardfront')[0];
            backImg.style.transform = "rotateY(0deg)";
            frontImg.style.transform = "rotateY(180deg)";
        },
        romatecard(state){ //卡片翻转
            let backImg = event.target;
            let frontImg = backImg.parentNode.getElementsByClassName('cardfront')[0];
            //如果是背面则翻到正面
            if( backImg.className.includes('cardback') ){
                backImg.style.transform = "rotateY(180deg)";
                frontImg.style.transform = "rotateY(0deg)";
                this.commit('flipcard');
            }
        }
    }
}
export default new Vuex.Store({
    modules:{
        slide:slidevideo,
        menu:toolbar,
        cardplay:player
    }
})