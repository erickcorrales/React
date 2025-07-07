function Car(props) {
    return <h2>I am a { props.brand }!</h2>
}

function Garage() {
    const carModel = 'Mustang'
    const carInfo = {
        name: 'BMW',
        model: 'M5'
    }
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand="Ford" />
            <Car brand= { carModel } />
            <Car brand= { carInfo.name } />
        </>
    )
}

export {Car, Garage}
