import { useContext, useEffect } from "react";
import inventarioContext from "../../context/inventario/inventarioContext";
import modalsContext from "../../context/modals/modalsContext";

const DataInventario = () => {
    const invContext = useContext(inventarioContext);

    const {inventarioData,obtenerInventario,obtenerMovimientoInv,showCodeForm,showFormInv} = invContext

    const modalContext = useContext(modalsContext);
    const {showModal} = modalContext;

    useEffect(() => {
        obtenerInventario();
    },[])

    const onChangeTask = (item) => {
        if(item.task_inv === 'Enviar'){
            obtenerMovimientoInv(item);
            showCodeForm();
        }
    }

    const onEditInv = (item) => {
        obtenerMovimientoInv(item);
        showFormInv()
    }

    const onDeleteInv = (item) => {
        obtenerMovimientoInv(item);
        showModal();
    }

    return (
        <div className="contTable">
                <table className="table_inv">
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Talla</th>
                            <th>Color</th>
                            <th>Proveedor</th>
                            <th>Cantidad</th>
                            <th>Fecha</th>
                            <th>Vendedor</th>
                            <th>Concepto</th>
                            <th className="highlighted_red_Head">Pendientes</th>
                            <th>Code ML</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {//si hay datos en el inventario
                            (inventarioData.length > 0)
                            ?
                                inventarioData.map(invItem => (
                                    <tr key={invItem.id_inv}>
                                        <td>{invItem.modelo_inv}</td>
                                        <td>{invItem.marca_inv}</td>
                                        <td>{invItem.talla_inv}</td>
                                        <td>{invItem.color_inv}</td>
                                        <td>{invItem.proveedor_inv}</td>
                                        <td>{invItem.cantidad_inv}</td>
                                        <td>{invItem.fecha_inv}<br />{invItem.hora_inv}</td>
                                        <td><span className="owner">{invItem.owner_inv}</span></td>
                                        <td><span className={invItem.concepto_inv}>{invItem.concepto_inv}</span></td>
                                        <td className={(invItem.task_inv === 'Enviar') ? "highlighted_body red" : "highlighted_body success"}><span className={invItem.task_inv} onClick={() => onChangeTask(invItem)}>{invItem.task_inv}</span></td>
                                        <td><span className="code">{(invItem.code_inv === '' && invItem.concepto_inv === 'Venta') ? "- - - -" : invItem.code_inv}</span></td>
                                        <td>
                                            <div className="actions">
                                                <div className="edit" onClick={() => onEditInv(invItem)}>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M163 439.573l-90.569-90.569L322.78 98.656l90.57 90.569z" /><path d="M471.723 88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305z" /><path d="M64.021 363.252L32 480l116.737-32.021z" /></svg>
                                                    </span>
                                                    <p>Editar</p>
                                                </div>
                                                <div className="delete" onClick={() => onDeleteInv(invItem)}>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm5-7.1l1.9 1.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l1.9-1.9Z"/></svg>
                                                    </span>
                                                    <p>Eliminar</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    ))
                            : <tr><td colSpan={12} className="emptyData">No hay datos que mostrar</td></tr>
                        }
                    </tbody>
                </table>
            </div>
    );
}
 
export default DataInventario;