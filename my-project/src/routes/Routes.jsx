import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayOut from "../layOut/HomeLayOut";



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
                element:<h2>This is category</h2>
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