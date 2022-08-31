import './App.scss';
import React, { useState, useEffect } from 'react';
import AlteraPlacar from './components/AlteraPlacar';
import PlacarVisitante from './components/Placarvisitante';
import PlacarCasa from './components/Placarcasa';



export default function Botao() {
  const [resultadoVisitante, setResultadoVisitante] = useState(0)
  const [resultadoCasa, setResultadoCasa] = useState(0)
  const [fator, setFator] = useState(true)
  const [message, setMessage] = useState("POSITIVO")
  const [sinal, setSinal] = useState("+")
  const [ativo, setAtivo] = useState(true)

  useEffect(() => {
    switch (message) {
      case "Negativo":
        setMessage("NEGATIVO");
        setAtivo(!ativo);
        break;
      case "Positivo":
        setMessage("POSITIVO");
        setAtivo(!ativo);
        break;
      default:
        break;
    }
  }, [message, ativo]);

  useEffect(() => {
    switch (sinal) {
      case "-":

        setSinal("-");
        break;
      case "+":
        setSinal("+");
        break;
      default:
        break;
    }
  }, [sinal]);

  function alteraPlacar() {
    if (fator) {
      setFator(false)
      setMessage('Negativo')
      setSinal('-')
    } else {
      setFator(true)
      setMessage('Positivo')
      setSinal('+')
    }
  }

  function resetarPlacar() {
    setResultadoCasa(0)
    setResultadoVisitante(0)
  }

  function incrementarVisitante(num: number) {
    fator ? (setResultadoVisitante(resultadoVisitante + num)) :
      (setResultadoVisitante(resultadoVisitante - num))
  }

  function incrementarCasa(num: number) {
    fator ? (setResultadoCasa(resultadoCasa + num)) :
      (setResultadoCasa(resultadoCasa - num))
  }
  return (
    <>
      <div className='wrapper'>
        <AlteraPlacar ativo={ativo} alteraPlacar={alteraPlacar} message={message}></AlteraPlacar>
        <div className="fundo-placar">
          <PlacarVisitante resultadoVisitante={resultadoVisitante}>
            <button className="placar-botoes-cor" id='visitante-botao-1' onClick={() => incrementarVisitante(1)}>{sinal} 1</button>
            <button className="placar-botoes-cor" id='visitante-botao-2' onClick={() => incrementarVisitante(2)}>{sinal} 2</button>
            <button className="placar-botoes-cor" id='visitante-botao-3' onClick={() => incrementarVisitante(3)}>{sinal} 3</button>
          </PlacarVisitante>
          <PlacarCasa resultadoCasa={resultadoCasa}>
            <button className="placar-botoes-cor" id='casa-botao-1' onClick={() => incrementarCasa(1)}>{sinal} 1</button>
            <button className="placar-botoes-cor" id='casa-botao-2' onClick={() => incrementarCasa(2)}>{sinal} 2</button>
            <button className="placar-botoes-cor" id='casa-botao-3' onClick={() => incrementarCasa(3)}>{sinal} 3</button>
          </PlacarCasa>
        </div>
        <div className='resetador-placar'>
          <button id='reseta-placar' onClick={resetarPlacar}>Resetar</button>
        </div>
      </div>
    </>
  );
}