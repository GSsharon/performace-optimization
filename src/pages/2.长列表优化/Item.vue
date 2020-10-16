<template>
    <p><i>{{source.content}}</i></p>
</template>
<script>
export default {
    name: "item",
    props: {
        index: {
            type: Number,
        },
        source: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    created() {
    }
}
</script>