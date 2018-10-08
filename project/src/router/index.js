import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//引入组件
import home from '@/components/home/home'
import vip from '@/components/vip/vip'
import shopping from '@/components/shopping/shopping'
import my from '@/components/my/my'
import newsList from '@/components/news/newsList'
import newsDetail from '@/components/news/newsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   //  path: '/',  代表着这是主页的路由
    //   path: '/',
    //   name: 'HelloWorld',
    //   //组件就是HelloWorld
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: newsList
    },
    {
      path: '/news/detail',
      name: 'news.detail',
      component: newsDetail
    }
  ]
})
