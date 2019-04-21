<template>
    <div id="slidephoto">
        <div id="slidevideo" @mouseover="$store.dispatch('stop')" @mouseout="$store.dispatch('play')" v-for="(pic,index) in $store.state.slide.firstslide" v-show=" index == $store.state.slide.mark" :key="index">
            <img :src="pic.img">
        </div>
    </div>
</template>

<script>
    export default {
        name: "slidevideo",
        data(){
            return{

            }
        },
        mounted(){
            this.$store.dispatch('play');
        },
    }
</script>

<style scoped>
 #slidephoto{
    height: 500px;
     position: absolute;
 }
 #slidevideo{
     height: 500px;
 }
 #slidevideo img{
     width: 100%;
     height: 100%;
 }
</style>