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

const vendedorReducer = (state,action) => {
    switch(action.type){   
        case GET_VENDEDOR:
            return{
                ...state,
                vendedores: action.payload
            }
        case SHOW_FORM_VENDEDOR:
            return{
                ...state,
                formVendedor: (state.formVendedor) ? false : true
            }      
        case CLOSE_FORM_VENDEDOR:
            return{
                ...state,
                formVendedor: false,                
                errorFormVendedor: false
            }
        case ADD_VENDEDOR:
            return{
                ...state,
                vendedores: [...state.vendedores, action.payload],
                formVendedor: false,
                errorFormVendedor: false
            }
        case SHOW_ERR_FORM_VENDEDOR:
            return{
                ...state,
                errorFormVendedor: true
            }
        case SHOW_MENU_ACTION_VENDEDOR:
            return{
                ...state,
                menuActionVendedor: (state.menuActionVendedor === '') ? action.payload : ''
            }
        case CLOSE_MENU_ACTION_VENDEDOR:
            return{
                ...state,
                menuActionVendedor: (state.menuActionVendedor === '') ? action.payload : ''
            }
        case SELECT_VENDEDOR:
            return{
                ...state,
                vendedorSelected: action.payload,
                menuActionVendedor: (state.menuActionVendedor === '') ? action.payload : '',
                formVendedor: true
            }
        case UPDATE_VENDEDOR:
            return{
                ...state,                
                vendedores: state.vendedores.map(vend => vend.id_vendedor === action.payload.id_vendedor ? action.payload : vend),
                formVendedor: false
            }
        case CLEAR_SELECTED_VENDEDOR:
            return{
                ...state,
                vendedorSelected: null
            }
        case DELETE_VENDEDOR:
            return{
                ...state,
                vendedores: state.vendedores.filter(vend => vend.id_vendedor !== action.payload.id_vendedor)
            }
        default:
            return state
    }
}
 
export default vendedorReducer;