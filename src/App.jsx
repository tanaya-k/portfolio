import './App.css'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './components/home/home';
import ErrorPage from './components/error_page/error_page';
import AboutMe from './components/about_me/about_me';
// import { Navbar } from './components/navbar/navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about-me",
    element: <AboutMe/>,
    errorElement: <ErrorPage/>
  },
]);


function App() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
  );
}

export default App
