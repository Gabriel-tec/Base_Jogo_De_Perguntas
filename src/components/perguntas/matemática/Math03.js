import React from 'react';

import {Link} from 'react-router-dom'

export default function Math03(prop){
    return(
        <>
            <Link to='/Pergunta02_Math'>
                <button>Voltar</button>
            </Link>
            
            <h1>Pergunta 03</h1>
            <Link to='/Pergunta04_Math'>
                <button>Resposta 01</button>
                <button>Resposta 02</button>
                <button onClick={() => prop.onClick()}>Resposta 03 correta</button> 
            </Link>

        </>
    )
}