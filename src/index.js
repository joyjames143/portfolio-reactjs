import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import Home from './components/home/Home.js';
import Loading from './components/loading/Loading.js';
import { createBrowserRouter, RouterProvider} from "react-router-dom";



const LazyAbout = React.lazy(()=>import('./components/about/About.jsx'))
const LazyContact = React.lazy(()=>import('./components/contact/Contact.jsx'))
const LazyProject = React.lazy(()=>import('./components/project/Project.jsx'))
 

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/about",
        element: <React.Suspense fallback ={<Loading/>} ><LazyAbout/> </React.Suspense>,
    },
    {
        path: "/contact",
        element: <React.Suspense fallback={<Loading/>}><LazyContact/> </React.Suspense>,
    },
    {
        path: "/projects",
        element: <React.Suspense fallback={<Loading/>}><LazyProject/> </React.Suspense>,
    },
  ]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);
    
