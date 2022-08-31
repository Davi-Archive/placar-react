import { Button } from "react-bootstrap";
import '../App.scss'

interface AlteraProp {
    alteraPlacar: any,
    ativo: boolean,
    message: string;

}
function AlteraPlacar({ alteraPlacar, ativo, message }: AlteraProp) {
    return (
        <div className='d-grid gap-2'>
            <Button
                size="lg"
                variant={ativo ? 'success' : 'danger'}
                onClick={alteraPlacar}
                id='altera-placar'
            >
                {message}
            </Button>
        </div>
    )
}
export default AlteraPlacar;