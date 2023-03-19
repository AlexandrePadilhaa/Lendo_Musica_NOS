import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lupa from '../images/Lupa.svg';
import logoLaranja from '../images/logolaranja.svg';
import './/styleSR.css'

function SearchResult() {
    
    let dadosArmazenados =  JSON.parse(localStorage.getItem('historico'));
    dadosArmazenados = dadosArmazenados[0];

    let texto = dadosArmazenados;
    const navigate = useNavigate();
    const novaBusca = ()=>{
        navigate('/');
    }
    const mostrarLetra = ()=>{
        navigate('/MusicPage');
    }
    
    return(
    <body className="SearchResult" >
    <h1 id="logo"><img src={logoLaranja}/></h1>

    <h2 id="titulo">Letra encontrada</h2>

    <div className= "resultado " onClick={mostrarLetra} >  <br></br><strong>{texto.art} </strong> <br></br>  {texto.nameSong}</div>

    <h2 id="frase" >Não encontrou oque procurava?</h2>

    <button id="botaoSR"  onClick={novaBusca}> <img src={lupa} /> Nova busca</button>
    </body>
    );
}
export default SearchResult;