import { Link, useParams } from "react-router-dom"
import JugadoraFutbol from "../assets/futbolB.png"
import JugadorFutbol from "../assets/futbolA.png"
import JugadorBasquet from "../assets/basquetB.png"
import JugadoraBasquet from "../assets/basquetA.png"

const posicionarPantalla=()=>{
    window.scroll({
        top: 0,
        left: 0});
}

export const NotPart=()=>{
    const {id}=useParams()
    return(
        id==="futbol"?
        <div className="contenedor-notpart">
            <p className="ruta">Home {">"} <span>Fútbol</span></p>
            <div className="notpart">
                <div className="titulos">
                    <h3>Fútbol</h3>
                    <div className="separador"></div>
                    <p>Una pasión que no se puede explicar, pero <span>nosotros entendemos.</span></p>
                </div>
                <div className="noticias-partidos">
                    <Link onClick={posicionarPantalla} to="noticias">
                        <div className="noticias">
                            <p>Noticias</p>
                            <img className="img-jf-noticias" src={JugadoraFutbol} alt="Jugadora de fútbol" />
                        </div>
                    </Link>
                    <Link onClick={posicionarPantalla} to="partidos">
                        <div className="partidos">
                            <p>Partidos</p>
                            <img className="img-jf-partidos" src={JugadorFutbol} alt="Jugadora de fútbol" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>:
        <div className="contenedor-notpart">
            <p className="ruta">Home {">"} <span>Basquet</span></p>
            <div className="notpart">                
                <div className="titulos">
                    <h3>Basquet</h3>
                    <div className="separador"></div>
                    <p>Una pasión que no se puede explicar, pero <span>nosotros entendemos.</span></p>
                </div>
                <div className="noticias-partidos">
                    <Link onClick={posicionarPantalla} to="noticias">
                        <div className="noticias">
                            <p>Noticias</p>
                            <img className="img-jb-noticias" src={JugadorBasquet} alt="Jugadora de fútbol" />
                        </div>    
                    </Link>
                    <Link onClick={posicionarPantalla} to="partidos">
                        <div className="partidos">
                            <p>Partidos</p>
                            <img className="img-jb-partidos" src={JugadoraBasquet} alt="Jugadora de fútbol" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
    
}