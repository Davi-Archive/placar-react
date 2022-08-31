import Button from "react-bootstrap/Button";

interface BotaoType{
    tipo: string;
    clique: any;
    sinal: string;
    numero: number;
}

function BotaoComponent({tipo, clique, sinal, numero}:BotaoType){
    return (
     <Button size="lg" variant={tipo} onClick={clique}>{sinal}{numero}</Button>
    )
}

export default BotaoComponent;