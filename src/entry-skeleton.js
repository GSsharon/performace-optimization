import Vue from "vue"
import Skeleton from "./pages/1.1-骨架屏.vue"
import Skeleton1 from "./pages/1.1.1-骨架屏.vue"

export default new Vue({
    components: {
        Skeleton,
        Skeleton1
    },
    template: `
        <div>
            <Skeleton id="skeleton" style="display:none;" />
            <Skeleton1 id="skeleton1" style="display:none;" />
        </div>
    `
})