const HomeRouter = [
  {
    path: '/home',
    name: 'home',
    component: () => import('views/Home/Home.vue'),
    meta: {
      title: '首页',
      keepAlive: true,
    },
  },
]

export default HomeRouter
