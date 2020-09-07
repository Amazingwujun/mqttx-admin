import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 简单配置
NProgress.configure({ showSpinner: false }) // NProgress Configuration

Vue.use(Router)

// 路由白名单
const whiteList = ['/signIn', '/signUp']

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: '',
          name: 'helloworld',
          component: () => import('@/components/HelloWorld')
        }
      ]
    },
    {
      path: '/404',
      component: () => import('@/views/404'),
      hidden: true
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
    },

    {
      path: '/user',
      name: 'User',
      redirect: '/user/list',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: 'list',
          name: 'UserList',
          component: () => import('@/views/usermanages/UserList')
        }
      ]
    },

    {
      path: '/topic',
      name: 'Topic',
      redirect: '/topic/list',
      component: () => import('@/components/Layout'),
      children: [
        {
          path: 'list',
          name: 'TopicList',
          component: () => import('@/views/topic/Table')
        }
      ]
    },

    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/404', hidden: true }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (store.getters.isSignIn) {
    if (to.path === '/signIn' || to.path === '/signUp') {
      next('/')
      NProgress.done()
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      // 白名单 => 放过
      next()
    } else {
      next('/signIn')
      NProgress.done()
    }
  }
})

router.afterEach(() => { NProgress.done() })

export default router
