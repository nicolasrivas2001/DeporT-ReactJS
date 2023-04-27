import LogoTwitch from "../assets/twitch.png"

export const BotonTwitch=(props)=>{
    return(
        <a href="https://www.twitch.tv/deporT" target="_blank" rel="noreferrer">
            <div className="boton-twitch">
                <div className="contenedor-logo-twitch">
                    <img src={LogoTwitch} alt="Logo Twitch" />
                </div>
                <div className="contenedor-p-twitch">
                    <p>{props.text}</p>
                </div>
            </div>
        </a>
    )
}