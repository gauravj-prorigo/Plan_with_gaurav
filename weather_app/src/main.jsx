import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
const App = lazy(() => import("./App"));
import { ThemeProvider } from "./context/Themecontext.jsx";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Suspense fallback={<h1 style={{ color: "red" }}>Loading .........</h1>}>
      <App />
    </Suspense>

    <ToastContainer autoClose={1000} />
  </ThemeProvider>
);
