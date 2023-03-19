import React from "react";
import lupa from "../images/Lupa.svg"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';


function Botao(props) {

    const navigate = useNavigate();
    function Navegar() {
        const [url, setUrl] = useState();
    
        useEffect(() => {
          if (url != null) {
            navigate(url);
          }
    
        }, [url]);
    
        return [url, setUrl];
       }

       const [url, setUrl] = Navegar();

    return(<div>
        
        <button id={props.ident} onClick={() => setUrl('/')} > <img src={lupa}  /> {props.texto}</button>
       
        </div>)
   
}

export default Botao;