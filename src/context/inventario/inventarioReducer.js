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

const inventarioReducer = (state,action) =>{
    switch(action.type){
        case GET_INVENTARIO:
            return{
                ...state,
                inventarioData: action.payload
            }
        case SHOW_FORM_INV:
            return{
                ...state,
                formInventario: (state.formInventario) ? false : true
            }
        case SHOW_TALLAS_TO_UPDATE:
            return{
                ...state,
                itemsTallas: [action.payload],
                initialTalla: (state.itemsTallas.length >= 1) ? false : true
            }
        case ADD_SELECT_TALLAS:
            return{
                ...state,
                itemsTallas: [...state.itemsTallas, action.payload],
                initialTalla: (state.itemsTallas.length >= 1) ? false : true
            }
        case UPDATE_SELECT_TALLAS:
            return{
                ...state,
                itemsTallas: state.itemsTallas.map(listTalla => listTalla.id === action.payload.id ? action.payload : listTalla)
            }
        case REMOVE_SELECT_TALLAS:
            return{
                ...state,
                itemsTallas: state.itemsTallas.filter(itemTalla => itemTalla.id !== action.payload),
                initialTalla: (state.itemsTallas.length > 1) ? false : true
            }
        case CLOSE_FORM_INVENTARIO:
            return{
                ...state,
                formInventario: false,
                initialTalla: true,
                itemsTallas: [],
                errorFormInv: false,
                invSeleccionado: null
            }
        case ADD_MOVIMIENTO_INVENTARIO:
            return{
                ...state,
                formInventario: false,
                initialTalla: true,
                itemsTallas: [],
                inventarioData: [action.payload, ...state.inventarioData],
                alertDisplay: true,
                errorFormInv: false
            }
        case UPDATE_MOVIMIENTO_INVENTARIO:
            return{
                ...state,
                formInventario: false,
                initialTalla: true,
                codeForm: false,
                itemsTallas: [],
                inventarioData: state.inventarioData.map(item => (item.id_inv === action.payload.id_inv) ? action.payload : item),
                alertDisplay: true,
                errorFormInv: false
            }
        case DELETE_MOVIMIENTO_INVENTARIO:
            return{
                ...state,                
                inventarioData: state.inventarioData.filter(item => item.id_inv !== action.payload.id_inv),
                invSeleccionado: null
            }
        case SEARCH_DATA_PRODUCTO:
            return{
                ...state,
                listProduct: state.listProduct.filter(producto => producto.modelo.lowerCase().includes(action.payload.lowerCase()) || producto.marca.lowerCase().includes(action.payload.lowerCase()) )
            }
        case SHOW_ERROR_FORM_INV:
            return{
                ...state,
                errorFormInv: (state.errorFormInv) ? false : true
            }
        case SHOW_LIST_TALLAS:
            return{
                ...state,//si el id == al id del pboton pulsado y ademas esta mostrado la lista la desactivara 
                listaTallas: [action.payload, (state.listaTallas[0] === action.payload && state.listaTallas[1]) ? false : true]
            }
        case CLOSE_CODE_FORM:
            return{
                ...state,
                codeForm: false,
                errorFormInv: false,
                invSeleccionado: null
            }
        case SHOW_CODE_FORM:
            return{
                ...state,
                codeForm:true
            }
        case GET_MOVIMIENTO_INV:
            return{
                ...state,
                invSeleccionado: action.payload
            }
        case GET_STOCK:
            return{
                ...state,
                arrayStock: action.payload
            }
        default:
            return state;
    }
}

export default inventarioReducer;