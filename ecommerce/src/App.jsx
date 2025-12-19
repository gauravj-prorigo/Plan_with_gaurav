import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./componentes/Layout";
import LandingPage from "./componentes/LandingPage";
import About from "./componentes/About";
import ContactUs from "./componentes/ContactUs";
import OurTeam from "./componentes/OurTeam";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
         {
          path: "about",
          element: <About/>,
        },
         {
          path: "contact",
          element: <ContactUs/>,
        },
         {
          path: "ourteam",
          element: <OurTeam/>,
        },
      ],
    },
  ]);
  return(
    <RouterProvider router={routes}/>
  )
}

export default App;
