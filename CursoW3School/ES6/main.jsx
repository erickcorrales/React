/* 
    You can import module into a file in two ways, based on if they are named 
    exprts or default exports

    Named exports must be destructured using curly braces. Deafult exports do 
    not

*/

// import { name, age } from './person.js'
// import message from './message.js'

// import Default from './message.js' // Also the name of the default export could be change, in named export it not possible 

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

                        /* Maps in React */

const myArray = ['apple', 'banana', 'orange']
const myList = myArray.map((item, i) => <p key={i}>{item}</p>)

// maps with objects
const users = [
    { id: 1, name: 'John', age: 30},
    { id: 2, name: 'Jane', age: 25},
    { id: 3, name: 'Bob', age: 35}
]

function UserList() {
    return (
        <ul>
            { users.map(user => 
                <li key={ user.id }>
                    { user.name } is { user.age } years old
                </li>
            ) }
        </ul>
    )
}

function MapParameters() {
    return (
        <ul>
            { myArray.map((fruit, index, array) => {
                return (
                    <li key={ fruit }>
                        Number: { fruit }, Index: { index }, Array: { array }
                    </li>
                )
            })}
        </ul>
    )
}

                        /* Destructing Arrays */
const vehicles = ['mustang', 'f-150', 'expedition']

// old way
const car = vehicles[0]
const truck = vehicles[1]
const suv = vehicles[2]

// new way
const [car1, truck1, suv1] = vehicles

function calculate(a, b) {
    const add = a + b
    const subtract = a - b
    const multiply = a * b
    const divide = a / b

    return [add, subtract, multiply, divide]
}

const [add, subtract, multiply, divide] = calculate(9, 7)

function dateInfo(dat) {
    const d = dat.getDate()
    const m = dat.getMonth()
    const y = dat.getFullYear()

    return [d, m, y]
}

const [date, month, year] = dateInfo(new Date())

                            /* Desctructuring Objects */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 50
}

// Destructuring
let { firstName, lastName, age } = person

// note: For Objects, the order of the properties does not matter:
/* 
    let { lastName, firstName, age } = person

    lastName = Doe
*/

// note: You can extract only the  value(s) you want

// For portentially missing properties we can set default values:
let { firstName:fN, lastName:lN, age:a, country = 'Norway' } = person 

// Destructure deeply nested objects
person.car = {
    brand: 'Ford',
    model: 'Mustang'
}

let { firstName:firstN, car: { brand, model } } = person

let message = `My name is ${ firstN }, and I drive a ${ brand } ${ model }`

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}

// old way
function MyVehicle(vehicle) {
    const message = 'My ' + 
    vehicle.type +
    ' is a ' +
    vehicle.color +
    ' ' +
    vehicle.brand +
    ' ' +
    vehicle.model +
    '.'

    return <h2 style={{color: 'red'}}>{message}</h2>
}

// New Way
function MyVehicle2({type, color, brand, model, year}) {
    const message = 
    `My ${type} 
    is a ${color} 
    ${brand} ${model} from the year ${year}.`

    return <h2 style={{color: 'blue'}}>{message}</h2>
}

function MyVehicle3({ model, registration: {state} }) {
    const message = `My ${model} is registered in ${state}`

    return <h3 style={ {color: 'orange'} }>{message}</h3>
}

function MyVehicle4({ year, country }) {
    const message = `My car is from the ${year} year and was registered in ${country}`

    return <h3 style={ {color: 'white', backgroundColor: 'black', width: '500px'}}>{message}</h3>
}


/* Props Destructuring */

// using destructuring
function Greeting({ name, age }) {
    return <h1>Hello, { name }! You are { age } years old</h1>
}

// NOT using destructuring
function Greeting2(props) {
    return <h1>Hello, { props.name }! You are { props.age } years old</h1>
}


/* useState Hook Destructuring */
function Counter() {
    // Destructuring the array returned by useState
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}




                            /* Spread Operator */
const numbersOne = [1, 2, 3]
const numbersTwo = [4, 5, 6]
const numbersCombined = [...numbersOne, ...numbersTwo]
console.log(numbersCombined)

const [one, two, ...rest] = numbersCombined 



/* Renderizado */
root.render(
    <div>
        {/* Maps in React */}
        <h1 style={ {
            textAlign: 'center', 
            margin: 'auto', 
            width: '500px', 
            border: 'solid', 
            backgroundColor: 'lightgreen'
        }}>Maps in React</h1>
        {myList}
        <UserList />
        <MapParameters />
        
        {/* Destructing Arrays */}
        <br /><br /><br /><br />
        <h1 style={ {
            textAlign: 'center', 
            margin: 'auto', 
            width: '500px', 
            border: 'solid', 
            backgroundColor: 'lightgreen'
        }}>Destructing Arrays</h1>
        Car: {car} <br /> Camioneta: {truck} <br />Suburban: {suv}<br /><br />
        Car: {car1} <br /> Camioneta: {truck1} <br />Suburban: {suv1}<br /><br />
        Add: {add} <br /> Subtract: {subtract} <br />Multiply: {multiply} <br /> Divide: {divide}<br /><br />
        { date } { month } { year }

        {/* Desctructuring Objects */}
        <br /><br /><br /><br />
        <h1 style={ {
            textAlign: 'center', 
            margin: 'auto', 
            width: '500px', 
            border: 'solid', 
            backgroundColor: 'lightblue'
        }}>Destructing Objects</h1>
        { firstName } 
        { lastName } 
        { age }
        <br />
        { country }
        <br />
        { message }

        <MyVehicle {...vehicleOne} />
        <MyVehicle2 {...vehicleOne} />
        <MyVehicle3 model={vehicleOne.model} registration={ { state: vehicleOne.registration.state }} />
        <MyVehicle4 year={vehicleOne.year} country={ vehicleOne.registration.country}  />


        {/* Props Destructuring */}
        <br /><br /><br /><br />
        <h1 style={ {
            textAlign: 'center', 
            margin: 'auto', 
            width: '500px', 
            border: 'solid', 
            backgroundColor: 'lightblue'
        }}>Props Destructuring</h1>
        <Greeting name='John' age={25} />


        {/* Props Destructuring */}
        <br /><br /><br /><br />
        <h1 style={ {
            textAlign: 'center', 
            margin: 'auto', 
            width: '500px', 
            border: 'solid', 
            backgroundColor: 'lightblue'
        }}>useState Hook Destructuring</h1>
        {/* <Counter /> */}



        {/* Spread Operator */}
        <br /><br /><br /><br />
        <h1 style={ {
            textAlign: 'center', 
            margin: 'auto', 
            width: '500px',
            border: 'solid', 
            backgroundColor: 'lightcoral'
        }}>Spread Operator</h1>
        {`${numbersCombined}`} <br />
        {`One: ${one}, Two: ${two}, Rest: ${rest}`}

        {/* Modules */}
        <br /><br /><br /><br />
        <h1 style={ {
            textAlign: 'center', 
            margin: 'auto', 
            width: '500px',
            border: 'solid', 
            backgroundColor: 'lightcoral'
        }}>Ternary Operator</h1>
        False: {false ? 'Hola React' : 'Hola Erick'}<br />
        True: {true ? 'Hola React' : 'Hola Erick'}
    </div>
)


