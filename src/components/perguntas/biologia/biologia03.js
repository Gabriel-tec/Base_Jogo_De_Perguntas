
import React from 'react';

import {Link} from 'react-router-dom'

export default function Biologia03(prop){
    return(
        <>
            <Link to='/Pergunta02_Bio'>
                <button>Voltar</button>
            </Link>
            

            <h1>Pergunta 03</h1>

            <Link to='/Pergunta04_Bio'>
                <button onClick={() => prop.onClick()}>Resposta 01</button>
                <button>Resposta 02</button>
                <button>Resposta 03</button>
            </Link>
        </>
    )
}