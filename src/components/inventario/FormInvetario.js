import React,{ Fragment, useContext, useEffect, useState} from "react";
import inventarioContext from "../../context/inventario/inventarioContext";
import LineaTallas from "./LineaTallas";
import productoContext from "../../context/producto/productoContext";
import proveedorContext from "../../context/proveedor/proveedorContext";

const FormInventario = () => {
    const inventContext = useContext(inventarioContext);
    const {closeFormInventario, itemsTallas,addSelectTallas, showErrorFormInv, errorFormInv,addMovimientoInventario,invSeleccionado,showTallasToUpdate,updateMovInv} = inventContext;

    const prodContext = useContext(productoContext);
    const {buscarProducto,resultProduct} = prodContext;

    const proveeContext = useContext(proveedorContext)
    const {obtenerProveedor,proveedores} = proveeContext;
    
    useEffect(() => {
        if(invSeleccionado !== null){
            //llenamos los datos en el state del item seleccionado
            setProductoInventario(invSeleccionado);
            //asignamos el prodcucto seleccionado al input search
            setInputSearch(invSeleccionado.marca_inv+" - "+invSeleccionado.modelo_inv+" - "+invSeleccionado.color_inv);
            showTallasToUpdate(invSeleccionado.id_inv,invSeleccionado.talla_inv,invSeleccionado.cantidad_inv);
        }else{
            setProductoInventario({
                owner_inv:'',
                marca_inv:'',
                modelo_inv:'',
                color_inv:'',
                proveedor_inv:'',
                concepto_inv:'',
                task_inv:'',
                code_inv:''
            });
            setInputSearch('');
        }
        obtenerProveedor();
    },[invSeleccionado]);

    const [viewListProd, setViewListProd] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [productoInventario,setProductoInventario] = useState({
        owner_inv:'',
        marca_inv:'',
        modelo_inv:'',
        color_inv:'',
        proveedor_inv:'',
        concepto_inv:'',
        task_inv:'',
        code_inv:''
    });
    const {owner_inv,marca_inv,modelo_inv,talla_inv,color_inv,proveedor_inv,cantidad_inv,concepto_inv,task_inv} = productoInventario;

    const browseInv = (e) => {
        setInputSearch(e.target.value.trim());
        if(e.target.value.trim() !== ''){
            buscarProducto(e.target.value.trim());
            setViewListProd(true);
        }else{
            setViewListProd(false);
        }
    }
    const showListProd = () => {
            setViewListProd(true);
    }
    //con la lista despegable del producto llenammos algunos campos
    const hideListProd = (producto) => {
        setProductoInventario({...productoInventario,
            marca_inv: producto.marca_prod,
            modelo_inv: producto.modelo_prod,
            color_inv: producto.primary_color+" / "+producto.second_color
        });
        //asignamos el prodcucto seleccionado al input search
        setInputSearch(producto.marca_prod+" - "+producto.modelo_prod+" - "+producto.primary_color+" / "+producto.second_color);
        //ocultamos la lista de prodcutos
        setViewListProd(false);
    }
    const fecha = new Date();
    const dateInv = (date) => {
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        month = month + 1;
        var strDate = day + '/' + month + '/' + year;
        return strDate;
    }
    const timeInv = (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    const onChangeInv = (e) => {
        setProductoInventario({
            ...productoInventario,
            [e.target.name]:e.target.value,
            "task_inv":(e.target.value === 'Venta') ? "Mandar" : "",
            "owner_inv":"Falta Codigo",
            'fecha_inv': dateInv(fecha),
            'hora_inv': timeInv(fecha)
        });
    }

    const onSubmitInv = () => {
        if(owner_inv.trim() === '' || marca_inv.trim() === '' || modelo_inv.trim() === '' || color_inv.trim() === '' || proveedor_inv.trim() === '' || concepto_inv.trim() === ''){
            showErrorFormInv();
            return
        }
        //revisamos que todas las lineas de la tallas se hallan llenado con datos
        const flagTallas = itemsTallas.map(itemTalla => (
            Object.keys(itemTalla).length === 3 && Object.values(itemTalla).some( val => val !== "")
        )).some(result => (result));
        if(!flagTallas){
            showErrorFormInv();
            return
        }
        //Este método copia todas las propiedades de un objeto principal a un objeto destino
        const ObjInventario = itemsTallas.map((itemTalla) => Object.assign({},productoInventario,itemTalla));

        //revisamos que este seleccionado un item del inventario para saber si vamos a actualizar o insertar uno nuevo
        if(invSeleccionado !== null){
            //mandamos actualizar el movimiento del inventario seleccionado previamente
            ObjInventario.map(dataInv =>
                updateMovInv(dataInv)
            );
        }else{
            //mandamos agregar todos los movimientos que existan por las tallas agregadas
            ObjInventario.map(dataInv =>
                addMovimientoInventario(dataInv)
            );
        }
        closeFormInventario();
    }

    return (
        <div className="containerForm">
            <form action="" onSubmit={(e) => e.preventDefault()} autocomplete="off">
                <span className="closeForm" onClick={closeFormInventario}><svg xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 20 20"><path d="M18.182 0C19.186 0 20 .814 20 1.818v16.364A1.818 1.818 0 0 1 18.182 20H1.818A1.818 1.818 0 0 1 0 18.182V1.818C0 .814.814 0 1.818 0h16.364Zm-5.975 6.818L10.01 9.01L7.815 6.818a.682.682 0 0 0-.88-.072l-.084.072a.682.682 0 0 0 0 .964l2.195 2.193l-2.195 2.193a.682.682 0 1 0 .964.965l2.195-2.195l2.197 2.195c.24.24.613.263.88.071l.084-.072a.682.682 0 0 0 0-.964l-2.196-2.193l2.195-2.193a.682.682 0 0 0-.963-.964Z"/></svg></span>
                <h4>{(invSeleccionado) ? "Actualizar" : "Agregar"} movimiento</h4>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Producto</p>
                        <input type="text" placeholder="Busca por modelo o marca..." value={inputSearch} onFocus={showListProd} onChange={browseInv} />
                    </div>
                    {(viewListProd && resultProduct.length > 0 && inputSearch !== '')
                        ?
                            <ul className="returnlistProdcut">
                            {resultProduct.map(producto => (
                                 <li key={producto.id_prod} onClick={()=>hideListProd(producto)}>
                                    <div className="contImg">
                                        <img src={producto.img_prod} alt="prod" />
                                    </div>                             
                                    <div>
                                        <h4>{producto.modelo_prod}</h4>
                                        <h5>{producto.marca_prod}</h5>
                                        <div className='colors'>
                                            <p>Colores:</p>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill={producto.primary_code_color}><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                                            {(producto.second_color !== '') 
                                                ? <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill={producto.second_code_color}><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                                                : null
                                            }
                                        </div>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        : null
                    }
                </div>
                
                
                <input type='hidden' name='marca_inv' value={marca_inv} />
                <input type='hidden' name='modelo_inv' value={modelo_inv} />
                <input type='hidden' name='talla_inv' value={talla_inv} />
                <input type='hidden' name='color_inv' value={color_inv} />
                <input type='hidden' name='proveedor_inv' value={proveedor_inv} />
                <input type='hidden' name='cantidad_inv' value={cantidad_inv} />
                <input type='hidden' name='task_inv' value={task_inv} />
                <select name="proveedor_inv" onChange={onChangeInv} value={proveedor_inv}>
                    {(proveedores.length === 0) 
                        ? <option value="">No tienes proveedores</option>
                        : <Fragment>
                            <option value="">Selecciona proveedor</option>
                                {proveedores.map(prov => (
                                    <option key={prov.id_prov} value={prov.name_prov}>{prov.name_prov}</option>
                            ))}
                        </Fragment>               
                    }
                </select>
                <div className="tallaProd">
                    {
                        
                        itemsTallas.map(itemTalla =>(
                            <LineaTallas
                                key={itemTalla.id}
                                itemTalla={itemTalla}
                            />

                        ))
                    }

                    {(invSeleccionado) 
                        ? null
                        : 
                        <div className="addTallas" onClick={addSelectTallas}>
                            <span><svg xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 24 24"><path d="M18 11h-5V6h-2v5H6v2h5v5h2v-5h5z"/></svg></span>
                            <p>tallas</p>
                        </div>
                    }
                </div>
                <div className="concepto">
                    <div className="btnRadio">
                        <input type="radio" name="concepto_inv" value="Venta" onClick={onChangeInv} checked={concepto_inv === "Venta"} />
                        <p>Venta</p>
                    </div>
                    <div className="btnRadio">
                        <input type="radio" name="concepto_inv" value="Ingreso" onClick={onChangeInv} checked={concepto_inv === "Ingreso"} />
                        <p>Ingreso</p>
                    </div>
                </div>
                {(errorFormInv) ? <p className='error'>**Falta seleccionar o llenar algun campo</p> : null}
                <div className="buttonsForm">
                    <span className="btn escForm" onClick={closeFormInventario}>Cancelar</span>
                    <span className="btn addForm" onClick={onSubmitInv}>{(invSeleccionado) ? "Actualizar" : "Agregar"}</span>
                </div>
            </form>
        </div>
    );
}
 
export default FormInventario;