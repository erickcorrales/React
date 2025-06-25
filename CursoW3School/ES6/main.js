class Car {
    constructor(name) {
        this.brand = name
    }

    present() {
        return 'I have a ' + this.brand
    }
}

const myCar = new Car('Ford')

console.log(myCar.brand)
console.log(myCar.present())

/* Class Inheritance */

class Model extends Car {
    constructor(name, mod) {
        super(name)
        this.model = mod
    }

    show() {
        return this.present() + ', it is a ' + this.model
    }
}

const myModel = new Model('Ford', 'Mustang')
console.log(myModel.show())




/* Arrow Functions */

hello = function() {
    return 'Hello, World!'
}

console.log(hello())

hello1 = () => {
    return 'Hello, World!'
}

hello2 = () => 'Hello, World!' // Sames as the above

hello3 = (value) => 'Hello, ' + value

hello4 = value => 'Hello, ' + value // Same as above

console.log(hello1())
console.log(hello2())
console.log(hello3('Erick'))
console.log(hello4('Roberto'))



/* What about this? */

// In short, with arrow functions there is no binding of this.

class Header {
    constructor() {
        this.color = 'Red'
    }

    // Regular function:
    changeColor = function() {
        return this
    }
}

const myHeader = new Header()

console.log(myHeader.changeColor())


class Header1 {
    constructor() {
        this.color = 'Blue'
    }

    changeColor = () => {
        return this
    }
}

const myHeader1 = new Header1()
console.log(myHeader1.changeColor())