import React from 'react';

import {Link} from 'react-router-dom'

export default function Selecao(prop){
    return(
        <>
            <Link to='/'>
                <button>Volta</button>
            </Link>
            

            <h1>Seleção</h1>
            
            <Link to='/Pergunta01_Math'>
                <button  onClick={() => prop.onClick()}>Matemática</button>
            </Link>

            <Link to='/Pergunta01_Port'>
                <button onClick={() => prop.onClick()}>Português</button>
            </Link>
            
            <Link to='/Pergunta01_Bio'>
                <button onClick={() => prop.onClick()}>Biologia</button>
            </Link>
            
        </>
    )
}