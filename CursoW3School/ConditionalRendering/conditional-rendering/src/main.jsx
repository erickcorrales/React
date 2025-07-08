import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Garage, Goal } from './App.jsx'

/*
    React Conditional Rendering

    In React, you can conditionally render components
    There are several ways to do this

*/

const cars = ['Ford', 'BMW', 'Audi']

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App isGoal={ false }/>
        <App isGoal={ true }/>
        <Garage cars= { cars } />
        <Goal isGoal= { false } />
    </StrictMode>,
)
