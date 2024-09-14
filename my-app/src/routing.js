import { createBrowserRouter } from "react-router-dom";
import AddWidgetForm from "./Components/AddWidgetForm";

import App from "./App";

import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";


const customRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                path: "/home",
                element:<Home/>
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/addwidget',
                element: <AddWidgetForm />
            }
        ]
        },
    ])
    export default customRouter;