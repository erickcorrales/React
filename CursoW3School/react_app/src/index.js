import React from 'react';
import ReactDOM from 'react-dom/client';
import App, {Get} from '../src/App.jsx'

// const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(myFirstElement)
root.render(<Get />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
