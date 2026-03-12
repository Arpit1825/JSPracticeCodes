import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom"
import App from "./App"
import { RouterProvider,RouterContextProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import User from '../User/User'
import Github, { githubInfoLoader } from '../Github/Github'
// const router=createBrowserRouter([{
//   path:'/',
//   element:<Layout />,
//   children:[{
//     index:true,element:<Home />
//   },{
//     path:"about",element:<About />
//   },{
//     path:"contact",element:<Contact />
//   }

//   ]
// }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route loader={githubInfoLoader}
      path='github' element={<Github />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router}/>
)