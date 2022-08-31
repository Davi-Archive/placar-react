interface PlacarProps {
    resultadoCasa: number;
    children: JSX.Element|JSX.Element[];
}
function PlacarCasa({ resultadoCasa, children}: PlacarProps) {
    return (
        <>
            <div className='placar-casa'>
                <h2>Casa</h2>
                <div className="numero-casa">
                    <h1 id='placar-casa'>{resultadoCasa}</h1>
                </div>
                <div className='adicionar'>
                    {children}
                </div>
            </div>
      </>
    )
}

export default PlacarCasa;