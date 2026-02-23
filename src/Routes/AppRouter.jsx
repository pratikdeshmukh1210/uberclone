import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from '../components/Register'
import Login from '../components/Login'
import Authlayout from '../layout/Authlayout'
import Homelayout from '../layout/Homelayout'

const AppRouter = () => {
  
let router = createBrowserRouter([
   {
   path: "/",
   element: <Authlayout />,
   children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Register /> }
   ]
}
,{
   path:"/home" ,
   element:<Homelayout/> ,
   
}
])
return <RouterProvider router={router} />
}

export default AppRouter ;