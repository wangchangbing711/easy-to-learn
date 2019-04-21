<template>
    <div class="player">
        <video  id="myVideo" class="video-js">
            <source src="http://1253540085.vod2.myqcloud.com/30593dc0vodgzp1253540085/01660d385285890781991681912/KNaWSQ1dnckA.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
    export default {
        name: "player",
        data() {
            return {};
        },
        mounted() {
            this.initVideo();
        },
        methods: {
            initVideo() {
                //初始化视频方法
                let myPlayer = this.$video(myVideo, {
                    //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    //自动播放属性,muted:静音播放
                    autoplay: "muted",
                    //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                    preload: "auto",
                    //设置视频播放器的显示宽度（以像素为单位）
                    width: "800px",
                    //设置视频播放器的显示高度（以像素为单位）
                    height: "400px"
                });
            }
        }
    };
</script>

<style scoped>
</style>