import './App.css'

function App(props) {

    /* if statement */
    function MissedGoal() {
        return <h1>MISSED!</h1>
    }

    function MadeGoal() {
        return <h1>Goal!</h1>
    }

    const isGoal = props.isGoal

    if (isGoal)
        return (
            <MadeGoal />
        )
    else
        return (
            <MissedGoal />
        )
}

/* Logical && Operator */
export function Garage(props) {
    const cars = props.cars
    return (
        <>
            <h1>Garage</h1>
            { cars.length > 0 &&
                <h2>
                    You have { cars.length } cars in your garage.
                </h2>
            }
        </>
    )
}

/* Ternary Operator */
export function Goal(props) {
    return (
        <>
            { props.isGoal  ? <h1>Goal!</h1> : <h1>MISSED SHOT!</h1> }
        </>
    )
}

export default App
