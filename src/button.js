var resultadoCasa = 0;

export function incrementarVisitante(){
    var placarVisitante = document.getElementById('placar-visitante');
    var resultadoVisitante = 1;
    return placarVisitante.innerText = resultadoVisitante
}

export function incrementarCasa(){
    var placarCasa = document.getElementById('placar-casa');
    return placarCasa.innerText = resultadoCasa += 1;
}