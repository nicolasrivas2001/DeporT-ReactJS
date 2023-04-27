import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

const posicionarPantalla=()=>{
    window.scroll({
        top: 0,
        left: 0});
}

const NavBar =()=>{
    return(
        <header>
            <Link onClick={posicionarPantalla} to="/">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            </Link>
            <nav>
                <ul>
                    <Link onClick={posicionarPantalla} to="/"><li>Home</li></Link>
                    <Link onClick={posicionarPantalla}to="/futbol"><li>Fútbol</li></Link>
                    <Link onClick={posicionarPantalla} to="/basquet"><li>Basquet</li></Link>
                </ul>
            </nav>
            <div>
                <input type="search" />
            </div>
        </header>
    )
}

export default NavBar;