import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayOut from "../layOut/HomeLayOut";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layOut/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "./PrivateRoutes";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOut />,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: 'category/:id',
                element: <CategoryNews />,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news/:id',
        element: <PrivateRoutes>
            <NewsDetails />
        </PrivateRoutes>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            },
        ]
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
]);

export default routes;