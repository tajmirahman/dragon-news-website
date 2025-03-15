import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayOut from "../layOut/HomeLayOut";
import CategoryNews from "../pages/CategoryNews";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOut />,
        children:[
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path:'category/:id',
                element:<CategoryNews />,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <h1>News page</h1>
    },
    {
        path: 'auth',
        element: <h1>Auth page</h1>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
]);

export default routes;