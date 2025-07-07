import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Futbol } from './events.jsx'

/* 
    Just like HTML DOM events, React can perform actions based on user events
    React has the same events as HTML: click, change, mouseover, etc.

    React events are written in camelCase syntax:
    onClick instead of onclick

    React events handlers are written inside curly braces:
    onClick={ shoot } instead of onclick="shoot()"
*/

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <App /> */}
        <Futbol />
    </StrictMode>,
)
