import React from "react";
import LogoLaranja from '../images/logolaranja.svg'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function Logo(props) {
    
    const navigate = useNavigate();
    function Navegar() {
        const [url, setUrl] = useState();
    
        useEffect(() => {
          //console.log(url);
          if (url != null) {
            navigate(url);
          }
    
        }, [url]);
    
        return [url, setUrl];
       }

       const [url, setUrl] = Navegar();

    return(<div>
        
    <img src={LogoLaranja}  alt="logo lendo músicas " id={props.ident} onClick={() => setUrl(props.url)}></img>

    </div>)
}

export default Logo;