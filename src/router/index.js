import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

// 路由白名单
const whiteList = ['/signIn', '/signUp']

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      redirect: '/layout/helloworld',
      name: 'Layout',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: 'helloworld',
          name: 'helloworld',
          component: () => import('@/components/HelloWorld')
        }
      ]
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: () => import('@/views/user/SignIn')
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('@/views/user/SignUp')
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (store.getters.isSignIn) {
    if (to.path === '/signIn' || to.path === '/signUp') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      // 白名单 => 放过
      next()
    } else {
      next('/signIn')
    }
  }
})

export default router
