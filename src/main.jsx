import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './components/error_page/error_page';
import AboutMe from './components/about_me/about_me';
import Project_Page from './components/project_page/project_page.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/about-me",
    element: <AboutMe/>,
    errorElement: <ErrorPage/>
  },
  {
    // Change the link to have the project name in the link
    path: "/project",
    element: <Project_Page/>,
    errorElement: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
