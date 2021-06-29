import React from 'react';

import {Link} from 'react-router-dom'

export default function Math05(prop){
    return(
        <>
            <Link to='/Pergunta04_Math'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 05</h1>

            <button onClick={() => prop.onClick()}>Resposta 01 correta</button>
            <button>Resposta 02</button>
            <button>Resposta 03 correta</button>
        </>
    )
}