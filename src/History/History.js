import React from "react";
import { useNavigate } from "react-router-dom";
import './styleH.css';
import logolaranja from '../images/logolaranja.svg'
import lupa from '../images/Lupa.svg'
import Historico from './/historico'


function History() {
  const navigate = useNavigate();
  function voltar() {
    navigate('/');
  }


  return (<>

    <body className="historico">
      <header>

        <img src={logolaranja} alt="logo lendo músicas " id='logoH' />

      </header>
      <h1 id="tituloH">Histórico</h1>

      {<Historico />}

      <button id="botaoH" onClick={voltar}><img src={lupa} />Buscar</button>
    </body>

  </>);

}

export default History;