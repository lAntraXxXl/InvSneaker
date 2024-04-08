import { useReducer } from "react";
import modalsReducer from "./modalsReducer";
import modalsContext from "./modalsContext";
import {
    SHOW_MODAL,
    HIDE_MODAL,
    YES_DELETE,
    DELETE_CLEAR,
    SHOW_ALERT,
    HIDE_ALERT
} from '../../types'


const ModalsState = (props) => {
    const initialState = {
        modal: false,
        deleteItem: false,
        alerta: null
    };

    const [state, dispatch] = useReducer(modalsReducer, initialState);

    const showModal = () => {
        dispatch({
            type: SHOW_MODAL
        })
    }

    const hideModal = () => {
        dispatch({
            type:HIDE_MODAL
        })
    }

    const yesDelete = () => {
        dispatch({
            type:YES_DELETE
        })
    }
    const successDelete = () =>{
        dispatch({
            type: DELETE_CLEAR
        })
    }

    const showAlerta = (titulo, msg) => {
        dispatch({
            type: SHOW_ALERT,
            payload:{
                titulo,
                msg
            }
        });

        //se limpia la alerta despues de 3 segundos
        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        },3000);
    }

    return (
        <modalsContext.Provider
            value={{
                modal: state.modal,
                deleteItem: state.deleteItem,
                alerta: state.alerta,
                showModal,
                hideModal,
                yesDelete,
                successDelete,
                showAlerta
            }}
        >
            {props.children}
        </modalsContext.Provider>
    );
}
 
export default ModalsState;