import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
const App = lazy(() => import("./App"));
import { ThemeProvider } from "./context/Themecontext.jsx";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./ErrorBoundary/ErrorBounadry.jsx";
import SuspenseFallnback from "./suspense/SuspenseFallnback.jsx";
createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <ThemeProvider>
      <Suspense fallback={<SuspenseFallnback/>}>
        <App />
      </Suspense>
      <ToastContainer autoClose={1000} />
    </ThemeProvider>
  </ErrorBoundary>
);
