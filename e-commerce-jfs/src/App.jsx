/* eslint-disable no-unused-vars */
import { useState } from 'react'

import Navegacion from './components/Navbar/NavBar'
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer  from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const titulo = 'Solo Deportes ⚽'



function App() { 
    
    return (
        <BrowserRouter>

        <div>
            <Navegacion /> 
            <Titulo titulo={titulo}/>
            <div className="container">
            <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
                <Route path='/detalles/:id' element={<ItemDetailContainer />}/>
            </Routes>
            </div>
            <Footer /> 
        </div>
        </BrowserRouter>

    )
}

export default App