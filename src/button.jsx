
import './App.css';
import React from 'react';

let resultadoCasa = document.getElementById('placar-visitante').innerText = '1';
let resultadoVisitante = document.getElementById('placar-casa').innerText = '1';



    function incrementarVisitante1() {
        return resultadoVisitante += 1;
    }
    function incrementarVisitante2() {
        return resultadoVisitante += 2;
    }
    function incrementarVisitante3() {
        return resultadoVisitante += 3;
    }

    function incrementarCasa1() {
        return resultadoCasa += 1;
    }
    function incrementarCasa2() {

        return resultadoCasa += 2;
    }
    function incrementarCasa3() {
        return resultadoCasa += 3;
    }



export default function Botao(){

    return(
        <div className="fundo-placar">
       <div className='placar-visitante'>
        <h2>Visitante</h2>
        <div className="numero-visitante">
          <h1 id='placar-visitante'>{resultadoVisitante}</h1>
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
          <h1 id='placar-casa'>{resultadoVisitante}</h1>

        </div>

        <div className='adicionar'>
        <button id='casa-botao-1' onClick={incrementarCasa1}>+ 1</button>
        <button id='casa-botao-2' onClick={incrementarCasa2}>+ 2</button>
        <button id='casa-botao-3' onClick={incrementarCasa3}>+ 3</button>
        </div>
        </div>
    </div>);
}
