import React, { useContext, useEffect, useState } from "react";
import proveedorContext from "../../context/proveedor/proveedorContext";

const FormProv = () => {

    const provContext = useContext(proveedorContext);
    const {errorFormProv,closeFormProv,showErrorFormProv, saveProv,proveedorSelected,updateProv,clearSelectProv} = provContext;

    useEffect(() => {
        if(proveedorSelected !== null){
            setProveedor(proveedorSelected);
        }else{
            setProveedor({
                name_prov: '',
                phone_prov: '',
                address_prov: ''
            });
        }
    },[proveedorSelected])

    const [proveedor, setProveedor] = useState({
        name_prov: '',
        phone_prov: '',
        address_prov: ''
    });
    const {name_prov,phone_prov, address_prov} = proveedor;

    const onChangeProveedor = (e) => {
        setProveedor({...proveedor, [e.target.name]: e.target.value });
    };

    const onCloseForm = () =>{
        if(proveedorSelected !== null){
            clearSelectProv();
        }
        closeFormProv();
    }

    const onSubmitProv = e => {
        e.preventDefault();
        if(name_prov.trim() === '' || phone_prov.trim() === '' || address_prov.trim() === ''){
            showErrorFormProv();
            return
        }

        if(proveedorSelected !== null){
            //mandmos a actualizar al proveedor
            updateProv(proveedor);
            clearSelectProv();
        }else{
            //mandamos insertar el proveedor
            saveProv(proveedor);
        }
        //limpiamos el form
        setProveedor({
            name_prov: '',
            phone_prov: '',
            address_prov: ''
        });
    }

    return (
        <div className="containerForm">
            <form action="">
                <span className="closeForm" onClick={onCloseForm} ><svg xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 20 20"><path d="M18.182 0C19.186 0 20 .814 20 1.818v16.364A1.818 1.818 0 0 1 18.182 20H1.818A1.818 1.818 0 0 1 0 18.182V1.818C0 .814.814 0 1.818 0h16.364Zm-5.975 6.818L10.01 9.01L7.815 6.818a.682.682 0 0 0-.88-.072l-.084.072a.682.682 0 0 0 0 .964l2.195 2.193l-2.195 2.193a.682.682 0 1 0 .964.965l2.195-2.195l2.197 2.195c.24.24.613.263.88.071l.084-.072a.682.682 0 0 0 0-.964l-2.196-2.193l2.195-2.193a.682.682 0 0 0-.963-.964Z"/></svg></span>
                <h4>{(proveedorSelected) ? "Editar" : "Agregar"} Proveedor</h4>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Nombre</p>
                        <input type="text" name="name_prov" placeholder="Nombre Proveedor" value={name_prov} onChange={onChangeProveedor} />
                    </div>
                </div>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Telefono</p>
                        <input type="text" name="phone_prov" placeholder="462 322 11 11" value={phone_prov} onChange={onChangeProveedor} />
                    </div>
                </div>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Direccion</p>
                        <input type="text" name="address_prov" placeholder="El Cantaor #321, Purisma, Leon Gto" value={address_prov} onChange={onChangeProveedor} />
                    </div>
                </div>
                {(errorFormProv) ? <p className='error'>**Falta seleccionar o llenar algun campo</p> : null}
                <div className="buttonsForm">
                    <span className="btn escForm" onClick={onCloseForm}>Cancelar</span>
                    <span className="btn addForm" onClick={onSubmitProv}>{(proveedorSelected) ? "Actualizar" : "Agregar"}</span>
                </div>
            </form>
        </div>
    );
}
 
export default FormProv;