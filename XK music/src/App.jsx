import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Container from './components/layout/Container'

/* IMPORTS DOS COMPONENTES DE PÁGINAS */
import Home from './components/pages/Home'
import Playlist from './components/pages/Playlist'
import Perfil from './components/pages/Perfil'

/* IMPORTAÇÃO DO NAVBAR */
import NavBar from './components/layout/NavBar'


function App() {

  return (
    <>
    
      <div>

        <BrowserRouter>

          <Container>

            <Routes>

              <Route path='/' element={<NavBar />}>

                <Route path='/' element={<Home />} />
                <Route path='/playlist' element={<Playlist />} />
                <Route path='/perfil' element={<Perfil />} />
                

              </Route>

            </Routes>

          </Container>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
