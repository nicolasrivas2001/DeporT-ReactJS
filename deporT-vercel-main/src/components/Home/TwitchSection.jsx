import { BotonTwitch } from "../BotonTwitch"

export const TwitchSection=()=>{
    return(
        <div className="twitch-section">
            <h3>Volvé a vivir la emoción de la cancha con un solo play</h3>
            <p>Visitanos en Twitch  y volvé a disfrutar, a analizar y a festejar esos partidos que se ganaron un lugar en tu corazón deportivo.</p>
            <div className="twitch-banner">
                <BotonTwitch text={"Ir a twitch"}></BotonTwitch>
            </div>
        </div>
    )
} 