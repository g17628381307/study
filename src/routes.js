import Login from './page/Login'
import Edit from './page/Home/Edit'
import Home from './page/Home/List'
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
        component:Home
    },
    {
        path:'/home/edit',
        component:Edit
    },
    {
        path:'/home/list',
        component:List
    }
]