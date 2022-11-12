import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOuts/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LogIn/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);

export default router