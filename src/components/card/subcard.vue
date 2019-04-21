<template>
    <div class="card-box" @click="$store.commit('romatecard')" data-direction="back">
        <img class="cardback ahah"  src="../../assets/back1.jpg">
        <img class="cardfront" src="../../assets/4.png" v-if="frontcard == 1">
        <img class="cardfront" src="../../assets/5.png" v-if="frontcard == 2">
        <img class="cardfront" src="../../assets/6.png" v-if="frontcard == 3">
        <img class="cardfront" src="../../assets/7.png" v-if="frontcard == 4">
        <img class="cardfront" src="../../assets/8.png" v-if="frontcard == 5">
    </div>
</template>

<script>
    export default {
        props:['frontcard'],
        name: "subcard",
        methods:{

        }

    }
</script>

<style scoped>
 .card-box{
     width: 180px;
     height: 330px;
     display: inline-block;
 }
 .cardback{
     width: 180px;
     height: 300px;
 }
 .cardfront{
     width: 200px;
     height: 320px;
 }
 .cardfront {
     transform: rotateY(180deg);
 }
 .cardback {
     cursor: pointer;
     transform: rotateY(0deg);
 }
 .cardback, .cardfront{
     position: absolute;
     backface-visibility: hidden;
     -webkit-backface-visibility: hidden;
     transition: transform 1s;
 }
</style>