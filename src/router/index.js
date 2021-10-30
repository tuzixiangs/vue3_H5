import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index',
    name: 'index',
    meta: {
      title: 'index',
      keepAlive: false
    },
    component: () => import('views/index.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('views/Home/Home.vue'),
    meta: {
      title: '首页',
      keepAlive: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

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
