import { createRouter, createWebHashHistory } from 'vue-router'
import HomeRouter from './module/Home'

/**
 * 路由添加：在module文件夹中新建自己所负责的相关页面路由
 * 之后在添加到routes中(注意路由名 别重复)
 **/
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: 'index',
      keepAlive: false,
    },
    component: () => import('views/index.vue'),
  },
  // 示列home相关路由导入
  ...HomeRouter,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`

  next()
  // if (to.matched.length == 0) {
  //   next('/404')
  // } else {
  //   next()
  // }
})

export default router
