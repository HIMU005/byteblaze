import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";
import Bookmarks from "../pages/Bookmarks";
import Content from "../Components/Content";
import Author from "../Components/Author";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/blogs",
          loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
          element: <Blogs></Blogs>,
        }, 
        {
          path: "/blog/:id",
          loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          element: <Blog></Blog>,
          children:[
            {
              index: true,
              element: <Content></Content>,
              loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
              path:'author',
              element: <Author></Author>,
              loader:({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
          ],
        },
        {
          path: "/bookmarks", 
          element:<Bookmarks></Bookmarks>,
        }
      ]
    }, 
  
  ]);