/* eslint-disable react/prop-types */
function Titulo(props) { // prop 
    return (
        <div>
            <h1 className="text-center display-2">
                {props.titulo}
            </h1>
        </div>
    )
}

export default Titulo
