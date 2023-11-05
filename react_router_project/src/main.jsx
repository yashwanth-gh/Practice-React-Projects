import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/ContactUs/Contact.jsx';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import About from './components/About/About.jsx';
import User from './components/User/User.jsx';
import Github, { githubUserData } from './components/Github/Github.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='github' element={<Github/>} loader={githubUserData}/>
    </Route>
  )
)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element : <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }
//     ]
//   }
// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
