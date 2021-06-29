import React from 'react';
import {Link} from 'react-router-dom'

export default function Portugues04(prop){
    return(
        <>
            <Link to='/Pergunta03_Port'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 04</h1>

            <Link to='/Pergunta05_Port'>
                <button>Resposta 01</button>
                <button onClick={() => prop.onClick()}>Resposta 02</button>
                <button>Resposta 03</button>
            </Link>
        </>
    )
}