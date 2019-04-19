<template>
    <div class="big">
      <div class="slidetitle">
        <p @mouseover="$store.dispatch('stop',index)" @mouseout="$store.dispatch('play')" v-for="(pic,index) in $store.state.slide.firstslide"  :class="{active: $store.state.slide.mark==index }">
            {{pic.title}}
        </p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "slidespan",
        data(){
            return{
            }
        },
    }
</script>

<style scoped>
    .big{
        position: absolute;
        width: 23%;
        height: 500px;
        right: 0px;
        background-color: rgba(17,18,38,.5);
        text-align: center;
        display: table;
        color: white;
        font-size: 20px;
    }
    .slidetitle{
           display: table-cell;
           vertical-align: middle;
           cursor: pointer;
    }
    .active{
        color: #ff5c38;
        font-weight: bold;
        font-size: 30px;
    }
</style>