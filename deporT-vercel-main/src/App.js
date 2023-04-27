import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Footer } from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";
import { ApiContext } from "./context/ApiContext";
import "./styles/styles.scss"
import Home from "./views/Home.jsx";
import { NotPart } from "./views/NotPart.jsx";
import { InfoFutbol } from "./views/InfoFutbol.jsx";
import { InfoBasquet } from "./views/InfoBasquet.jsx";
import { InfoNoticia } from "./views/InfoNoticia.jsx";
import { Error404 } from "./views/Error404.jsx";
import { useMediaQuery } from "@mui/material";

function App() {
  const isScreen= useMediaQuery("(min-width:1080px)")
  return (
    <ApiContext>
      {isScreen ?
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/:id" element={<NotPart></NotPart>} />
            <Route path="/futbol/:tipo" element={<InfoFutbol></InfoFutbol>} />
            <Route path="/basquet/:tipo" element={<InfoBasquet></InfoBasquet>} />
            <Route path=":deporte/noticias/:idnoticia" element={<InfoNoticia></InfoNoticia>} />
            <Route path="*" element={<Error404></Error404>} />
          </Routes>
          <Footer></Footer>
          
        </BrowserRouter>
      :
        <div className='error-screen'>
          <p>Este sitio está disponible sólo para pantallas 1080px o más grandes</p>
          <p>This site is available only for screens 1080px or more</p>
        </div>
      }
    </ApiContext>
  );
}

export default App;
