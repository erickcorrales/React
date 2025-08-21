
function Hello() {
    return <h1>Hola mundo!</h1>
}

function Adios() {
    return <h2>Adios</h2>
    
}

const container = document.getElementById('mi-div')
const root = ReactDOM.createRoot(container)
root.render(<Hello />)
root.render(<Adios />)
