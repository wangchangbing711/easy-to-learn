<template>
    <div id="videolist">
        <div class="title">{{titlename}}</div>
        <div class="videoplay">
             <div v-for="(list,index) in changelists" :key="index">
                 <img :src="list.imgsrc">
                 <span>{{list.name}}</span>
             </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list1",
        data(){
            return{
            }
        },
        computed:{
            changelists(){
                var x = this.$route.params.nameid;
                var y = this.$store.state.menu;
                return y[x];
            },
            titlename(){
                return this.$route.params.name
           }
        },
    }
</script>

<style scoped>
     #videolist{
       height: 500px;
       padding: 20px;
     }
    .title{
        color:#ff5c38;
        font-size: 30px;
        margin-bottom: 20px;
    }
    .videoplay{
        display: flex;
        justify-content:space-around;

    }
    .videoplay div{
        color: black;
        font-weight: bold;
         width: 220px;
         height: 500px;
        text-align: center;
    }
</style>