import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WeatherAppProvider } from './context/Weathercontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherAppProvider>
      <App />
    </WeatherAppProvider>
   
  </StrictMode>,
)
