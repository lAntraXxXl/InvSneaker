import {
    SHOW_MODAL,
    HIDE_MODAL,
    YES_DELETE,
    DELETE_CLEAR,
    SHOW_ALERT,
    HIDE_ALERT
} from '../../types'


const modalsReducer = (state,action) => {
    switch(action.type){
        case SHOW_MODAL:
            return{
                ...state,
                modal: true
            }
        case HIDE_MODAL:
            return{
                ...state,
                modal: false
            }
        case YES_DELETE:
            return{
                ...state,
                deleteItem: true
            }
        case DELETE_CLEAR:
            return{
                ...state,
                deleteItem: false
            }
        case SHOW_ALERT:
            return{
                ...state,
                alerta: action.payload
            }
        case HIDE_ALERT:
            return{
                ...state,
                alerta: null
            }
        default:
            return state;
    }
}
 
export default modalsReducer;