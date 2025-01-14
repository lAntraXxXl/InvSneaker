import { useContext, useEffect, useState } from "react";
import inventarioContext from "../../context/inventario/inventarioContext";

const CodeForm = () => {
    const invContext = useContext(inventarioContext);
    const {errorFormInv,closeCodeForm,showErrorFormInv,invSeleccionado,updateMovInv} = invContext;

    useEffect(() => {
        if(invSeleccionado !== null){
            setCode(invSeleccionado);
        }else{
            setCode({
                code_inv:''
            });
        }
    },[invSeleccionado]);

    const [code, setCode] = useState({
        code_inv:''
    });

    const {code_inv} = code;

    const onCode = (e) => {
        setCode({
            ...code,
            [e.target.name]:e.target.value,
            'task_inv':'Enviado'
        });
    }
    const onSubmitCodeForm = () => {
        if(code_inv.trim() === ''){
            showErrorFormInv();
            return
        }
        updateMovInv(code);
        closeCodeForm();
    }

    return (
        <div className="containerForm">
            <form action="" onSubmit={(e) => e.preventDefault()} autocomplete="off">
                <span className="closeForm" onClick={closeCodeForm}><svg xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 20 20"><path d="M18.182 0C19.186 0 20 .814 20 1.818v16.364A1.818 1.818 0 0 1 18.182 20H1.818A1.818 1.818 0 0 1 0 18.182V1.818C0 .814.814 0 1.818 0h16.364Zm-5.975 6.818L10.01 9.01L7.815 6.818a.682.682 0 0 0-.88-.072l-.084.072a.682.682 0 0 0 0 .964l2.195 2.193l-2.195 2.193a.682.682 0 1 0 .964.965l2.195-2.195l2.197 2.195c.24.24.613.263.88.071l.084-.072a.682.682 0 0 0 0-.964l-2.196-2.193l2.195-2.193a.682.682 0 0 0-.963-.964Z"/></svg></span>
                <h4>Ingresar Codigo ML</h4>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Codigo ML</p>
                        <input type="text" name="code_inv" placeholder="Inserta el codigo..." value={code_inv} onChange={onCode} />
                    </div>
                </div>
                {(errorFormInv) ? <p className='error'>**Falta seleccionar o llenar algun campo</p> : null}
                <div className="buttonsForm">
                    <span className="btn escForm" onClick={closeCodeForm}>Cancelar</span>
                    <span className="btn addForm" onClick={onSubmitCodeForm}>Agregar</span>
                </div>
            </form>
        </div>
    );
}
 
export default CodeForm;