<template>
    <div id="box">
        <lazy-load v-for="(item,index) in imgs" :key="index" :url="item.url"></lazy-load>
    </div>
</template>
<script>
//vantUI中也有懒加载，具体参考：https://vant-contrib.gitee.io/vant/#/zh-CN/lazyload
import LazyLoad from "./LazyLoad"
import {lazyLoding} from '../../utils/tools'
export default {
    components: {
        LazyLoad
    },
    data() {
        return {
            imgs: [
                {
                    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2989061304,1819233901&fm=26&gp=0.jpg',
                },{
                    url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1893482241,2395055288&fm=26&gp=0.jpg',
                },{
                    url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1284226674,1712648&fm=26&gp=0.jpg',
                }
            ]
        }
    },
    mounted() {
        lazyLoding();
    }
}
</script>
<style lang="scss" scoped>
    img {
        width: 100vw;
        display: block;
    }
</style>