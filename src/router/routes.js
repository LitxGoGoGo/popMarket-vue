//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default  [
  {
    path:'/shopcart',
    component:ShopCart,
    meta: { show: true },
    name:'shopcart'
  },
  {
    path:'/addcartsuccess',
    component:AddCartSuccess,
    meta: { show: true },
    name:'addcartsuccess'
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: { show: true }
  },
  {
    path: '/home',
    component: Home,
    meta: { show: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
  {
    path: '/search/:keyword?',//?表示params可传可不传
    component: Search,
    meta: { show: true },
    name: 'search',
    // props:true //第一种写法
    // props:{a:1,b:2} //第二种写法
    //函数写法,可以params和query参数传递给路由组件
    props: ($route) => {
      return { keywords: $route.params.keywords, k: $route.query.k }
    }
  },
  //重定向,在项目初始时访问首页
  {
    path: '*',
    redirect: 'home'
  }
]