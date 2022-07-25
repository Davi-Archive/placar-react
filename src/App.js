import './App.css';

function App() {
  return (
    <body>
    <div className="fundo-placar">
       <div className='placar-visitante'>
        <div className="numero-visitante">
          <h1>0</h1>
        </div>
        <div className='adicionar'>
        <button>+ 1</button>
        <button>+ 2</button>
        <button>+ 3</button>
        </div>
         </div>
       <div className='placar-casa'>
        <div className="numero-casa">
          <h1>1</h1>
        </div>
        <div className='adicionar'>
        <button>+ 1</button>
        <button>+ 2</button>
        <button>+ 3</button>
        </div>
        </div>
    </div>
    </body>
  );
}

export default App;
