import { Link } from "react-router-dom"


export const Entretiempo=()=>{
    return(
        <div className="contenedor-entretiempo">
            <div className="entretiempo">
                <h3>Estamos en entretiempo</h3>
                <p className="parrafo"> Transmisión no encontrada. <br /> Pronto volvemos con <span>más partidos para disfrutar.</span></p>
                <div>
                    <Link to="/"><p>Volver al Home</p></Link>
                </div>
            </div>
        </div>
    )
}