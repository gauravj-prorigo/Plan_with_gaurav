
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Setting from "./components/Setting";
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
          element: <About/>,
        },
          {
          path: "setting",
          element: <Setting/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}
