import './App.css'
import Home from './components/home/home';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
// import { Navbar } from './components/navbar/navbar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/ >
  },
]);



function App() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
  );
}

export default App
