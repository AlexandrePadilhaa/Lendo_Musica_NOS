import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Botao from '../componentes/Botao';
import LogoLaranja from '../componentes/Logo.js'
import './/styleSR.css'

function SearchResult() {
    
    let dadosArmazenados =  JSON.parse(localStorage.getItem('historico'));
    dadosArmazenados = dadosArmazenados[0];

    let texto = dadosArmazenados;
    const navigate = useNavigate();
    const mostrarLetra = ()=>{
        navigate('/MusicPage');
    }
    
    return(
    <body className="SearchResult" >
    <LogoLaranja url='/' ident='logo' />

    <h2 id="titulo">Letra encontrada</h2>

    <div className= "resultado " onClick={mostrarLetra} >  <br></br><strong>{texto.art} </strong> <br></br>  {texto.nameSong}</div>

    <h2 id="frase" >Não encontrou oque procurava?</h2>

    
    <Botao ident='botaoSR' texto = 'Nova Busca'/>
    </body>
    );
}
export default SearchResult;