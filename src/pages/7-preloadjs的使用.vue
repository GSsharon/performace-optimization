<!--
 * @Author: your name
 * @Date: 2020-10-15 14:52:19
 * @LastEditTime: 2020-10-26 11:24:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \performace-optimization\src\pages\7-preload的使用.vue
-->
<template>
    <p v-if="!imgLoaded">
        {{progress*100+"%"}}
    </p>
    <div class="preload" v-else>
        <div class="full full1"></div>
        <div class="full full2"></div>
        <button @click="next">下一页</button>
    </div>
</template>
<script>
import createjs from 'preload-js';
export default {
    data() {
        return {
            imgLoaded: false,
            progress: 0,
            page: 0
        }
    },
    created() {
        let _this = this;
        let imgsrc=[
            {id:'p1',src:require('../assets/images/full1.jpg')},
            {id:'p2',src:require('../assets/images/full2.jpg')}
        ];
        // 图片资源加载
        let load=new createjs.LoadQueue(false);
        load.loadManifest(imgsrc);
        load.on('progress',function(e) {
            _this.progress = e.progress;
        });
        load.on('complete',function() {
            console.log('图片加载完毕');
            _this.imgLoaded = true;
        });
    },
    methods: {
        next() {
            let fullEles = document.querySelectorAll('.full');
            fullEles[this.page].classList.add('forward');
            fullEles[++this.page].classList.add('aword');
        }
    }
}
</script>
<style lang="scss" scoped>
@keyframes forward {
    0% {
        opacity: 1;
        transform: translate(0,0);
    }
    99% {
        transform: translate(0,-100vh);
        opacity: 0;
    }
    100% {
        transform: translate(0,100vh);
        opacity: 0;
        z-index: 0;
    }
}
@keyframes aword {
    0% {
        transform: translate(0,100vh);
        opacity: 0;
        z-index: 1;
    }
    100% {
        transform: translate(0,0);
        opacity: 1;
    }
}
.preload {
    position: relative;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    button {
        position: absolute;
        top: 10px;
        right: 30px;
        z-index: 1;
    }
    .full {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        transform: translate(0,100%);
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        &.forward {
            animation: forward .5s forwards;
        }
        &.aword {
            animation: aword .5s forwards;
        }
        &:first-child {
            transform: translate(0,0);
            opacity: 1;
        }
        &.full1 {
            background-image: url(../assets/images/full1.jpg);
        }
        &.full2 {
            background-image: url(../assets/images/full2.jpg);
        }
    }
}
</style>