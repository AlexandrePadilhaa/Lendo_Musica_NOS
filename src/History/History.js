import React from "react";
import { useNavigate } from "react-router-dom";
import './styleH.css';
import LogoLaranja from '../componentes/Logo.js'
import Historico from './/historico'
import Botao from '../componentes/Botao';


function History() {

  return (<>

    <body className="historico">
      <header>
        <LogoLaranja url='/' ident='logoH' />
      </header>
      <h1 id="tituloH">Histórico</h1>

      {<Historico />}

      <Botao ident='botaoH' texto = 'Buscar'/>
    </body>

  </>);

}

export default History;