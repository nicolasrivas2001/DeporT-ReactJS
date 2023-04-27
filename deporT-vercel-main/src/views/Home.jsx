import ContenedorResultadosHome from "../components/Home/ContenedorResultadosHome";
import { ContenedorNoticiasDestacadas } from "../components/Home/ContenedorNoticiasDestacadas";
import { TwitchSection } from "../components/Home/TwitchSection";



export const Home =()=>{
    return(
        <div className="home">
            <div className="banner-home">
                <p className="pasion">PASIÓN</p>
                <div><p className="porlacancha">POR LA CANCHA</p></div>
            </div>
            <ContenedorResultadosHome></ContenedorResultadosHome>
            <div className="fondo-noticias-destacadas">
                <ContenedorNoticiasDestacadas location="home"></ContenedorNoticiasDestacadas>
            </div>
            <TwitchSection></TwitchSection>
        </div>
    )
}

export default Home;