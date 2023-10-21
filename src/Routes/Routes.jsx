import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import SingUp from "../Components/Pages/SingUp";
import AddProduct from "../Components/Pages/AddProduct";
import MyCart from "../Components/Pages/MyCart";
import About from "../Components/Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/add-product",
            element:<AddProduct></AddProduct>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/sing-up",
            element:<SingUp></SingUp>
        },
        {
            path:"/my-cart",
            element:<MyCart></MyCart>
        },
    ]
  },
]);


export default router;