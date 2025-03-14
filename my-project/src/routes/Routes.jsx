import { createBrowserRouter } from "react-router-dom";
import HomeLayOut from "../layOut/HomeLayOut";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayOut />
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