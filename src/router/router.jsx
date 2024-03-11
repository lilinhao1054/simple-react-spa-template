import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout";
import { createRef } from "react";
import Home from "@/page/home.jsx";
import Setting from "@/page/setting.jsx";

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
    element: <Layout />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
