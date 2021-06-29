import React from 'react';
import {Link} from 'react-router-dom'

export default function Portugues01(prop){
    return(
        <>
            <Link to='/Seleção'>
                <button>Voltar</button>
            </Link>
            

            <h1>Pergunta 01</h1>

            <Link to='/Pergunta02_Port'>
                <button>Resposta 01</button>
                <button onClick={() => prop.onClick()}>Resposta 02</button>
                <button>Resposta 03</button>
            </Link>

        </>
    )
}