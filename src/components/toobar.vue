<template>
    <div id="toolmenu">
        <div class="toolbar">
            <router-link  tag="span" v-for="(menu,index) in $store.state.menu.menu"  @click.native="$store.commit('choose',index)" :class="{active: $store.state.menu.active == index}"  :to="{ name: 'video', params: { name: menu.name,nameid:menu.nameid }}"  >
                  {{menu.name}}
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "toobar"
    }
</script>

<style scoped>
    #toolmenu{
       height: 480px;
    }
   .toolbar{
       text-align: center;
       margin-top: 20px;
       margin-bottom: 20px;
   }
    .toolbar span{
        cursor: pointer;
        font-size: 18px;
        margin-left: 20px;
    }
    .toolbar span:hover{
        color:#ff5c38;
    }
    .active{
        color:#ff5c38;
        font-size: 26px;
        font-weight: bold;
    }
</style>