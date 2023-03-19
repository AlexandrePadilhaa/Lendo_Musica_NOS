import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import lupa from '../images/Lupa.svg'
import '../App.css';

function Formulario() {
  async function obterDados(singer, song) {
    try {
      const resposta = await fetch(`https://api.vagalume.com.br/search.php?apikey={660a4395f992ff67786584e238f501aa}&art=${singer}&mus=${song}`)
      const dados = await resposta.json();
      console.log(dados)
      validacaoDados(dados)
      return dados;
    } catch (erro) {
      console.log("ERRO:", erro)
    }
  }

  function handleSubmit() {
    let imputSinger = document.getElementById("nomeArtista")
    let imputSong = document.getElementById("nomeMusica")
    let singer = imputSinger.value;
    let song = imputSong.value;
    obterDados(singer, song)
  }

  function criaHistorico(objMusica) {
    let arrayObj = [];
    arrayObj.push(objMusica);

    let arrayLocal = [];
    arrayLocal = JSON.parse(localStorage.getItem('historico'));
    if (arrayLocal) {
      if (arrayLocal.length < 9) {
        for (let index = 0; index < (arrayLocal.length); index++) {
          arrayObj.push(arrayLocal[index]);
        }
      } else {
        for (let index = 0; index < (9); index++) {
          arrayObj.push(arrayLocal[index]);
        }
      }
    }
    localStorage.clear();
    localStorage.setItem('historico', JSON.stringify(arrayObj));
  }

  const navigate = useNavigate();
  function validacaoDados(dados) {
    if (dados.type == 'exact') {
      const ObjectSong = {
        art: dados.art.name,
        nameSong: dados.mus[0].name,
        Song: dados.mus[0].text
      }

      criaHistorico(ObjectSong);
      navigate('/SearchResult');
    }
    else if (dados.type == ('notfound' || 'song_notfound')) {
      navigate('/notFound');
    } else {
      navigate('/notFound');
    }
  }


  return (

    <form className='homeFormulario'>

      <label for="nomeArtista">Artista</label><br></br>

      <input type="text" id="nomeArtista" placeholder="Insira o nome do artista"></input>
      
      <br></br>

      <label for="nomeMusica">Música</label><br></br>

      <input type="text" id="nomeMusica" placeholder="Insira o nome da música"></input>


      <button type="button" id="botaoBuscar" onClick={() => handleSubmit()}> <img src={lupa} /> Buscar</button>
    </form>

  )
}

export default Formulario;