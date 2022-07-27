import { placarCasa,placarVisitante } from './App.js'

let resultadoCasa = 0;
let resultadoVisitante = 0;

export function incrementarVisitante1() {
    return placarVisitante.innerHTML += 1;
}
export function incrementarVisitante2() {
    return placarVisitante.innerHTML = resultadoVisitante += 2;
}
export function incrementarVisitante3() {
    return placarVisitante.innerHTML = resultadoVisitante += 3;
}

export function incrementarCasa1() {
    return placarCasa.innerHTML = resultadoCasa += 1;
}
export function incrementarCasa2() {
    return placarCasa.innerHTML = resultadoCasa += 2;
}
export function incrementarCasa3() {
    return placarCasa.innerHTML = resultadoCasa += 3;
}