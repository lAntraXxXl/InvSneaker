import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
//import clienteAxios from "../../config/axios";
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
} from "../../types";

const AuthState = (props) => {
    const initialState = {
        token: false, //localStorage.getItem("token"),
        autenticacion: null,
        usuario: null,
        mensaje: null,
        cargando: true,
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    //registrar al usuario, con la conexion de axios al servidor
    const registrarUsuario = () => {
        //console.log(respuesta.data);
        dispatch({
            type: REGISTRO_EXITOSO,
            payload: true,
        });

        //obtener usuario
        usuarioAutenticado();
    };

    //retorna el usuario autenticado
    const usuarioAutenticado = () => {
        dispatch({
            type: OBTENER_USUARIO,
            payload: "Mario Moreno",
        });
    };

    //cuando el usuario inicia sesion
    const iniciarSesion = () => {
        dispatch({
            type: LOGIN_EXITOSO,
            payload: true,
        });

        //OBTENER EL USUARIO
        usuarioAutenticado();
    };
    //cierra la sesion del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION,
        });
    };

    return (
        <authContext.Provider
            value={{
                token: state.token,
                autenticacion: state.autenticacion,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion,
            }}
        >
            {props.children}
        </authContext.Provider>
    );
};

export default AuthState;
