import { createBrowserRouter } from "react-router"
import Header from "../components/Header"
import ProductDetail from "../pages/ProductDetail"
export const Routers = createBrowserRouter([
    {
        path: '/',
        element: <ProductDetail />
    }
])