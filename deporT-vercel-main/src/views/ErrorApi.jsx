import { Link } from "react-router-dom"


export const ErrorApi=()=>{
    return(
        <div className="contenedor-errorApi">
            <div className="errorApi">
                <h3>Out para Delpo</h3>
                <p className="parrafo">Nuestra API no responde</p>
                <div>
                    <Link to="/"><p>Volver al Home</p></Link>
                </div>
            </div>
        </div>
    )
}