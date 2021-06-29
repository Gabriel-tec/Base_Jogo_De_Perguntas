import React from 'react';

import {Link} from 'react-router-dom'

export default function Math04(prop){
    return(
        <>
            <Link to='/Pergunta03_Math'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 04</h1>
            <Link to='/Pergunta05_Math'>
                <button>Resposta 01</button>
                <button>Resposta 02</button>
                <button onClick={() => prop.onClick()}>Resposta 03 correta</button>
            </Link>
        </>
    )
}