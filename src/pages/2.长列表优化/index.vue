<template>
    <virtual-list
        style="height: 360px; overflow-y: auto;"
        :data-key="'id'"
        :data-sources="list"
        :data-component="itemComponent"
    />
    <!-- <ul>
        <li v-for="item in list" :key="item.id">{{item.content}}</li>
    </ul> -->
</template>
<script>
import virtualList from "vue-virtual-scroll-list";
import Item from "./Item.vue"
export default {
    components: {
        virtualList
    },
    data() {
        return {
            itemComponent: Item,
            list: []
        }
    },
    created() {
        for(let i=0; i<10000; i++) {
            this.list.push({id:i,content:i});
        }
    }
}
</script>