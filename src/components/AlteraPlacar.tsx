
interface AlteraProp{
alteraPlacar: any,
ativo: boolean,
message: string;

}
function AlteraPlacar({alteraPlacar, ativo, message}:AlteraProp){
    return(
        <div className='alterador-placar'>
        <button
        id='altera-placar'
        onClick={alteraPlacar}
        style={{backgroundColor: ativo ? '#b94545' : '#00ffff'}}
        >{message}</button>
      </div>
    )
}
export default AlteraPlacar;