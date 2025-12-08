import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WeatherAppProvider } from "./context/Weathercontext.jsx";
import { ThemeContext, ThemeProvider } from "./context/Themecontext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <WeatherAppProvider>
        <App />
      </WeatherAppProvider>
    </ThemeProvider>
  </StrictMode>
);
