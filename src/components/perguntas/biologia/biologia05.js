import React from 'react';

import {Link} from 'react-router-dom'

export default function Biologia05(prop){
    return(
        <>
            <Link to='/Pergunta04_Bio'>
                <button>Voltar</button>
            </Link>
            

            <h1>Pergunta 05</h1>

                <button onClick={() => prop.onClick()}>Resposta 01</button>
                <button>Resposta 02</button>
                <button>Resposta 03</button>
        </>
    )
}