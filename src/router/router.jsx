import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layouts";
import { createRef } from "react";
import Home from "@/pages/home.jsx";
import Setting from "@/pages/setting.jsx";
import Login from "@/pages/login.jsx";
import Auth from "@/hocs/Auth";

export const routes = [
  { path: "/", name: "Home", element: <Home />, nodeRef: createRef() },
  {
    path: "/setting",
    name: "Setting",
    element: <Setting />,
    nodeRef: createRef(),
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Auth>
        <Layout />
      </Auth>
    ),
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
