interface PlacarProps{
resultadoVisitante: number;
children: JSX.Element|JSX.Element[];
}

function PlacarVisitante({resultadoVisitante, children}: PlacarProps){

    return(
        <>
            <div className="fundo-placar">
        <div className='placar-visitante'>
          <h2>Visitante</h2>
          <div className="numero-visitante">
            <h1 id='placar-visitante'>{resultadoVisitante}</h1>
          </div>
          <div className='adicionar'></div>
          {children}
          </div>
        </div>
        </>
     )
}

export default PlacarVisitante;