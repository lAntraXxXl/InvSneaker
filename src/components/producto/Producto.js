import NavMenu from "../layout/NavMenu";
import Menu from "../layout/Menu";
import DataProducto from "./DataProducto";
import FormProducto from "./FormProducto";
import "./producto.css";
import { useContext } from "react";
import productoContext from "../../context/producto/productoContext";

const Producto = () => {
    const prodContext = useContext(productoContext);
    const { showFormProd, openFormProd } = prodContext;

    return (
        <div className="preBody">
            <div className="part1">
                <NavMenu />
            </div>
            <div className="part2">
                <Menu />
                <div className="containerInv">
                    <div className="navItems">
                        <ul>
                            <li>
                                <h4>Productos Sneaker</h4>
                            </li>
                            <li>
                                <div className="search">
                                    <form action="">
                                        <input
                                            type="text"
                                            placeholder="Buscar orden...."
                                        />
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="128"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="#000000"
                                                    d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"
                                                />
                                            </svg>
                                        </span>
                                    </form>
                                </div>
                            </li>
                            <li onClick={openFormProd}>
                                <div className="ADD">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M417.4 224H288V94.6c0-16.9-14.3-30.6-32-30.6s-32 13.7-32 30.6V224H94.6C77.7 224 64 238.3 64 256s13.7 32 30.6 32H224v129.4c0 16.9 14.3 30.6 32 30.6s32-13.7 32-30.6V288h129.4c16.9 0 30.6-14.3 30.6-32s-13.7-32-30.6-32z" />
                                    </svg>
                                    <p>Producto</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {showFormProd ? <FormProducto /> : null}
                    <DataProducto />
                </div>
            </div>
        </div>
    );
};

export default Producto;
