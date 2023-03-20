import React from "react";
import { useNavigate } from "react-router-dom";
import logoAzul from '../images/LogoAzul.svg';
import seta from '../images/Seta.svg';
import lupa from '../images/LupaBranca.svg';
import './/styleMP.css'

function MusicPage() {

  const navigate = useNavigate();
  const novaBusca = () => {
    navigate('/');
  }

  let letra = JSON.parse(localStorage.getItem('historico'));
  letra = letra[0];

  function exbirLetra() {
    let lyric = letra.Song.split("\n");


    let retorno = lyric.map(function (e) {
      //console.log(e);
      return <p id="letraMP">{e}</p>
    })
    return retorno;
  }

  return (
    <body className="MP">

      <img id="logoMP" onClick={novaBusca} src={logoAzul} />

      <h1 id="VoltarBusca" onClick={novaBusca}><img src={seta} />Voltar para a busca</h1>

      <h2 id="nomeMP"><strong>{letra.nameSong}</strong></h2>

      {exbirLetra()}

      <h2 id="fraseMP">Curtiu? busque mais letras.</h2>
     
      <button id="botaoMP" onClick={novaBusca}> <img src={lupa}></img>Nova Busca</button>
      <br></br>

    </body>)

}
export default MusicPage;