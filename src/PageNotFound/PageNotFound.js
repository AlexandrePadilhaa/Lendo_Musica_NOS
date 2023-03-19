import React from 'react';
import { useNavigate } from 'react-router-dom';
import lupa from '../images/Lupa.svg';
import MeninaSofa from '../images/MeninaSofa.svg';
import logolaranja from '../images/logolaranja.svg'
import './styleNF.css';

function PageNaoEncontrou() {

  const navigate = useNavigate();
  const novaBusca = () => {
    navigate('/');
  }
  return (
    <body className='pagNotFound'>

      <img src={logolaranja} alt="logo lendo músicas " id='logo' />

      <h1 id='titulo'>Letra não encontrada</h1>

      <img id='meninaSofa' src={MeninaSofa} alt="menina no sofa " />

      <h2 id='mensagem'> Essa música ainda não foi escrita, mas não fique triste, você pode <br />acessar milhares de músicas realizando uma nova busca SZ</h2>

      <button id="botaoNovaBusca" onClick={novaBusca} > <img src={lupa} /> Nova busca</button>

    </body>);
}
export default PageNaoEncontrou;