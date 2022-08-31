import Card from 'react-bootstrap/card'

interface PlacarProps{
resultadoPlacar: number;
nomePlacar: string;
children: JSX.Element | JSX.Element[];
}

function Placar({nomePlacar, resultadoPlacar, children}: PlacarProps){

    return(
        <>
          <Card className="m-4 xl" style={{ width: '19rem'}}>
                <Card.Body>
                    <Card.Title className='xxl'>{nomePlacar}</Card.Title>
                    <Card.Subtitle className="mb-2"><h1> {resultadoPlacar} </h1></Card.Subtitle>
                    <Card.Text>
                        {children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
     )
}

export default Placar;