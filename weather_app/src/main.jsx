import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/Themecontext.jsx";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(

    <ThemeProvider>
      <App />
      <ToastContainer 
      autoClose={1000}/>
    </ThemeProvider>

);
