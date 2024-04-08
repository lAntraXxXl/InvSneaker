import {
    SELECT_COLOR,
    SHOW_LIST_COLORS,
    CLOSE_LIST_COLORS,
    CLOSE_FORM_PRODUCTO,
    OPEN_FORM_PRODUCTO,
    EXIST_ERROR_FORM,
    INSERT_PRODUCT,
    SHOW_MENU_ACTION_PROD,
    CLOSE_MENU_ACTION_PROD,
    SELECT_PRODUCTO,
    UPDATE_PRODUCTO,
    CLEAR_SELECTED_PROD,
    DELETE_PRODUCTO,
    BUSCAR_PRODUCTO
} from '../../types';

const productoReducer = (state,action) => {
    switch(action.type){
        case SELECT_COLOR:
            return{
                ...state,
                filterColor: state.All_Colors.filter(color => color.name.toLowerCase().includes(action.payload.toLowerCase()))
            }
        case BUSCAR_PRODUCTO:
            return{
                ...state,
                resultProduct: state.products.filter(producto => (producto.modelo_prod.toLowerCase().includes(action.payload) || producto.marca_prod.toLowerCase().includes(action.payload)))
            }
        case SHOW_LIST_COLORS:
            return{
                ...state,
                listColors: (state.listColors === '') ? action.payload : ''
            }
        case CLOSE_LIST_COLORS:
            return{
                ...state,
                listColors: '',
                filterColor: []
            }
        case OPEN_FORM_PRODUCTO:
            return{
                ...state,
                showFormProd:  true
            }
        case CLOSE_FORM_PRODUCTO:
            return{
                ...state,
                showFormProd: false,
                errorFormProd: false
            }
        case EXIST_ERROR_FORM:
            return{
                ...state,
                errorFormProd: true
            }
        case INSERT_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload],                
                showFormProd: false,
                errorFormProd: false
            }
        case SHOW_MENU_ACTION_PROD:
            return{
                ...state,
                menuActionProd: (state.menuActionProd === '') ? action.payload : ''
            }
        case CLOSE_MENU_ACTION_PROD:
            return{
                ...state,
                menuActionProd: (state.menuActionProd === '') ? action.payload : ''
            }
        case SELECT_PRODUCTO:
            return{
                ...state,
                productoSelected: action.payload,
                menuActionProd: (state.menuActionProd === '') ? action.payload : '',
                showFormProd: true
            }
        case UPDATE_PRODUCTO:
            return{
                ...state,                
                products: state.products.map(prod => prod.id_prod === action.payload.id_prod ? action.payload : prod),
                showFormProd: false
            }
        case CLEAR_SELECTED_PROD:
            return{
                ...state,
                productoSelected: null
            }
        case DELETE_PRODUCTO:
            return{
                ...state,
                products: state.products.filter(prod => prod.id_prod !== action.payload.id_prod)
            }
        default:
            return state;
    }
}
 
export default productoReducer;