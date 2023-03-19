import React from "react";
import LogoLaranja from '../images/logolaranja.svg'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

function Logo(props) {
    
    const navigate = useNavigate();
    
    function Navegar() {
        const [url, setUrl] = useState();
    
        useEffect(() => {
          console.log(url);
          if (url != null) {
            navigate(url);
          }
    
        }, [url]);
    
        return [url, setUrl];
       }

       const [url, setUrl] = Navegar();
    /*function navegar(props) {
        //alert(props);
        navigate(props.url);
        navigate('/History');
    }*/

    return(<div>
        
    <img src={LogoLaranja}  alt="logo lendo músicas " className={props.aux} onClick={() => setUrl(props.url)}></img>

    </div>)
}

export default Logo;