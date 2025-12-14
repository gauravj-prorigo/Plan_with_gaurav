import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./components/Home";
// import  About from "./components/About";
const About = lazy(() => import("./components/About"));
const Home = lazy(() => import("./components/Home"));
const Layout = lazy(() => import("./components/Layout"));
import Setting from "./components/Setting";
import BuggyComponent from "./components/BuggyComponenet";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "setting",
          element: <Setting />,
        },
        {
          path: "/buggy",
          element: <BuggyComponent />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
