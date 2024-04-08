import React, { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import authContext from "../../context/autenticacion/authContext";

const RutaPrivada = () => {
    const authCont = useContext(authContext);
    const { autenticacion, cargando, usuarioAutenticado } = authCont;

    useEffect(() => {
        usuarioAutenticado();
    }, []);

    return !autenticacion && !cargando ? (
        <Navigate to="/" replace />
    ) : (
        <Outlet />
    );
};

export default RutaPrivada;
