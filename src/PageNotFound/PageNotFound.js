import React from 'react';

import lupa from '../images/Lupa.svg';
import MeninaSofa from '../images/MeninaSofa.svg';
import LogoLaranja from '../componentes/Logo.js'
import Botao from '../componentes/Botao';
import './styleNF.css';

function PageNaoEncontrou() {

 
  return (
    <body className='pagNotFound'>

      <LogoLaranja url='/' ident='logo' />

      <h1 id='titulo'>Letra não encontrada</h1>

      <img id='meninaSofa' src={MeninaSofa} alt="menina no sofa " />

      <h2 id='mensagem'> Essa música ainda não foi escrita, mas não fique triste, você pode <br />acessar milhares de músicas realizando uma nova busca SZ</h2>

      <Botao ident='botaoNovaBusca' texto = 'Nova Busca'/>

    </body>);
}
export default PageNaoEncontrou;