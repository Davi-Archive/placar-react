import './App.css';
import {incrementarCasa1,
        incrementarCasa2,
        incrementarCasa3,
        incrementarVisitante1,
        incrementarVisitante2,
        incrementarVisitante3
                 } from './button.js'

export var placarCasa = document.getElementById('placar-casa');
export var placarVisitante = document.getElementById('placar-visitante');


function App() {
  return (
    <body>
    <div className="fundo-placar">
       <div className='placar-visitante'>
        <h2>Visitante</h2>
        <div className="numero-visitante">
          <span id='placar-visitante'><h1>0</h1></span>
        </div>
        <div className='adicionar'>
        <button id='visitante-botao-1' onClick={incrementarVisitante1}>+ 1</button>
        <button id='visitante-botao-2' onClick={incrementarVisitante2}>+ 2</button>
        <button id='visitante-botao-3' onClick={incrementarVisitante3}>+ 3</button>
        </div>
         </div>
       <div className='placar-casa'>
       <h2>Casa</h2>
        <div className="numero-casa">
          <span id='placar-casa'><h1>0</h1></span>
        </div>
        <div className='adicionar'>
        <button id='casa-botao-1' onClick={incrementarCasa1}>+ 1</button>
        <button id='casa-botao-2' onClick={incrementarCasa2}>+ 2</button>
        <button id='casa-botao-3' onClick={incrementarCasa3}>+ 3</button>
        </div>
        </div>
    </div>
    </body>
  );
}

export default App;