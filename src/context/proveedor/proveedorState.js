import { useReducer } from "react";
import proveedorContext from "./proveedorContext";
import proveedorReducer from "./proveedorReducer";
import {
    SHOW_FORM_PROV,
    CLOSE_FORM_PROVEEDOR,
    SHOW_ERR_FORM_PROV,
    ADD_PROVEEDOR,
    SHOW_MENU_ACTION_PROV,
    CLOSE_MENU_ACTION_PROV,
    SELECT_PROVEEDOR,
    UPDATE_PROVEEDOR,
    CLEAR_SELECTED_PROV,
    DELETE_PROVEEDOR,
    GET_PROVEEDOR
} from '../../types'

const ProveedorState = (props) => {
    const proveedorInital = [{
        id_prov:"1",
        name_prov: 'Los compadres',
        phone_prov: '454 126 45 95',
        address_prov: 'Los Olivos 345, Marfil, Leon Gto'
    },
    {
        id_prov:"2",
        name_prov: 'Fabricante',
        phone_prov: '454 564 11 22',
        address_prov: 'Campesino 123, Hacienda, San Francisco del Rincon Gto'
    }];
    
    const initialState = {
        proveedores: [],
        formProv: false,
        alertDisplay: false,
        errorFormProv: false,
        menuActionProv: '',
        proveedorSelected: null
    }
    
    const [state, dispatch] = useReducer(proveedorReducer, initialState);

    const obtenerProveedor = () =>{
        dispatch({
            type: GET_PROVEEDOR,
            payload: proveedorInital
        })
    }

    const showFormProv = () => {
        dispatch({
            type: SHOW_FORM_PROV
        })
    }
    
    const closeFormProv = () => {
        dispatch({
            type: CLOSE_FORM_PROVEEDOR
        })
    }
    const showErrorFormProv = () => {
        dispatch({
            type: SHOW_ERR_FORM_PROV
        })
    }

    const saveProv = (proveedor) =>{
        dispatch({
            type: ADD_PROVEEDOR,
            payload: proveedor
        })
    }
    const showMenuActionProv = (id) => {
        dispatch({
            type: SHOW_MENU_ACTION_PROV,
            payload: id
        })
    }
    const closeMenuActionProv = (id) => {
        dispatch({
            type: CLOSE_MENU_ACTION_PROV,
            payload: id
        })
    }
    const selectProveedor = (itemProv) =>{
        dispatch({
            type: SELECT_PROVEEDOR,
            payload: itemProv
        })
    }
    const updateProv = (itemProv) => {
        dispatch({
            type: UPDATE_PROVEEDOR,
            payload: itemProv
        })
    }
    const clearSelectProv = () =>{
        dispatch({
            type: CLEAR_SELECTED_PROV
        })
    }
    const deleteProveedor = (provItem) => {
        dispatch({
            type: DELETE_PROVEEDOR,
            payload: provItem
        })
    }


    return (
        <proveedorContext.Provider
            value={{
                proveedores: state.proveedores,
                formProv: state.formProv,
                alertDisplay: state.alertDisplay,
                errorFormProv: state.errorFormProv,
                menuActionProv: state.menuActionProv,
                proveedorSelected: state.proveedorSelected,
                obtenerProveedor,
                closeFormProv,
                showFormProv,
                showErrorFormProv,
                saveProv,
                showMenuActionProv,
                closeMenuActionProv,
                selectProveedor,
                updateProv,
                clearSelectProv,
                deleteProveedor
            }}
        >
            {props.children}
        </proveedorContext.Provider>
    );
}
 
export default ProveedorState;