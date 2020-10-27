import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../pages/Index'),
      meta: {
        title: '首页',
      },
    }, {
      path: '/page1',
      name: 'Page1',
      component: () => import('../pages/page1'),
      meta: {
        title: 'page1',
      },
    }, {
      path: '/skeleton1',
      name: 'Skeleton1',
      component: () => import('../pages/1-骨架屏'),
      meta: {
        title: '1-骨架屏',
      },
    }, {
      path: '/pic',
      name: 'Pic',
      component: () => import('../pages/3-图片压缩'),
      meta: {
        title: '3-图片压缩',
      },
    }, {
      path: '/lazy',
      name: 'Lazy',
      component: () => import('../pages/4-懒加载/Load.vue'),
      meta: {
        title: '4-懒加载',
      }
    }, {
      path: '/longList',
      name: 'LongList',
      component: () => import('../pages/2.长列表优化'),
      meta: {
        title: '2.长列表优化',
      }
    }, {
      path: '/webp',
      name: 'webp',
      component: () => import('../pages/4-webp'),
      meta: {
        title: '4-webp',
      }
    },{
      path: '/preloadjs',
      name: 'preloadjs',
      component: () => import('../pages/7-preloadjs的使用'),
      meta: {
        title: '7-preloadjs的使用',
      }
    }
  ],
});


export default router;
