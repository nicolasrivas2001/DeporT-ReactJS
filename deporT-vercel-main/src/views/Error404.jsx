import { Link } from "react-router-dom"


export const Error404=()=>{
    return(
        <div className="contenedor-error404">
            <div className="error404">
                <h3>Gino hizo una falta</h3>
                <p className="parrafo">Página no encontrada</p>
                <div>
                    <Link to="/"><p>Volver al Home</p></Link>
                </div>
            </div>
        </div>
    )
}