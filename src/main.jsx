import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Routers } from './routes/Routes.jsx'
import { RouterProvider } from 'react-router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routers}/>
  </StrictMode>,
)
