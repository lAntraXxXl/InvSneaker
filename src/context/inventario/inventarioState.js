import React, { useReducer } from 'react';
import inventarioContext from './inventarioContext'
import inventarioReducer from './inventarioReducer'
import {
    GET_INVENTARIO,
    SHOW_FORM_INV,
    ADD_SELECT_TALLAS,
    UPDATE_SELECT_TALLAS,
    REMOVE_SELECT_TALLAS,
    CLOSE_FORM_INVENTARIO,
    ADD_MOVIMIENTO_INVENTARIO,
    SEARCH_DATA_PRODUCTO,
    SHOW_ERROR_FORM_INV,
    SHOW_LIST_TALLAS,
    CLOSE_CODE_FORM,
    SHOW_CODE_FORM,
    GET_MOVIMIENTO_INV,
    UPDATE_MOVIMIENTO_INVENTARIO,
    SHOW_TALLAS_TO_UPDATE,
    DELETE_MOVIMIENTO_INVENTARIO,
    GET_STOCK
} from '../../types'


const InventarioState = (props) => {

    const arrayInvInitial = [
        {'id_inv': '1','owner_inv':'Raul','marca_inv': 'Nike','modelo_inv':'Air Jordan 2','talla_inv': '25.5 mx','color_inv': 'Rojo / Negro','proveedor_inv': 'Fabricante','cantidad_inv': '2','concepto_inv': 'Ingreso','task_inv':'','code_inv':'','fecha_inv':'07/12/2023','hora_inv':'04:18 pm'},
        {'id_inv': '1','owner_inv':'Raul','marca_inv': 'Nike','modelo_inv':'Air Jordan 2','talla_inv': '22.5 mx','color_inv': 'Rojo / Negro','proveedor_inv': 'Fabricante','cantidad_inv': '5','concepto_inv': 'Ingreso','task_inv':'','code_inv':'','fecha_inv':'07/12/2023','hora_inv':'04:18 pm'},
        {'id_inv': '1','owner_inv':'Raul','marca_inv': 'Nike','modelo_inv':'Air Jordan 2','talla_inv': '25.5 mx','color_inv': 'Rojo / Negro','proveedor_inv': 'Fabricante','cantidad_inv': '1','concepto_inv': 'Venta','task_inv':'Enviar','code_inv':'','fecha_inv':'07/12/2023','hora_inv':'04:18 pm'},
        {'id_inv': '1','owner_inv':'Raul','marca_inv': 'Nike','modelo_inv':'Air Jordan 2','talla_inv': '22.5 mx','color_inv': 'Rojo / Negro','proveedor_inv': 'Fabricante','cantidad_inv': '2','concepto_inv': 'Venta','task_inv':'Enviar','code_inv':'','fecha_inv':'07/12/2023','hora_inv':'04:18 pm'},
        {'id_inv': '1','owner_inv':'Raul','marca_inv': 'Nike','modelo_inv':'Air Jordan 2','talla_inv': '20.5 mx','color_inv': 'Rojo / Negro','proveedor_inv': 'Fabricante','cantidad_inv': '1','concepto_inv': 'Ingreso','task_inv':'','code_inv':'','fecha_inv':'07/12/2023','hora_inv':'04:18 pm'},
        {'id_inv': '2','owner_inv':'Monica','marca_inv': 'Nike','modelo_inv':'Air Force 1','talla_inv': '27.5 mx','color_inv': 'Blanco','proveedor_inv': 'Los compadres','cantidad_inv': '2','concepto_inv': 'Ingreso','task_inv':'','code_inv':'','fecha_inv':'11/12/2023','hora_inv':'10:30 am'},
        {'id_inv': '2','owner_inv':'Monica','marca_inv': 'Nike','modelo_inv':'Air Force 1','talla_inv': '27 mx','color_inv': 'Blanco','proveedor_inv': 'Los compadres','cantidad_inv': '2','concepto_inv': 'Ingreso','task_inv':'','code_inv':'','fecha_inv':'11/12/2023','hora_inv':'10:30 am'},
        {'id_inv': '2','owner_inv':'Monica','marca_inv': 'Nike','modelo_inv':'Air Force 1','talla_inv': '27.5 mx','color_inv': 'Blanco','proveedor_inv': 'Los compadres','cantidad_inv': '2','concepto_inv': 'Venta','task_inv':'Enviar','code_inv':'','fecha_inv':'11/12/2023','hora_inv':'10:30 am'},
        {'id_inv': '2','owner_inv':'Monica','marca_inv': 'Nike','modelo_inv':'Air Force 1','talla_inv': '26 mx','color_inv': 'Blanco','proveedor_inv': 'Los compadres','cantidad_inv': '2','concepto_inv': 'Venta','task_inv':'Enviar','code_inv':'','fecha_inv':'11/12/2023','hora_inv':'10:30 am'},
        {'id_inv': '2','owner_inv':'Monica','marca_inv': 'Nike','modelo_inv':'Air Force 1','talla_inv': '26 mx','color_inv': 'Blanco','proveedor_inv': 'Los compadres','cantidad_inv': '2','concepto_inv': 'Ingreso','task_inv':'','code_inv':'','fecha_inv':'11/12/2023','hora_inv':'10:30 am'}]

    const initialState = {
        inventarioData: [],
        formInventario: false,
        initialTalla: true,
        itemsTallas: [],
        alertDisplay: false,
        errorFormInv: false,
        listaTallas: ["0",false],
        codeForm: false,
        invSeleccionado: null,
        arrayStock: []
    }

    const [state, dispatch] = useReducer(inventarioReducer, initialState);

    const obtenerInventario = () => {
        dispatch({
            type: GET_INVENTARIO,
            payload: arrayInvInitial
        })
    }
    const obtenerStock = () => {
        // Propiedades para agrupar
        const groupKeys = ['proveedor_inv','marca_inv', 'modelo_inv', 'color_inv'];
        // Propiedades para sumar
        const sumKeys = ['cantidad_inv'];
        // Propiedades para anidar
        const talla = ['talla_inv'];
        const arrayData = state.inventarioData;
        
        const groupAndSum = Object.values(
                arrayData.reduce((acc,curr)=>{
                // Crear una clave única para cada grupo combinando los valores de las propiedades de agrupación
                const group = groupKeys.map(k => curr[k]).join('-');
                
                // Si el grupo no existe en el acumulador, crear un nuevo objeto con las propiedades de agrupación y anidación
                acc[group] = acc[group] || Object.fromEntries(
                    groupKeys.map(k => [k, curr[k]]).concat([[talla, {}]])
                );
                //verificamos si el acumulador con esas claves existe, si no lo asignamos con un cero
                if(!acc[group][talla][curr[talla]]){
                    acc[group][talla][curr[talla]] = parseInt(0);
                }
                // revisamos cada sumKeys y le sumamos el valor al accumulador
                sumKeys.forEach(k => {
                    acc[group][talla][curr[talla]] = (curr['concepto_inv'] === "Venta") ? parseInt(acc[group][talla][curr[talla]]) - parseInt(curr[k]) : parseInt(acc[group][talla][curr[talla]]) + parseInt(curr[k])
                });
                return acc;
                }, {})
            );
            
        dispatch({
            type: GET_STOCK,
            payload: groupAndSum
        })
    }
    const obtenerMovimientoInv = (item) => {
        dispatch({
            type: GET_MOVIMIENTO_INV,
            payload: item
        })
    }
    const showFormInv = () => {
        dispatch({
            type: SHOW_FORM_INV
        })
    }
    const showTallasToUpdate = (id_inv,talla_inv,cantidad_inv) => {
        const talla = {id:id_inv,cantidad_inv:cantidad_inv,talla_inv:talla_inv}
        dispatch({
            type:SHOW_TALLAS_TO_UPDATE,
            payload: talla
        })
    }
    const addSelectTallas = () => {
        const numItem = {"id":String(state.itemsTallas.length+1)}
        dispatch({
            type: ADD_SELECT_TALLAS,
            payload: numItem
        })
    }
    const updateSelectTallas = (itemTallas) => {
        dispatch({
            type: UPDATE_SELECT_TALLAS,
            payload: itemTallas
        })
    }
    const removeSelectTallas = (listTallaID) => {
        dispatch({
            type: REMOVE_SELECT_TALLAS,
            payload: listTallaID
        })
    }
    const closeFormInventario = () => {
        dispatch({
            type: CLOSE_FORM_INVENTARIO
        })
    }
    const closeCodeForm = () => {
        dispatch({
            type: CLOSE_CODE_FORM
        })
    }
    const showCodeForm = () => {
        dispatch({
            type: SHOW_CODE_FORM
        })
    }
    const addMovimientoInventario = (movimiento) => {
        dispatch({
            type: ADD_MOVIMIENTO_INVENTARIO,
            payload: movimiento
        })
    }
    const deleteMovimientoInventario = (movimiento) => {
        dispatch({
            type: DELETE_MOVIMIENTO_INVENTARIO,
            payload: movimiento
        })
    }
    const updateMovInv = (movimiento) => {
        dispatch({
            type: UPDATE_MOVIMIENTO_INVENTARIO,
            payload: movimiento
        })
    }
    const searchDataInv = (producto) => {
        dispatch({
            type: SEARCH_DATA_PRODUCTO,
            payload: producto
        })
    }
    const showErrorFormInv = () => {
        dispatch({
            type: SHOW_ERROR_FORM_INV
        })
    }
    const showListTallas = (id) => {
        dispatch({
            type: SHOW_LIST_TALLAS,
            payload: id
        })
    }

    return (
        <inventarioContext.Provider
            value={{
                inventarioData: state.inventarioData,
                formInventario: state.formInventario,
                initialTalla: state.initialTalla,
                itemsTallas: state.itemsTallas,
                alertDisplay: state.alertDisplay,
                errorFormInv: state.errorFormInv,
                listaTallas: state.listaTallas,
                codeForm: state.codeForm,
                invSeleccionado: state.invSeleccionado,
                arrayStock: state.arrayStock,
                obtenerInventario,
                obtenerStock,
                showFormInv,
                showTallasToUpdate,
                addSelectTallas,
                updateSelectTallas,
                removeSelectTallas,
                closeFormInventario,
                addMovimientoInventario,
                searchDataInv,
                showErrorFormInv,
                showListTallas,
                closeCodeForm,
                showCodeForm,
                obtenerMovimientoInv,
                updateMovInv,
                deleteMovimientoInventario
            }}
        >
            {props.children}
        </inventarioContext.Provider>
    );
}
 
export default InventarioState;