import { useState, useContext, useEffect } from "react";
import imgLogo from "../media/blacklogo.png";
import imgPortada from "../media/portada.svg";
import "./login.css";
import authContext from "../../context/autenticacion/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();

    const [dataUser, setDataUser] = useState({
        user_mail: "",
        user_pssw: "",
        reqUser_mail: "",
    });

    const authCont = useContext(authContext);
    const { mensaje, autenticacion, iniciarSesion, usuarioAutenticado } =
        authCont;

    //en caso de que el password o usuario no exista
    //o registrado o sea un registro duplicado
    useEffect(() => {
        if (autenticacion) {
            //props.history.push('/proyects');
            navigate("/inventario");
        }
        /*if (mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }*/
    }, [mensaje, autenticacion, navigate]);

    const [errorForm, setErrorForm] = useState(false);
    const [reqErrorForm, setReqErrorForm] = useState(false);
    const [modal, setModal] = useState(false);
    const [reqAccess, setReqAccess] = useState(false);

    const { user_mail, user_pssw, reqUser_mail } = dataUser;

    const starSession = () => {
        if (user_mail.trim() === "" || user_pssw.trim() === "") {
            setErrorForm(true);
            return;
        }
        iniciarSesion();
    };

    const onChangeLogin = (e) => {
        setDataUser({ ...dataUser, [e.target.name]: e.target.value });
    };

    const requireAccess = () => {
        setReqAccess(true);
    };

    const getRequest = (e) => {
        if (reqUser_mail.trim() === "") {
            setReqErrorForm(true);
            return;
        }
        setModal(true);
        setReqErrorForm(false);
    };

    return (
        <div className="logoBody">
            {!modal ? (
                <div className="container_login">
                    <div className="sideLeft">
                        <img src={imgPortada} alt="" />
                    </div>
                    <div className="sideRight">
                        <div className="logo">
                            <img src={imgLogo} alt="" />
                        </div>
                        {!reqAccess ? (
                            <div className="sigIn">
                                <div className="descript">
                                    <h3>Hola de nuevo</h3>
                                    <p>
                                        Un gusto verte de regrerso espermos
                                        ingresar muchas ventas.
                                    </p>
                                </div>
                                <form
                                    action=""
                                    onSubmit={(e) => e.preventDefault()}
                                    autocomplete="off"
                                >
                                    <p className="label">Correo</p>
                                    <input
                                        type="email"
                                        name="user_mail"
                                        value={user_mail}
                                        placeholder="ejemplo@correo.com"
                                        onChange={onChangeLogin}
                                    />
                                    <p className="label">Contraseña</p>
                                    <input
                                        type="password"
                                        name="user_pssw"
                                        value={user_pssw}
                                        placeholder="***********"
                                        onChange={onChangeLogin}
                                    />

                                    {errorForm ? (
                                        <p className="error">
                                            **Falta llenar uno o varios campos.
                                        </p>
                                    ) : null}
                                    <div className="buttonsForm">
                                        <span
                                            className="btn goApp"
                                            onClick={starSession}
                                        >
                                            Inisiar sesion
                                        </span>
                                        <span
                                            className="btn reqApp"
                                            onClick={requireAccess}
                                        >
                                            Solicitar acceso
                                        </span>
                                    </div>
                                </form>
                            </div>
                        ) : (
                            <div className="reqSign">
                                <div className="descript">
                                    <h3>Genial, vamos por ello</h3>
                                    <p>
                                        Completa tu informacion para poder
                                        gestionar su tu solicitud.
                                    </p>
                                </div>
                                <form
                                    action=""
                                    onSubmit={(e) => e.preventDefault()}
                                    autocomplete="off"
                                >
                                    <p className="label">Correo</p>
                                    <input
                                        type="email"
                                        name="reqUser_mail"
                                        value={reqUser_mail}
                                        placeholder="ejemplo@sistem.com"
                                        onChange={onChangeLogin}
                                    />
                                    {reqErrorForm ? (
                                        <p className="error">
                                            **Falta ingresar tu correo.
                                        </p>
                                    ) : null}
                                    <div className="buttonsForm">
                                        <span
                                            className="btn goApp"
                                            onClick={getRequest}
                                        >
                                            Solicitar acceso
                                        </span>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="containerModal">
                    <div className="headerModal">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1024 1024"
                            >
                                <path d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z" />
                            </svg>
                        </span>
                        <h3>Excelente</h3>
                    </div>
                    <div className="bodyModal">
                        <p>
                            Se ha enviado tu solicitud, pronto recibiras
                            respuesta a tu correo.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
