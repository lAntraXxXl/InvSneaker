import productoReducer from './productoReducer';
import productoContext from './productoContext';
import { useReducer } from 'react';
import img01 from '../../components/media/01.jpg'
import img02 from '../../components/media/02.jpg'
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
} from '../../types'

const ProductoState = (props) => {
    const arrColors = [{"color":"rgb(224, 255, 255)","name":"Agua"},
    {"color":"rgb(255, 237, 0)","name":"Amarillo"},
    {"color":"rgb(23, 23, 255)","name":"Azul"},
    {"color":"rgb(111, 168, 220)","name":"Azul acero"},
    {"color":"rgb(220, 236, 255)","name":"Azul claro"},
    {"color":"rgb(15, 82, 153)","name":"Azul marino"},
    {"color":"rgb(1, 50, 103)","name":"Azul oscuro"},
    {"color":"rgb(30, 110, 127)","name":"Azul petróleo"},
    {"color":"rgb(245, 243, 220)","name":"Beige"},
    {"color":"rgb(255, 255, 255)","name":"Blanco"},
    {"color":"rgb(131, 5, 0)","name":"Bordó"},
    {"color":"rgb(240, 230, 140)","name":"Caqui"},
    {"color":"rgb(131, 221, 255)","name":"Celeste"},
    {"color":"rgb(155, 63, 20)","name":"Chocolate"},
    {"color":"rgb(0, 255, 255)","name":"Cian"},
    {"color":"rgb(250, 128, 114)","name":"Coral"},
    {"color":"rgb(249, 172, 149)","name":"Coral claro"},
    {"color":"rgb(255, 255, 224)","name":"Crema"},
    {"color":"rgb(255, 215, 0)","name":"Dorado"},
    {"color":"rgb(191, 144, 0)","name":"Dorado oscuro"},
    {"color":"rgb(255, 0, 236)","name":"Fucsia"},
    {"color":"rgb(225, 225, 225)","name":"Gris"},
    {"color":"rgb(102, 102, 102)","name":"Gris oscuro"},
    {"color":"rgb(217, 210, 233)","name":"Lavanda"},
    {"color":"rgb(204, 135, 255)","name":"Lila"},
    {"color":"rgb(160, 82, 45)","name":"Marrón"},
    {"color":"rgb(175, 134, 80)","name":"Marrón claro"},
    {"color":"rgb(93, 56, 6)","name":"Marrón oscuro"},
    {"color":"rgb(255, 140, 0)","name":"Naranja"},
    {"color":"rgb(253, 175, 32)","name":"Naranja claro"},
    {"color":"rgb(210, 105, 30)","name":"Naranja oscuro"},
    {"color":"rgb(0, 0, 0)","name":"Negro"},
    {"color":"rgb(255, 228, 196)","name":"Nude"},
    {"color":"rgb(234, 203, 83)","name":"Ocre"},
    {"color":"rgb(203, 207, 208)","name":"Plateado"},
    {"color":"rgb(255, 0, 0)","name":"Rojo"},
    {"color":"rgb(252, 177, 190)","name":"Rosa"},
    {"color":"rgb(255, 81, 168)","name":"Rosa chicle"},
    {"color":"rgb(250, 219, 226)","name":"Rosa claro"},
    {"color":"rgb(250, 235, 215)","name":"Suela"},
    {"color":"rgb(198, 54, 51)","name":"Terracota"},
    {"color":"rgb(64, 224, 208)","name":"Turquesa"},
    {"color":"rgb(13, 166, 0)","name":"Verde"},
    {"color":"rgb(159, 243, 159)","name":"Verde claro"},
    {"color":"rgb(63, 118, 0)","name":"Verde musgo"},
    {"color":"rgb(0, 61, 0)","name":"Verde oscuro"},
    {"color":"rgb(159, 0, 255)","name":"Violeta"},
    {"color":"rgb(78, 0, 135)","name":"Violeta oscuro"},
    {"color":"rgb(122, 100, 198)","name":"Índigo"}];

    const prodsInit = [{
        'id_prod':'1',
        'img_prod': img01,
        'modelo_prod':'Air Jordan 2',
        'marca_prod':'NIKE',
        'primary_color':'Rojo',
        'primary_code_color':'rgb(255, 0, 0)',
        'second_color':'Negro',
        'second_code_color':'rgb(0, 0, 0)'
    },
    {
        'id_prod':'2',
        'img_prod': img02,
        'modelo_prod':'Air Force 1',
        'marca_prod':'NIKE',
        'primary_color':'Blanco',
        'primary_code_color':'rgb(255, 255, 255)',
        'second_color':'',
        'second_code_color':''
    }]

    const initialState = {
        All_Colors: arrColors,
        products: prodsInit,
        resultProduct: [],
        filterColor: [],
        listColors: '',
        showFormProd: false,
        errorFormProd: false,
        menuActionProd: '',
        productoSelected: null
    }
    const [state, dispatch] = useReducer(productoReducer,initialState);

    const buscarProducto = (text) => {
        dispatch({
            type: BUSCAR_PRODUCTO,
            payload: text
        })
    }

    const selectColor = (pColor) => {
        dispatch({
            type: SELECT_COLOR,
            payload: pColor
        })
    }
    const showListColor = (list) =>{
        dispatch({
            type: SHOW_LIST_COLORS,
            payload: list
        })
    }
    
    const closeListColor = () =>{
        dispatch({
            type: CLOSE_LIST_COLORS
        })
    }
    const openFormProd = () => {
        dispatch({
            type: OPEN_FORM_PRODUCTO
        })
    }
    const closeFormProd = () => {
        dispatch({
            type: CLOSE_FORM_PRODUCTO
        })
    }
    const showErrorFormProd = () => {
        dispatch({
            type: EXIST_ERROR_FORM
        })
    }
    const saveProduct = (product) => {
        dispatch({
            type: INSERT_PRODUCT,
            payload: product
        })
    }
    const showMenuActionProd = (id) => {
        dispatch({
            type: SHOW_MENU_ACTION_PROD,
            payload: id
        })
    }
    const closeMenuActionProd = (id) => {
        dispatch({
            type: CLOSE_MENU_ACTION_PROD,
            payload: id
        })
    }
    const selectProducto = (producto) =>{
        dispatch({
            type: SELECT_PRODUCTO,
            payload: producto
        })
    }
    const deleteProducto = (producto) => {
        dispatch({
            type: DELETE_PRODUCTO,
            payload: producto
        })
    }
    const updateProd = (producto) => {
        dispatch({
            type: UPDATE_PRODUCTO,
            payload: producto
        })
    }
    const clearProdSelected = () => {
        dispatch({
            type: CLEAR_SELECTED_PROD
        })
    }


    return (
        <productoContext.Provider
            value={{
                All_Colors: state.All_Colors,
                products: state.products,
                resultProduct: state.resultProduct,
                filterColor: state.filterColor,
                listColors: state.listColors,
                showFormProd: state.showFormProd,
                errorFormProd: state.errorFormProd,
                menuActionProd: state.menuActionProd,
                productoSelected: state.productoSelected,
                buscarProducto,
                selectColor,
                showListColor,
                closeListColor,
                openFormProd,
                closeFormProd,
                showErrorFormProd,
                saveProduct,
                showMenuActionProd,
                closeMenuActionProd,
                selectProducto,
                deleteProducto,
                clearProdSelected,
                updateProd
            }}
        >
            {props.children}
        </productoContext.Provider>
    );
}
 
export default ProductoState;