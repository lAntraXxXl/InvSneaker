import { useContext, useEffect, useState } from "react";
import vendedorContext from "../../context/vendedor/vendedorContext";

const FormVendedor = () => {
    const vendContext = useContext(vendedorContext);

    const {vendedorSelected,errorFormVendedor,closeFormVendedor,showErrorFormVendedor,clearSelectVendedor,saveVendedor,updateVendedor} = vendContext;

    useEffect(() => {
        if(vendedorSelected !== null){
            setVendedor(vendedorSelected);
        }else{
            setVendedor({
                name_vendedor: '',
                phone_vendedor: '',
                email_vendedor: '',
                status_vendedor: ''
            });
        }
    },[vendedorSelected])

    const [vendedor, setVendedor] = useState({
        name_vendedor: '',
        phone_vendedor: '',
        email_vendedor: '',
        status_vendedor: ''
    });
    const {name_vendedor,phone_vendedor, email_vendedor,status_vendedor} = vendedor;

    const onChangeVendedor = (e) => {
        if(status_vendedor.trim() === ''){
            setVendedor({...vendedor,
                [e.target.name]: e.target.value,
                status_vendedor: "Activo"
            });
            console.log(status_vendedor);
        }else{
            setVendedor({...vendedor, [e.target.name]: e.target.value });
        }
    };

    const onCloseForm = () =>{
        if(vendedorSelected !== null){
            clearSelectVendedor();
        }
        closeFormVendedor();
    }

    const onSubmitVendedor = e => {
        e.preventDefault();
        if(name_vendedor.trim() === '' || phone_vendedor.trim() === '' || email_vendedor.trim() === ''){
            showErrorFormVendedor();
            return
        }

        if(vendedorSelected !== null){
            //mandmos a actualizar al vendedor
            updateVendedor(vendedor);
            clearSelectVendedor();
        }else{
            //mandamos insertar el vendedor
            saveVendedor(vendedor);
        }
        //limpiamos el form
        setVendedor({
            name_vendedor: '',
            phone_vendedor: '',
            email_vendedor: '',
            status_vendedor: ''
        });
    }

    return (
        <div className="containerForm">
            <form action="">
                <span className="closeForm" onClick={onCloseForm} ><svg xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 20 20"><path d="M18.182 0C19.186 0 20 .814 20 1.818v16.364A1.818 1.818 0 0 1 18.182 20H1.818A1.818 1.818 0 0 1 0 18.182V1.818C0 .814.814 0 1.818 0h16.364Zm-5.975 6.818L10.01 9.01L7.815 6.818a.682.682 0 0 0-.88-.072l-.084.072a.682.682 0 0 0 0 .964l2.195 2.193l-2.195 2.193a.682.682 0 1 0 .964.965l2.195-2.195l2.197 2.195c.24.24.613.263.88.071l.084-.072a.682.682 0 0 0 0-.964l-2.196-2.193l2.195-2.193a.682.682 0 0 0-.963-.964Z"/></svg></span>
                <h4>{(vendedorSelected) ? "Editar" : "Agregar"} Vendedor</h4>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Nombre</p>
                        <input type="text" name="name_vendedor" placeholder="Asking Alexandria" value={name_vendedor} onChange={onChangeVendedor} />
                    </div>
                </div>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Telefono</p>
                        <input type="text" name="phone_vendedor" placeholder="462 322 11 11" value={phone_vendedor} onChange={onChangeVendedor} />
                    </div>
                </div>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Telefono</p>
                        <input type="text" name="email_vendedor" placeholder="nombre@algo.com" value={email_vendedor} onChange={onChangeVendedor} />
                    </div>
                </div>
                {
                    (vendedorSelected)
                    ? 
                        <div className="status">
                            <div className="btnRadio">
                                <input type="radio" name="status_vendedor" value="Activo" onClick={onChangeVendedor} checked={status_vendedor === "Activo"} />
                                <p>Activo</p>
                            </div>
                            <div className="btnRadio">
                                <input type="radio" name="status_vendedor" value="Suspendido" onClick={onChangeVendedor} checked={status_vendedor === "Suspendido"} />
                                <p>Suspendido</p>
                            </div>
                        </div>
                    : <input type="hidden" name="status_vendedor" value={status_vendedor}/>
                }
                
                {(errorFormVendedor) ? <p className='error'>**Falta seleccionar o llenar algun campo</p> : null}
                <div className="buttonsForm">
                    <span className="btn escForm" onClick={onCloseForm}>Cancelar</span>
                    <span className="btn addForm" onClick={onSubmitVendedor}>{(vendedorSelected) ? "Actualizar" : "Agregar"}</span>
                </div>
            </form>
        </div>
    );
}
 
export default FormVendedor;