import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Container from "./components/layout/Container";

/* IMPORTS DOS COMPONENTES DE PÁGINAS */
import Home from "./components/pages/Home";
import Playlist from "./components/pages/Playlist";
import Perfil from "./components/pages/Perfil";
import Informacoes from "./components/pages/informacoes";
import Update from "./components/pages/Update";

/* IMPORTAÇÃO DO NAVBAR */
import NavBar from "./components/layout/NavBar";
import Rodape from "./components/layout/Rodape";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="/" element={<NavBar />}>
                <Route path="/" element={<Home />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route
                  path="/informacoes/:id_musica"
                  element={<Informacoes />}
                />
                <Route path="/updateBook/:id_musica" element={<Update />} />
              </Route>
            </Routes>
            <Rodape />
          </Container>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
