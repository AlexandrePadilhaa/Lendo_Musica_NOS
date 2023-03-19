import React from 'react';
import '../App.css';
import Formulario from './Formulario.js';
import { useNavigate } from "react-router-dom";
import LogoLaranja from '../componentes/Logo.js'


function Home() {

    const navigate = useNavigate();
    const mostrarHistorico = () => {
        navigate('/History');
    }


    return (<body className='home'>
        <header>
            <LogoLaranja url='/' ident='logoHome' />
            <a onClick={mostrarHistorico} className='ultimasBuscas'>Últimas buscas</a>
        </header>

        <h1 className='homeTitulo'>Buscar letra</h1>
           
        
        <Formulario />

     
    </body>);
}
export default Home;