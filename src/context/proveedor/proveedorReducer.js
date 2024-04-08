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
} from '../../types';

const proveedorReducer = (state,action) => {
    switch(action.type){      
        case GET_PROVEEDOR:
            return{
                ...state,
                proveedores: action.payload
            }
        case SHOW_FORM_PROV:
            return{
                ...state,
                formProv: (state.formProv) ? false : true
            }      
        case CLOSE_FORM_PROVEEDOR:
            return{
                ...state,
                formProv: false,                
                errorFormProv: false
            }
        case ADD_PROVEEDOR:
            return{
                ...state,
                proveedores: [...state.proveedores, action.payload],
                formProv: false,
                errorFormProv: false
            }
        case SHOW_ERR_FORM_PROV:
            return{
                ...state,
                errorFormProv: true
            }
        case SHOW_MENU_ACTION_PROV:
            return{
                ...state,
                menuActionProv: (state.menuActionProv === '') ? action.payload : ''
            }
        case CLOSE_MENU_ACTION_PROV:
            return{
                ...state,
                menuActionProv: (state.menuActionProv === '') ? action.payload : ''
            }
        case SELECT_PROVEEDOR:
            return{
                ...state,
                proveedorSelected: action.payload,
                menuActionProv: (state.menuActionProv === '') ? action.payload : '',
                formProv: true
            }
        case UPDATE_PROVEEDOR:
            return{
                ...state,                
                proveedores: state.proveedores.map(prov => prov.id_prov === action.payload.id_prov ? action.payload : prov),
                formProv: false
            }
        case CLEAR_SELECTED_PROV:
            return{
                ...state,
                proveedorSelected: null
            }
        case DELETE_PROVEEDOR:
            return{
                ...state,
                proveedores: state.proveedores.filter(prov => prov.id_prov !== action.payload.id_prov)
            }
        default:
            return state
    }
}
 
export default proveedorReducer;