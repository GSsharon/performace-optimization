<!--
 * @Author:sharon
 * @Date: 2020-10-12 09:56:33
 * @LastEditTime: 2020-10-12 10:54:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \性能\performace-optimization\src\pages\1-骨架屏.vue
-->
<template>
    <div id="skeleton1">
        <img v-if="loading" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==">
        <ul v-if="!loading">
            <li v-for="item in list" :key="item.id">
                <img :src="item.imgurl">
                <p>{{item.msg}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    component: 'Skeleton1',
    data() {
        return {
            loading: true,
            list: []
        }
    },
    created() {
        setTimeout(() => {
            this.list = [
                {
                    id: '1',
                    imgurl: 'https://img3.doubanio.com/view/group_topic/l/public/p71885622.webp',
                    msg: '内容1'
                },{
                    id: '2',
                    imgurl: 'https://img3.doubanio.com/view/group_topic/l/public/p71885621.webp',
                    msg: '内容2'
                }
            ];
            this.loading = false;
        },2000);
    }
}
</script>
<style lang="scss" scoped>
#skeleton1 {
    ul {
        padding: 0;
        margin-top: 100px;
        li {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
        padding-left: 20px;
            img {
                width: 100px;
                margin-right: 20px;
            }
        margin-top: 30px;
        }
    }
    
}
</style>