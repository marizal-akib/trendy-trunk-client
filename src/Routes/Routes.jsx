import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Elements/Login";
import SingUp from "../Components/Elements/SingUp";
import AddProduct from "../Components/Pages/AddProduct";
import MyCart from "../Components/Pages/MyCart";
import About from "../Components/Pages/About";
import BrandProduct from "../Components/Pages/BrandShop/BrandProduct";
import PageError from "../Components/Pages/PageError";
import Update from "../Components/Elements/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<PageError></PageError>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=> fetch('/brand.json')
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
            path:"/sign-up",
            element:<SingUp></SingUp>
        },
        {
            path:"/my-cart",
            element:<MyCart></MyCart>
        },
        {
            path:"/update",
            element:<Update></Update>
        },
        {
            path:"/product/:id",
            element:<BrandProduct></BrandProduct>,
            loader: ({params}) => fetch('/brand.json')
        },
    ]
  },
]);


export default router;