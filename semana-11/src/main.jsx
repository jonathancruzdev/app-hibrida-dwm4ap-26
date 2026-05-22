import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'

import Register from './pages/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Home />
    < Register />
  </StrictMode>,
)
