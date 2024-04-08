import { useContext } from "react";
import productoContext from "../../context/producto/productoContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const DataProducto = () => {
    const prodContext = useContext(productoContext);
    const {
        products,
        menuActionProd,
        showMenuActionProd,
        closeMenuActionProd,
        selectProducto,
        deleteProducto,
    } = prodContext;

    const getClickProd = (id) => {
        if (menuActionProd === id || menuActionProd === "") {
            //mando el id y un falso, porque es el mismo item donde se esta
            //ejecutando la ventana del menu action
            showMenuActionProd(id);
        } else {
            closeMenuActionProd(id);
            showMenuActionProd(id);
        }
    };

    const selectProd = (provItem) => {
        selectProducto(provItem);
    };
    const deleteProv = (provItem) => {
        deleteProducto(provItem);
    };

    return (
        <ul className="containerProduct">
            <TransitionGroup>
                {products.length === 0 ? (
                    <li className="empty">No hay productos aun.</li>
                ) : (
                    products.map((producto) => (
                        <CSSTransition
                            classNames="anim"
                            key={producto.id_prod}
                            timeout={900}
                        >
                            <li className="anim">
                                <div className="containerMenuAction">
                                    <span
                                        onClick={() =>
                                            getClickProd(producto.id_prod)
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M6.51 12a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 12v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V12Zm5.5-1.5a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h.01Zm7 0a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H19a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h.01Z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    {menuActionProd === producto.id_prod ? (
                                        <ul className="menuActions">
                                            <li
                                                className="edit"
                                                onClick={() =>
                                                    selectProd(producto)
                                                }
                                            >
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path d="M163 439.573l-90.569-90.569L322.78 98.656l90.57 90.569z" />
                                                        <path d="M471.723 88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305z" />
                                                        <path d="M64.021 363.252L32 480l116.737-32.021z" />
                                                    </svg>
                                                </span>
                                                <p>Editar</p>
                                            </li>
                                            <li
                                                className="delete"
                                                onClick={() =>
                                                    deleteProv(producto)
                                                }
                                            >
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm5-7.1l1.9 1.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l1.9-1.9Z" />
                                                    </svg>
                                                </span>
                                                <p>Eliminar</p>
                                            </li>
                                        </ul>
                                    ) : null}
                                </div>
                                <div className="innerProd">
                                    <div className="img">
                                        <img src={producto.img_prod} alt="" />
                                    </div>
                                    <div className="descriptProd">
                                        <h3>{producto.modelo_prod}</h3>
                                        <h5>{producto.marca_prod}</h5>
                                        <p>Colores:</p>
                                        <div className="colors">
                                            <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 256"
                                                    fill={
                                                        producto.primary_code_color
                                                    }
                                                >
                                                    <path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z" />
                                                </svg>
                                            </span>
                                            {producto.second_color !== "" ? (
                                                <span>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 256 256"
                                                        fill={
                                                            producto.second_code_color
                                                        }
                                                    >
                                                        <path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z" />
                                                    </svg>
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </CSSTransition>
                    ))
                )}
            </TransitionGroup>
        </ul>
    );
};

export default DataProducto;
