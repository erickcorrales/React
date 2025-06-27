import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Mensaje, { HolaMundo, Moto, Car, Garage } from './RenderHTML.jsx'
import CarClass, { FordCar, ComponentInside, MotoHonda, HeaderMounting, HeaderUpdating, HeaderUnmounting} from './Classes.jsx'

const myElement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <th>John</th>
        </tr>
        <tr>
            <th>Elsa</th>
        </tr>
    </table>
)

const myElement1 = <h3>I love JSX!</h3>
const myElement2 = <h3 className='my-class'>React is {5 + 5} times better with JSX!</h3>
const myElement3 = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
)

const x = 5
let text = "Goodbye"

if (x > 10)
    text = "Hello"

const myElement5 = <h2>{text}</h2>

const myElement4 = <input type='text' />
const myElement6 = <h2>{(x < 10 ? "Hello" : "Goodbye")}</h2>


/* Class Component */
/* class Car extends React.Component {
    render() {
        return <h2>Hi, I am Erick</h2>
    }
} */

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
        <HolaMundo name='Roberto' />
        <Mensaje />
        {myElement}
        {myElement1}
        {myElement2}
        {myElement3}
        <p>I am a pragraph</p>
        {myElement4}
        {myElement5}
        {myElement6}
        <Moto />
        <Car color='red' model='Mustang' />
        <Garage />
        <CarClass />
        <FordCar nombre='Mitsubishi'/>
        <ComponentInside />
        <MotoHonda owner='Erick'/>
        <HeaderMounting favColor='black' />
        <HeaderUpdating  favColor='purple'/>
        <HeaderUnmounting  />
    </StrictMode>
)
