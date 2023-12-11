import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import HomePage from "../../features/Home/HomePage";
import ContactPage from "../../features/contact/ContactPage";
import AboutPage from "../../features/about/AboutPage";
import ProductDetails from "../../features/Catalog/ProductDetails";
import Catalog from "../../features/Catalog/Catalog";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
import CheckoutPage from "../../features/checkout/CheckoutPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "" , element: <HomePage />},
            {path: "catalog" , element: <Catalog />},
            {path: "catalog/:id" , element: <ProductDetails />},
            {path: "about" , element: <AboutPage />},
            {path: "contact" , element: <ContactPage />},
            {path: "server-error" , element: <ServerError />},
            {path: "not-found" , element: <NotFound />},
            {path: "basket" , element: <BasketPage />},
            {path: "checkout" , element: <CheckoutPage />},
            {path: "*" , element: <Navigate replace to={"/not-found"} />},
        ]
    }
]);