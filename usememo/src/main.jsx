import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const App = lazy(() => import("./App"));

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<h1 style={{color:'red'}}>Loading .........</h1>}>
    <App />
  </Suspense>
    

)
