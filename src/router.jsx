import { createBrowserRouter } from "react-router";

import MainLayout from "./layout/mainlayout/main-layout";
import Dashboard from "./pages/dashboard/dashboard";
import GrapgPage from "./pages/graph-page/graph-page";
import ControlPage from "./pages/control-page/control-page";
import Login, { loginAction } from "./features/identity/components/login";
import Register, { RegisterAction } from "./features/identity/components/register";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        path: "/controls",
        element: <ControlPage />,
      },
      {
        path: "/graphs",
        element: <GrapgPage />,
      },
    ],
  },
  {
    path : "/login",
    element : <Login/>,
    action : loginAction,
    errorElement : <Login/>
  },
  {
    path : "/register",
    element : <Register/>,
    action : RegisterAction, 
    errorElement : <Register/>
  },
  
]);

export default router;
