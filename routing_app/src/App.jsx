import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./componentes/User";
import Home from "./componentes/Home";
import UserProfile from "./componentes/UserProfile";
import Settting from "./componentes/Seeting";
import Layout from "./componentes/Layout";
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
        path: "user",
        element: <User />,
      },
      {
        path: "user/:id",
        element: <UserProfile />,
      },
      {
        path: "setting",
        element: <Settting />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
