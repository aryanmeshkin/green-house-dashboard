import { createBrowserRouter } from "react-router";

import MainLayout from "./layout/mainlayout/main-layout";
import Dashboard from "./pages/dashboard/dashboard";
import GrapgPage from "./pages/graph-page/graph-page";
import ControlPage from "./pages/control-page/control-page";


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
]);

export default router;
