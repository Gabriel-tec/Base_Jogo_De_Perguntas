
import React from 'react';

import {Link} from 'react-router-dom'

export default function Biologia01(prop){
    return(
        <>
            <Link to='/Seleção'>
                <button>Voltar</button>
            </Link>
            

            <h1>Pergunta 01</h1>

            <Link to='/Pergunta02_Bio'>
                <button onClick={() => prop.onClick()}>Resposta 01</button>
                <button>Resposta 02</button>
                <button>Resposta 03</button>
            </Link>
        </>
    )
}