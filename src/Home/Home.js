import React from 'react';
import logolaranja from '../images/logolaranja.svg';
import '../App.css';
import Formulario from './Formulario.js';
import { useNavigate } from "react-router-dom";
import Teste from '../componentes/Logo.js'

function Home() {

    const navigate = useNavigate();
    const mostrarHistorico = () => {
        navigate('/History');
    }


    return (<body className='home'>
        <header>
            {/*<img src={logolaranja} alt="logo lendo músicas " className='logoHome' />*/}
            <a onClick={mostrarHistorico} className='ultimasBuscas'>Últimas buscas</a>
        </header>

        <Teste url = '/' aux  = 'logoHome'/>

        <h1 className='homeTitulo'>Buscar letra</h1>

        <Formulario />

    </body>);
}
export default Home;