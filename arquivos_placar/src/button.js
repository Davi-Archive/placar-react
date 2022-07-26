// placar <h1>
var placarVisitante = document.getElementById('placar-visitante')
var placarCasa = document.getElementById('placar-casa')
var resultadoCasa = 0;
var resultadoVisitante = 0;



export function incrementarCasa1(){
    resultadoCasa += 1
    return placarCasa.innerText = resultadoCasa;
}
export function incrementarCasa2(){
    resultadoCasa += 2
    return placarCasa.innerText = resultadoCasa;
}
export function incrementarCasa3(){
    resultadoCasa += 3
    return placarCasa.innerText = resultadoCasa;
}
export function incrementarVisitante1(){
    resultadoVisitante += 1
    return placarVisitante.innerText = resultadoVisitante;
}
export function incrementarVisitante2(){
    incrementarVisitante1()
    incrementarVisitante1()
}
export function incrementarVisitante3(){
    incrementarVisitante1()
    incrementarVisitante1()
    incrementarVisitante1()
}
