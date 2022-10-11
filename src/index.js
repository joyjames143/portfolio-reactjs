import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import Home from './components/home/Home.js';
import Loading from './components/loading/Loading';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactLoading from 'react-loading';


const LazyAbout = React.lazy(()=>import('./components/about/About'))
const LazyContact = React.lazy(()=>import('./components/contact/Contact'))
const LazyProject = React.lazy(()=>import('./components/project/Project'))


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/about",
        element: <React.Suspense fallback ={<ReactLoading type={"cubes"} color={"yellow"} height={667} width={375} />} ><LazyAbout/> </React.Suspense>,
    },
    {
        path: "/contact",
        element: <React.Suspense fallback='Loadding..'><LazyContact/> </React.Suspense>,
    },
    {
        path: "/projects",
        element: <React.Suspense fallback='Loadding..'><LazyProject/> </React.Suspense>,
    },
  ]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);
    
