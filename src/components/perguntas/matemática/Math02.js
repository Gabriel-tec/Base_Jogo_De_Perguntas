import React from 'react';

import {Link} from 'react-router-dom'

export default function Math01(prop){
    return(
        <>
            <Link to='/Pergunta01_Math'>
                <button>Voltar</button>
            </Link>

            <h1>Pergunta 02</h1>

            <Link to='/Pergunta03_Math'>
                <button>Resposta 01</button>
                <button onClick={() => prop.onClick()}>Resposta 02 correta</button>
                <button>Resposta 03</button>
            </Link>
        </>
    )
}