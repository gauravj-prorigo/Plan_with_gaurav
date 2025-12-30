
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./componentes/Layout";
import LandingPage from "./componentes/LandingPage";
import About from "./componentes/About";
import ContactUs from "./componentes/ContactUs";
import OurTeam from "./componentes/OurTeam";
import BuyNow from "./subcomponenets/Buynow";
import Cart from "./componentes/Cart";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index:true,
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
        {
          path: "ourteam/:id",
          element: <BuyNow/>,
        },
        {
          path:'cart',
          element:<Cart/>
        }
      ],
    },
  ]);
  return(
    <RouterProvider router={routes}/>
  )
}

export default App;
