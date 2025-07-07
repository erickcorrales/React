function jugador(nombre) {
    alert(nombre)
}

function Futbol() {
    const shoot = () => {
        alert("Great shoot")
    }

    const tiro = (a, b) => {
        alert(b.type)
        /* 
            'b' represents the React event that triggered the function,
            in this case the 'click' event
        */
    }

    return (
        <>
            {/* Adding events */}
            <button onClick={ shoot }>Take the shot!</button>
            <br /><br />

            <button onClick={ () => { 
                alert('Erick Corrales Quintero')
            } }>My name</button>
            <br /><br />

            {/* Passing arguments */}
            <button onClick={ function() { jugador('Lionel Messi') } }>El mejor jugador del mundo</button>
            <br />
            <br />

            {/* React event object */}
            <button onClick={ (event) => { tiro('Goool', event) }}>Tiro</button>
        </>
    )
}



export { Futbol }