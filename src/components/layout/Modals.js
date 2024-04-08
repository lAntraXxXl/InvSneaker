import './modals.css'
import modalsContext from '../../context/modals/modalsContext';
import { useContext } from 'react';

const Modals = ({deleteItemInv}) => {

    const modalContext = useContext(modalsContext);

    const {hideModal} = modalContext;


    return (
        <div className="containerModal">
            <div className="modal">
                <div className="modal_header">
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72ZM120 104a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"/></svg></span>
                    <h3>Eliminar</h3>
                </div>
                <div className="modal_description">
                    <p>¿Seguro que deseas eliminar este registro permanentemente?</p>
                </div>
                <div className="modal_actions">
                    <span className='btn cancel' onClick={hideModal}>Cancelar</span>
                    <span className='btn delete' onClick={deleteItemInv}>Aceptar</span>
                </div>
            </div>
        </div>
    );
}
 
export default Modals;