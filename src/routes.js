import Login from './page/Login'
import Edit from './page/Home/Edit'
import Home from './page/Home'
import NoFoundPage from './page/404'
import List from './page/Home/List'

export const mainRoutes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/404',
        component:NoFoundPage
    }
]

export const adminRoutes = [
    {
        path:'/home',
        exact:true,
        menuInHide : true,
        name : '首页',
        component:Home,
        Icon:'shop',
    },
    {
        path:'/home/edit',
        component:Edit,
        menuInHide : false,
        name : '编辑',
        Icon:'shop'
    },
    {
        path:'/home/list',
        component:List,
        menuInHide : true,
        name : '列表',
        Icon:'shop'
    }
]