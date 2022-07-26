import './App.css';

function App() {
  return (
    <body>
    <div className="fundo-placar">
       <div className='placar-visitante'>
        <div className="numero-visitante">
          <h1 id='placar-casa'>0</h1>
        </div>
        <div className='adicionar'>
        <button id='visitante-botao-1'>+ 1</button>
        <button id='visitante-botao-2'>+ 2</button>
        <button id='visitante-botao-3'>+ 3</button>
        </div>
         </div>
       <div className='placar-casa'>
        <div className="numero-casa">
          <h1 id='placar-casa'>1</h1>
        </div>
        <div className='adicionar'>
        <button id='casa-botao-1'>+ 1</button>
        <button id='casa-botao-2'>+ 2</button>
        <button id='casa-botao-3'>+ 3</button>
        </div>
        </div>
    </div>
    </body>
  );
}

export default App;
