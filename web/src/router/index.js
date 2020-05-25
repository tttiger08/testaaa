import Vue from 'vue'
import VueRouter from 'vue-router'
import Item from '../views/Item.vue'
import Login from '../views/Login.vue'
import NewItem from '../views/NewItem.vue'
import Main from '../views/Main.vue'
import Data from '../views/Data.vue'
import Home from '../views/Home.vue'
import Deadline from '../views/Deadline.vue'
import Notice from '../views/Notice.vue'
import Noticedetails from '../views/Noticedetails.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      // 将来看是否需要前端路由校验。
      meta:{
        isPublic:true,
        title:'登录'
      }
    },
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index,
    //   meta:{
    //     title:'艾乐教育'
    //   }
    // },
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta:{
        title:'艾乐教育'
      },
      redirect: '/item',
      children:[
        {path:'/item',name:'item',component:Item,meta:{title:'艾乐教育'}},
        {path:'/data',name:'data',component:Data,meta:{title:'资料库'}},
        {path:'/home',name:'home',component:Home,meta:{title:'我的'}}
      ]
    },

    {
      path: '/home/deadline',
      name: 'deadline',
      component: Deadline,
      meta:{
        title:'园所期限'
      }
    },
    {
      path: '/home/notice/',
      name: 'details',
      component: Notice,
      meta:{
        title:'消息公告'
      }
    },

    
    {
      path: '/home/notice/details',
      name: 'notice',
      component: Noticedetails,
      meta:{
        title:'消息公告'
      }
    },





    {
      path: '/newitem',
      name: 'newitem',
      component: NewItem,
      meta:{
        title:'新事项'
      }
    },
    
]

const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router
