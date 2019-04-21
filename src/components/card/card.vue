<template>
    <div class="playcard">
        <div class="title">游戏</div>
        <div class="card-row" v-for="item in cardarr">
            <subcard v-for="item2 in item"  :frontcard="item2" :data-id="item2"></subcard>
        </div>
    </div>
</template>

<script>
    import subcard from './subcard'
    export default {
        name: "card",
        components:{
          'subcard':subcard
        },
        data(){
            return{
                cardarr:[]
            }
        },
        mounted(){
            this.$store.commit('getrow');
            this.cardarr=this.$store.state.cardplay.cardArray;
        },
    }
</script>

<style scoped>
    .title{
        color:#ff5c38;
        font-size: 30px;
        margin-bottom: 20px;
    }
    .card-row{
        display: flex;
        justify-content: space-between;
    }
    .playcard{
        padding: 40px;
    }
</style>