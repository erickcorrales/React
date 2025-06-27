
export default function MensajeReact() {
    return (
        <h1>Estamos estudiando el Curso de React!</h1>
    )
}

function HolaMundo({name}) {
    return (
        <a href='http://www.youtube.com' target='_blank'>
            <h2>Hola, {name}</h2>
        </a>
    )
}

/* Function Component */
function Moto() {
    return <h1>Hi, I'm a motorcycle</h1>
}


/* Props */

/* 
    Components can be passed as props, which stands for properties
    Props are like functions arguments, and you send them into the component as attributes
*/

function Car(props) {
    return <h2>I am a {props.color} {props.model } Car!</h2>
}

function Car1({ color='black', model='Camaro'}) {
    return <h1>I am a {color} {model} Car!</h1>
}


/* Components in Components */
function Garage() {
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <Car />
            <Car1 color="yellow"/> {/* Valor por default para model */}
            <Car1 /> {/* Valores por default */}
            <Car1 model="Mustang"/> {/* Valor por default para color */}
        </>
    )
}

export { HolaMundo, Moto, Car, Garage}