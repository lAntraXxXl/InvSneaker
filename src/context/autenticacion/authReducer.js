import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
} from "../../types";

const authReducer = (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            //localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                autenticacion: true,
                mensaje: null,
                cargando: false,
            };
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticacion: true,
                usuario: action.payload,
                cargando: false,
            };
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            //localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                usuario: null,
                autenticacion: null,
                mensaje: "mensaje error desde reducer",
                cargando: false,
            };

        default:
            return state;
    }
};

export default authReducer;
