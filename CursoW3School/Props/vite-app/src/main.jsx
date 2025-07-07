import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Car, Garage } from './Class.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* App /> */}
        <Car brand="Ford" />
        <Car brand="Toyota" />
        <Garage />
    </StrictMode>,
)
