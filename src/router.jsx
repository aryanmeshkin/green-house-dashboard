import { createBrowserRouter } from "react-router";

import MainLayout from "./layout/mainlayout/main-layout";
import Dashboard from "./pages/dashboard/dashboard";
import GrapgPage from "./pages/graph-page/graph-page";
import ControlPage from "./pages/control-page/control-page";
import Login from "./features/identity/components/login";
import Register, {
  RegisterAction,
} from "./features/identity/components/register";
import AuthLayout from "./layout/auth-layout/auth-layout";
import Map from "./features/map/map";
import AccessDashboard from "./features/identity/components/access-dashboard";

import Reporter from "./component/reporter";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AccessDashboard>
        <MainLayout />
      </AccessDashboard>
    ),
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
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/reporter",
        element: <Reporter />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,

        errorElement: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
        action: RegisterAction,
        errorElement: <Register />,
      },
    ],
  },
]);

export default router;
