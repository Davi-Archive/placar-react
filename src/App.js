import './App.css';
import { incrementarCasa , incrementarVisitante } from './button.js'

// placar <h1>
// let placarVisitante = document.getElementById('placar-visitante');
// let placarCasa = document.getElementById('placar-casa');
// let resultadoCasa = 1;
// let resultadoVisitante = 1;

function App() {
  return (
    <body>
    <div className="fundo-placar">
       <div className='placar-visitante'>
        <div className="numero-visitante">
          <h1 id='placar-visitante'>{count}</h1>
        </div>
        <div className='adicionar'>
        <button id='visitante-botao-1' onClick={() => setCount(1)} >+ 1</button>
        <button id='visitante-botao-2' onClick={incrementarVisitante}>+ 2</button>
        <button id='visitante-botao-3' onClick={incrementarVisitante}>+ 3</button>
        </div>
         </div>
       <div className='placar-casa'>
        <div className="numero-casa">
          <h1 id='placar-casa'>0</h1>
        </div>
        <div className='adicionar'>
        <button id='casa-botao-1' onClick={incrementarCasa}>+ 1</button>
        <button id='casa-botao-2' onClick={incrementarCasa}>+ 2</button>
        <button id='casa-botao-3' onClick={incrementarCasa}>+ 3</button>
        </div>
        </div>
    </div>
    </body>
  );
}

export default App;