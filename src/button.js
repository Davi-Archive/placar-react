var resultadoCasa = 0;
var resultadoVisitante = 0;
var placarVisitante = document.getElementById('placar-visitante');
var placarCasa = document.getElementById('placar-casa');

export function incrementarVisitante1(){
    resultadoVisitante += 1;
    return placarVisitante.innerText = resultadoVisitante
}
export function incrementarVisitante2(){
    resultadoVisitante += 2;
    return placarVisitante.innerText = resultadoVisitante
}
export function incrementarVisitante3(){
    resultadoVisitante += 3;
    return placarVisitante.innerText = resultadoVisitante
}

export function incrementarCasa1(){
    resultadoCasa += 1;
    return placarCasa.innerText = resultadoCasa;
}
export function incrementarCasa2(){
    resultadoCasa += 1;
    return placarCasa.innerText = resultadoCasa;
}
export function incrementarCasa3(){
    resultadoCasa += 1;
    return placarCasa.innerText = resultadoCasa;
}