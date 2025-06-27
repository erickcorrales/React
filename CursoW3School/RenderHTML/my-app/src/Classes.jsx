import React from 'react'

/* Class Component */

export default class CarClass extends React.Component {
    render() {
        return <h2 style={ {backgroundColor: 'red'} }>Hi, I'm a Car Class!</h2>
    }
} 

export class FordCar extends React.Component {
    constructor(props) {
        super(props)
        /* In React, component properties should be kept in an object called state */
        this.state = { color: 'blue' }
    }
    
    render() {
        return (
            <>
                <h2>I am a {this.state.color} Car!</h2>
                <h1>I am a prop of the class: {this.props.nombre}</h1>
            </>
        )
    }
}


export class ComponentInside extends React.Component {
    render() {
        return (
            <div>
                <h1>Who lives in my Garage?</h1>
                <CarClass />
            </div>
        )
    }
}



/* React Class Component State */
// Note: The state object is where you store property values that belongs
// Note: to the component. When the state objects changes, the component re-renders

export class MotoHonda extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            brand: 'Honda',
            model: "ZR-L250",
            color: `Black`,
            year: 2024
        }
    }

    changeColor = () => {
        this.setState({ color: 'blue'})
    }

    render() {
        return (
            <div>
                <h1>My Moto {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} {' '}
                    {this.state.model} {" "}
                    from {this.state.year}
                </p>
                {this.props.owner}
                <br />
                <button onClick={this.changeColor}>
                    Change Color
                </button>
            </div>
        )
    }
}

/* Lifecycle of Components */

// Mounting

/* 
    Mouting means putting elements into the dom
    React has four built-in methods that gets called, in this order, When
    mouting a component

        - constructor()
        - getDerivedStateFromProps()
        - render()
        - componentDidMount()
*/

export class HeaderMounting extends React.Component {
    constructor(props) {
        super(props)
        this.state = { favoritecolor: 'red'}
    }

    /* static getDerivedStateFromProps(props) {
        return { favoritecolor: props.favColor}
    } */

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoritecolor: 'yellow'})
        }, 1000)
    }

    render() {
        return (
            <h1>My Favorite color is {this.state.favoritecolor}</h1>
        )
    }
}


// Updating

/* 
    A component is updated whenever there is a change in the component's state
    or props. React has five built0in methods that gets called, in this order,
    when a component is updated

        - getDerivedStateFromProps()
        - shouldComponentUpdate()
        - render()
        - getSnapshotBeforeUpdate()
        - componentDidUpdate()
*/

export class HeaderUpdating extends React.Component {
    constructor(props) {
        super(props)
        this.state = { favoriteColor: 'blue' }
    }

    /* static getDerivedStateFromProps(props) {
        return {favoriteColor: props.favColor}
    } */

    // Stop or not the component from rendering at any update
    shouldComponentUpdate() {
        return true
    }

    // Method to find out what the state object looked like before the update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML = 
        'Before the update, the favorite was ' + prevState.favoriteColor
    }

    // Method called after the update has been rendered in the DOM
    componentDidUpdate() {
        document.getElementById('div2').innerHTML =
        'The updated favorite is ' + this.state.favoriteColor
    }

    changeColor = () => {
        this.setState({ favoriteColor: 'white'})
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change color Header Updating</button>
                <div id='div1'></div>
                <div id='div2'></div>
            </div>
        )
    }
}



// Unmounting

/* 
    The next phase in the lifecycle is when a component is removed from the
    DOM, or unmounting as React likes to call it. React has only one built-in
    method that gets called when a component is unmounted

        - componentWillUnmount()
*/

// This methos is called when the component is about to be removed from the DOM
export class HeaderUnmounting extends React.Component {
    constructor(props) {
        super(props)
        this.state = { show: true }
    }

    delHeader = () => {
        this.setState({ show: false })
    }

    render() {
        let myHeader
        if (this.state.show)
            myHeader = <Child />

        return (
            <div>
                {myHeader}
                <button onClick={this.delHeader}>Delete Header</button>
            </div>
        )
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert('The component named Header is about to be unmounted')
    }

    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
}
