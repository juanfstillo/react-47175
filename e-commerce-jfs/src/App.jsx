/* eslint-disable no-unused-vars */
import { useState } from 'react'

import Navegacion from './components/Navbar/NavBar'
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'
import Tarjeta from './components/Card/Card'

import './App.css'
const titulo = 'Solo Deportes ⚽'
const tarjeta = {titulo: "Camiseta Inter Messi",descripcion:"La camiseta del mejor del mundo"} 



function App() { 
    
    return (
        <div>
            <Navegacion /> 
            <Titulo titulo={titulo}/>
            <Tarjeta titulo={tarjeta.titulo} descripcion={tarjeta.descripcion}/>
            <Footer /> 
        </div>
    )
}

export default App