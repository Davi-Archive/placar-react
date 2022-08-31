import './App.scss';
import React, { useState, useEffect } from 'react';
import AlteraPlacar from './components/AlteraPlacar';
import Placar from './components/Placar';
import BotaoComponent from './components/BotaoComponent';
import {
  Button,
  ListGroup,
  Container,
  Row,
  Col
} from 'react-bootstrap';



export default function Botao() {
  const [resultadoVisitante, setResultadoVisitante] = useState(0)
  const [resultadoCasa, setResultadoCasa] = useState(0)
  const [fator, setFator] = useState(true)
  const [message, setMessage] = useState("POSITIVO")
  const [sinal, setSinal] = useState("+")
  const [ativo, setAtivo] = useState(true)
  const [msgResul, setMsgResul] = useState(true)
  const [disabled, setDisabled] = useState(false)

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
    setMsgResul(false)
    setDisabled(true)
  }

  function incrementarVisitante(num: number) {
    fator ? (setResultadoVisitante(resultadoVisitante + num)) :
      (setResultadoVisitante(resultadoVisitante - num))
    setMsgResul(true)
    setDisabled(false)
  }

  function incrementarCasa(num: number) {
    fator ? (setResultadoCasa(resultadoCasa + num)) :
      (setResultadoCasa(resultadoCasa - num))
    setMsgResul(true)
    setDisabled(false)
  }
  return (
    <>
      <div className='wrapper'>
        <AlteraPlacar ativo={ativo} alteraPlacar={alteraPlacar} message={message}></AlteraPlacar>
        <div className="fundo-placar">
          <Container>
            <Row>
              <Col auto>
                <Placar nomePlacar="Placar Visitante" resultadoPlacar={resultadoVisitante}>
                  <ListGroup horizontal>
                    <ListGroup.Item>
                      <BotaoComponent tipo={'primary'} clique={() => incrementarVisitante(1)} sinal={sinal} numero={1} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <BotaoComponent tipo={'secondary'} clique={() => incrementarVisitante(2)} sinal={sinal} numero={2} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <BotaoComponent tipo={'warning'} clique={() => incrementarVisitante(3)} sinal={sinal} numero={3} />
                    </ListGroup.Item>
                  </ListGroup>
                </Placar>
              </Col>

              <Col auto>
                <Placar nomePlacar="Placar Casa" resultadoPlacar={resultadoCasa}>
                  <ListGroup horizontal>
                    <ListGroup.Item>
                      <BotaoComponent tipo={'primary'} clique={() => incrementarCasa(1)} sinal={sinal} numero={1} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <BotaoComponent tipo={'secondary'} clique={() => incrementarCasa(2)} sinal={sinal} numero={2} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <BotaoComponent tipo={'warning'} clique={() => incrementarCasa(3)} sinal={sinal} numero={3} />
                    </ListGroup.Item>
                  </ListGroup>
                </Placar>
              </Col>
            </Row>

          </Container>

        </div>
        <div className='d-grid gap-2'>
          <Button
            size="lg"
            variant={msgResul ? "info" : "secondary"}
            id='reseta-placar'
            onClick={resetarPlacar}
            disabled={disabled ? true : false} >
            Resetar
          </Button>
        </div>
      </div>
    </>
  );
}