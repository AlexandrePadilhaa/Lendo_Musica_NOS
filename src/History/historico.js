import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../App.css';


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

function Historico() {
  const navigate = useNavigate();

  function PesquisarNovamente() {
    const [musica, setMusica] = useState(0);

    useEffect(() => {
      //console.log(musica.art);
      //console.log(musica.nameSong);
      if (musica.art != null) {
        criaHistorico(musica);
        navigate('/MusicPage');
      }

    }, [musica]);

    return [musica, setMusica];
  }

  let historico = [];
  historico = JSON.parse(localStorage.getItem('historico'));


  const [musica, setMusica] = PesquisarNovamente();
  function exibirHistorico() {
    historico = JSON.parse(localStorage.getItem('historico'));
    let lista = historico
    if (lista != null) {
      lista = historico.map(function (element) {
        return <p id="elementosHistorico" onClick={() => setMusica(element)} >{element.art} - {element.nameSong}</p>;
      })
    } else {
      return <p id="elementosHistorico">Artista1- musica1</p>;
    }

    return lista;
  }

  function limparHistorico() {
    alert('limpando historico');
    localStorage.clear();
    exibirHistorico();
    render(historico);
  }

  return (
    <>
      <p id="limparHistorico" onClick={limparHistorico}>Limpar Historico X</p>

      {exibirHistorico()}

    </>
  );
}

export default Historico;