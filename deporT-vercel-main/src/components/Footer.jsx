import Logo from "../assets/logo.png"
import Twitter from "../assets/twitter.jpg"
import Tiktok from "../assets/tiktok.jpg"
import Instagram from "../assets/instagram.jpg"
import FotoNazarena from "../assets/Foto-Nazarena.jpeg"
import FotoNicolas from "../assets/Foto-Nicolas.jpeg"
import FotoTimoteo from "../assets/Foto-Timoteo.png"
import { Integrante } from "./Integrante"
import { Link } from "react-router-dom"

const posicionarPantalla=()=>{
    window.scroll({
        top: 0,
        left: 0});
}

export const Footer=()=>{
    return(
        <div className="contenedor-footer">
            <div className="footer">
                <div className="footer-logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="footer-p">
                    <p>Viví cada noticia como una experiencia. <br /> En DeporT te invitamos a pisar la cancha, a emocionarte con cada partido y, sobre todo, a compartir nuestra pasión por el deporte.</p>
                </div>
                <div className="footer-secciones">
                    <h4 className="titulo-secciones">Secciones</h4>
                    <Link onClick={posicionarPantalla} to="/"><p>Home</p></Link>
                    <Link onClick={posicionarPantalla} to="futbol"><p>Futbol</p></Link>
                    <Link onClick={posicionarPantalla} to="basquet"><p>Basquet</p></Link>
                </div>
                <div className="footer-contacto">
                    <h4 className="titulo-footer">Contacto</h4>
                    <div className="redes-footer">
                        <div>
                            <img src={Instagram} alt="Twitter" />
                            <p>deporT.ok</p>
                        </div>
                        <div>
                            <img src={Twitter} alt="Twitter" />
                            <p>deportOK</p>
                        </div>
                        <div>
                            <img src={Tiktok} alt="Twitter" />
                            <p>deport</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contenedor-integrantes">
                    <div className="integrantes">       
                        <div className="imagenes-integrantes">
                            <div className="linea-azul"></div>
                            <div>
                                <div className="linea-roja"></div>
                                <div className="imagenes">
                                    <Integrante imagen={FotoNazarena} nombre="Nazarena Fernández" profesion="UX/UI Designer" link="https://www.linkedin.com/in/nazarena-fernandez-ux/"></Integrante>
                                    <Integrante imagen={FotoTimoteo} nombre="Timoteo Gambella" profesion="Developer" link="https://www.linkedin.com/in/timoteo-gambella-4b6418210/"></Integrante>
                                    <Integrante imagen={FotoNicolas} nombre="Nicolás Rivas" profesion="Developer" link="https://www.linkedin.com/in/nicolasrivas-/"></Integrante>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="linea-azul-fondo"></div>
                    <div className="linea-roja-fondo"></div>
            </div>
        </div>
    )
}