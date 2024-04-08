
import { useReducer } from "react";
import vendedorContext from "./vendedorContext";
import vendedorReducer from "./vendedorReducer";
import {
    SHOW_FORM_VENDEDOR,
    CLOSE_FORM_VENDEDOR,
    SHOW_ERR_FORM_VENDEDOR,
    ADD_VENDEDOR,
    SHOW_MENU_ACTION_VENDEDOR,
    CLOSE_MENU_ACTION_VENDEDOR,
    SELECT_VENDEDOR,
    UPDATE_VENDEDOR,
    CLEAR_SELECTED_VENDEDOR,
    DELETE_VENDEDOR,
    GET_VENDEDOR
} from '../../types'

const VendedorState = (props) => {
    const vendedorInital = [{
        id_vendedor:"1",
        name_vendedor: 'Raul Martinez',
        phone_vendedor: '454 126 45 95',
        email_vendedor: 'raul.martinez@hotmail.com',
        status_vendedor: 'Activo'
    },
    {
        id_vendedor:"2",
        name_vendedor: 'Monica Perez',
        phone_vendedor: '454 564 11 22',
        email_vendedor: 'raul.martinez@hotmail.com',
        status_vendedor: 'Activo'
    }];

    const initialState = {
        vendedores: [],
        formVendedor: false,
        alertDisplay: false,
        errorFormVendedor: false,
        menuActionVendedor: '',
        vendedorSelected: null
    }
    
    const [state, dispatch] = useReducer(vendedorReducer, initialState);

    
    const obtenerVendedor = () =>{
        dispatch({
            type: GET_VENDEDOR,
            payload: vendedorInital
        })
    }

    const showFormVendedor = () => {
        dispatch({
            type: SHOW_FORM_VENDEDOR
        })
    }
    
    const closeFormVendedor = () => {
        dispatch({
            type: CLOSE_FORM_VENDEDOR
        })
    }
    const showErrorFormVendedor = () => {
        dispatch({
            type: SHOW_ERR_FORM_VENDEDOR
        })
    }

    const saveVendedor = (vendedor) =>{
        dispatch({
            type: ADD_VENDEDOR,
            payload: vendedor
        })
    }
    const showMenuActionVendedor = (id) => {
        dispatch({
            type: SHOW_MENU_ACTION_VENDEDOR,
            payload: id
        })
    }
    const closeMenuActionVendedor = (id) => {
        dispatch({
            type: CLOSE_MENU_ACTION_VENDEDOR,
            payload: id
        })
    }
    const selectVendedor = (itemVendedor) =>{
        dispatch({
            type: SELECT_VENDEDOR,
            payload: itemVendedor
        })
    }
    const updateVendedor = (itemVendedor) => {
        dispatch({
            type: UPDATE_VENDEDOR,
            payload: itemVendedor
        })
    }
    const clearSelectVendedor = () =>{
        dispatch({
            type: CLEAR_SELECTED_VENDEDOR
        })
    }
    const deleteVendedor = (vendedorItem) => {
        dispatch({
            type: DELETE_VENDEDOR,
            payload: vendedorItem
        })
    }

    return (
        <vendedorContext.Provider
            value={{
                vendedores: state.vendedores,
                formVendedor: state.formVendedor,
                alertDisplay: state.alertDisplay,
                errorFormVendedor: state.errorFormVendedor,
                menuActionVendedor: state.menuActionVendedor,
                vendedorSelected: state.vendedorSelected,
                obtenerVendedor,
                closeFormVendedor,
                showFormVendedor,
                showErrorFormVendedor,
                saveVendedor,
                showMenuActionVendedor,
                closeMenuActionVendedor,
                selectVendedor,
                updateVendedor,
                clearSelectVendedor,
                deleteVendedor
            }}
        >
            {props.children}
        </vendedorContext.Provider>
        
    );
}
 
export default VendedorState;