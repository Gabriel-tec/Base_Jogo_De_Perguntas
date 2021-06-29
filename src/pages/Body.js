
import React , {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Inicio from './inicio';
import Selecao from './seleção';

//--------------MATEMÁTICA-------------------//

import Math01 from '../components/perguntas/matemática/Math01';
import Math02 from '../components/perguntas/matemática/Math02';
import Math03 from '../components/perguntas/matemática/Math03';
import Math04 from '../components/perguntas/matemática/Math04';
import Math05 from '../components/perguntas/matemática/Math05';

//--------------PORTUGUÊS-------------------//

import Portugues01 from '../components/perguntas/português/portugues01';
import Portugues02 from '../components/perguntas/português/portugues02';
import Portugues03 from '../components/perguntas/português/portugues03';
import Portugues04 from '../components/perguntas/português/portugues04';
import Portugues05 from '../components/perguntas/português/portugues05';

//--------------BIOLOGIA-------------------//

import Biologia01 from '../components/perguntas/biologia/biologia01';
import Biologia02 from '../components/perguntas/biologia/biologia02';
import Biologia03 from '../components/perguntas/biologia/biologia03';
import Biologia04 from '../components/perguntas/biologia/biologia04';
import Biologia05 from '../components/perguntas/biologia/biologia05';

export default function Body() {

    const [pontos , setPontos] = useState(0)

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    
                    <Route path='/' exact>
                        <Inicio/>
                    </Route>

                    <Route path='/Seleção'>
                        <Selecao onClick={() => setPontos(0)}/>
                    </Route>

                    <Route path='/Pergunta01_Math'>
                        <Math01 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta02_Math'>
                        <Math02 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta03_Math'>
                        <Math03 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta04_Math'>
                        <Math04 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta05_Math'>
                        <Math05 onClick={() => setPontos(pontos + 1)}/>
                    </Route>

                    <Route path='/Pergunta01_Port'>
                        <Portugues01 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta02_Port'>
                        <Portugues02 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta03_Port'>
                        <Portugues03 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta04_Port'>
                        <Portugues04 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta05_Port'>
                        <Portugues05 onClick={() => setPontos(pontos + 1)}/>
                    </Route>

                    <Route path='/Pergunta01_Bio'>
                        <Biologia01 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta02_Bio'>
                        <Biologia02 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta03_Bio'>
                        <Biologia03 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta04_Bio'>
                        <Biologia04 onClick={() => setPontos(pontos + 1)}/>
                    </Route>
                    <Route path='/Pergunta05_Bio'>
                        <Biologia05 onClick={() => setPontos(pontos + 1)}/>
                    </Route>

                </Switch>
            </BrowserRouter>

            <h3>{pontos}</h3>
        </div>
    )
};




