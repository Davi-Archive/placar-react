import './App.css';
import {incrementarCasa1,
        incrementarCasa2,
        incrementarCasa3,
        incrementarVisitante1,
        incrementarVisitante2,
        incrementarVisitante3} from './button.js'


function App() {
  return (
    <body>
    <div className="fundo-placar">
       <div className='placar-visitante'>
        <div className="numero-visitante">
          <h1 id='placar-vsitante'>0</h1>
        </div>
        <div className='adicionar'>
        <button id='visitante-botao-1' >+ 1</button>
        <button id='visitante-botao-2'>+ 2</button>
        <button id='visitante-botao-3'>+ 3</button>
        </div>
         </div>
       <div className='placar-casa'>
        <div className="numero-casa">
          <h1 id='placar-casa'>0</h1>
        </div>
        <div className='adicionar'>
        <button id='casa-botao-1' onClick={incrementarCasa1}>+ 1</button>
        <button id='casa-botao-2'>+ 2</button>
        <button id='casa-botao-3'>+ 3</button>
        </div>
        </div>
    </div>
    </body>
  );
}

export default App;
