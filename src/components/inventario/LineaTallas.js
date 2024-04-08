import React,{useContext, useEffect, useState} from "react";
import inventarioContext from "../../context/inventario/inventarioContext";

const LineaTallas = ({itemTalla}) => {
    const inventContext = useContext(inventarioContext);
    const {initialTalla, removeSelectTallas,showListTallas,listaTallas,updateSelectTallas,invSeleccionado} = inventContext;


    const [dataTallas, setDataTallas] = useState({
        id:itemTalla.id,
        talla_inv:Object.hasOwn(itemTalla,"talla_inv") ? itemTalla.talla_inv : 'Tallas',
        cantidad_inv:Object.hasOwn(itemTalla,"cantidad_inv") ? itemTalla.cantidad_inv : ''
    });

    const {id,talla_inv,cantidad_inv} = dataTallas;

    
    //si hay algun cambio en talla o cantidad, el useEffect enviara la actualizacion
    //a la funcion updateListTallas para agregar el arreglo del formInv
    useEffect(() => {
        if(talla_inv !== "Tallas"){
            updateSelectTallas(dataTallas);
        }
    },[talla_inv,cantidad_inv,dataTallas]);



    const onlyNums = (e) => {
        //solo deja poner numeros y ademas que sea mayor a cero
        const value = e.target.value.replace(/\D/g, "") > 0 ? e.target.value : '';
        setDataTallas({...dataTallas, cantidad_inv:value});
    };
    
    const removeLineTalla = () => {
        removeSelectTallas(itemTalla.id);
    }

    const tallas = [
        {id:'10 mx',talla:'10 mx'},
        {id:'10.5 mx',talla:'10.5 mx'},
        {id:'11 mx',talla:'11 mx'},
        {id:'11.5 mx',talla:'11.5 mx'},
        {id:'12 mx',talla:'12 mx'},
        {id:'12.5 mx',talla:'12.5 mx'},
        {id:'13 mx',talla:'13 mx'},
        {id:'13.5 mx',talla:'13.5 mx'},
        {id:'14 mx',talla:'14 mx'},
        {id:'14.5 mx',talla:'14.5 mx'},
        {id:'15 mx',talla:'15 mx'},
        {id:'15.5 mx',talla:'15.5 mx'},
        {id:'16 mx',talla:'16 mx'},
        {id:'16.5 mx',talla:'16.5 mx'},
        {id:'17 mx',talla:'17 mx'},
        {id:'17.5 mx',talla:'17.5 mx'},
        {id:'18 mx',talla:'18 mx'},
        {id:'18.5 mx',talla:'18.5 mx'},
        {id:'19 mx',talla:'19 mx'},
        {id:'19.5 mx',talla:'19.5 mx'},
        {id:'20 mx',talla:'20 mx'},
        {id:'20.5 mx',talla:'20.5 mx'},
        {id:'21 mx',talla:'21 mx'},
        {id:'21.5 mx',talla:'21.5 mx'},
        {id:'22 mx',talla:'22 mx'},
        {id:'22.5 mx',talla:'22.5 mx'},
        {id:'23 mx',talla:'23 mx'},
        {id:'23.5 mx',talla:'23.5 mx'},
        {id:'24 mx',talla:'24 mx'},
        {id:'24.5 mx',talla:'24.5 mx'},
        {id:'25 mx',talla:'25 mx'},
        {id:'25.5 mx',talla:'25.5 mx'},
        {id:'26 mx',talla:'26 mx'},
        {id:'26.5 mx',talla:'26.5 mx'},
        {id:'27 mx',talla:'27 mx'},
        {id:'27.5 mx',talla:'27.5 mx'},
        {id:'28 mx',talla:'28 mx'},
        {id:'28.5 mx',talla:'28.5 mx'},
        {id:'29 mx',talla:'29 mx'},
        {id:'29.5 mx',talla:'29.5 mx'},
        {id:'30 mx',talla:'30 mx'},
        {id:'30.5 mx',talla:'30.5 mx'},
        {id:'31 mx',talla:'31 mx'},
        {id:'31.5 mx',talla:'31.5 mx'}];

    const assignTalla = (e) => {
        showListTallas(e.target.id);
        setDataTallas({...dataTallas, talla_inv:e.target.id});
    }

    return (
        <div className="tallaItem">
            <div className="contTallas">
                <button name={"talla_inv"+id} onClick={() => showListTallas(id)}>{talla_inv}</button>
                {(listaTallas[1] && listaTallas[0] === id)
                ?
                <ul className="tallas" id={id}>
                    <li>Tallas</li>
                    {
                        tallas.map(talla => (
                            <li key={talla.id} id={talla.id} onClick={assignTalla}>{talla.talla}</li>
                        ))
                    }
                </ul>
                : null}
            </div>
            <input type="text" name={"cantidad_inv"+id} placeholder="Cantidad" onChange={onlyNums} value={cantidad_inv} />
            {(initialTalla) ? null : <span onClick={removeLineTalla}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10ZM8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 0 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg></span>}
        </div>  
    );
}
 
export default LineaTallas;