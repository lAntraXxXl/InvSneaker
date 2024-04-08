import NavMenu from "../layout/NavMenu";
import Menu from "../layout/Menu";
import DataProveedor from "./DataProveedor";
import './proveedor.css'
import FormProv from "./FormProv";
import { useContext } from "react";
import proveedorContext from "../../context/proveedor/proveedorContext";

const Proveedor = () => {

    const provContext = useContext(proveedorContext)
    const {formProv,showFormProv} = provContext;

    return (
        <div className='preBody'>
            <div className='part1'>
                <NavMenu />
            </div>
            <div className='part2'>
                <Menu />
                <div className="containerInv">
                    <div className="navItems">
                        <ul>
                            <li>
                                <h4>Proveedores</h4>
                            </li>
                            <li>
                                <div className="ADD" onClick={showFormProv}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 2a6 6 0 0 1 6 6H2a6 6 0 0 1 6-6Zm8-4a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V7Z"/></svg>
                                    <p>Proveedor</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {(formProv) ? <FormProv /> : null}
                    <DataProveedor />
                </div>
            </div>
        </div>
    );
}
 
export default Proveedor;