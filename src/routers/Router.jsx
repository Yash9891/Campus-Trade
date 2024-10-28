import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../home/Home";
import { Shop } from "../shop/Shop";
import { About } from "../components/About";
import { Blog } from "../components/Blog";
import { SinlgeItem } from "../shop/SinlgeItem";
import { DashboardLayout } from "../dashboard/DashboardLayout";
import { Dashboard } from "../dashboard/Dashboard";
import { UploadItem } from "../dashboard/UploadItem";
import { ManageItems } from "../dashboard/ManageItems";
import { EditItems } from "../dashboard/EditItems";
import { SignUp } from "../components/SignUp";
import { Login } from "../components/Login";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import { Logout } from "../components/Logout";

const router =createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
            path:'/about',
            element:<About/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/item/:id",
                element:<SinlgeItem/>,
                loader:({params})=>fetch(`https://campus-backend3.vercel.app/item/${params.id}`)
            }
        ]
    },
    {
        path:'/admin/dashboard',
        element:<DashboardLayout/>,
        children:[
            {
                path:'/admin/dashboard',
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:'/admin/dashboard/upload',
                element:<UploadItem/>
            },
            {
                path:'/admin/dashboard/manage',
                element:<ManageItems/>
            },
            {
                path:'/admin/dashboard/edit-items/:id',
                element:<EditItems/>,
                loader:({params})=>fetch(`https://campus-backend3.vercel.app/item/${params.id}`)

            }
        ]
    }
    ,{
        path:"sign-up",
        element:<SignUp/>
    },{
        path:"login",
        element:<Login/>
    },
    {
       path:"/logout",
       element:<Logout/> 
    }
])

export default router;