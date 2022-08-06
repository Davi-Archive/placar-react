import './App.css';
import React, { useState, useEffect } from 'react';



export default function Botao() {
  const [resultadoVisitante, setResultadoVisitante] = useState(0)
  const [resultadoCasa, setResultadoCasa] = useState(0)
  const [fator, setFator] = useState(true)
  const [message, setMessage] = useState("POSITIVO")

  useEffect(() => {
    switch (message) {
      case "Negativo":
        setMessage("NEGATIVO");
        document.getElementById('altera-placar').style.backgroundColor = '#b94545';
        break;
      case "Positivo":
        setMessage("POSITIVO");
        document.getElementById('altera-placar').style.backgroundColor = '#00ffff';
        break;
      default:
        break;
    }
  }, [message]);

  function alteraPlacar() {
    if(fator){
      setFator(false)
      setMessage('Negativo')
    } else {
      setFator(true)
      setMessage('Positivo')
    }
  }

  function resetarPlacar (){
    setResultadoCasa(0)
    setResultadoVisitante(0)
  }

  function incrementarVisitante(num) {
    fator ? (setResultadoVisitante(resultadoVisitante + num)) :
      (setResultadoVisitante(resultadoVisitante - num))
  }

  function incrementarCasa(num) {
    fator ? (setResultadoCasa(resultadoCasa + num)) :
      (setResultadoCasa(resultadoCasa - num))
  }
  return (
    <div className='wrapper'>
      <div className='alterador-placar'>
        <button id='altera-placar' onClick={alteraPlacar}>{message}</button>
      </div>
      <div className="fundo-placar">
        <div className='placar-visitante'>
          <h2>Visitante</h2>
          <div className="numero-visitante">
            <h1 id='placar-visitante'>{resultadoVisitante}</h1>
          </div>
          <div className='adicionar'>
            <button id='visitante-botao-1' onClick={() => incrementarVisitante(1)}>+ 1</button>
            <button id='visitante-botao-2' onClick={() => incrementarVisitante(2)}>+ 2</button>
            <button id='visitante-botao-3' onClick={() => incrementarVisitante(3)}>+ 3</button>
          </div>
        </div>

        <div className='placar-casa'>
          <h2>Casa</h2>
          <div className="numero-casa">
            <h1 id='placar-casa'>{resultadoCasa}</h1>
          </div>
          <div className='adicionar'>
            <button id='casa-botao-1' onClick={() => incrementarCasa(1)}>+ 1</button>
            <button id='casa-botao-2' onClick={() => incrementarCasa(2)}>+ 2</button>
            <button id='casa-botao-3' onClick={() => incrementarCasa(3)}>+ 3</button>
          </div>
        </div>
      </div>
      <div className='resetador-placar'>
        <button id='reseta-placar' onClick={resetarPlacar}>Resetar</button>
      </div>
    </div>
  );
}
