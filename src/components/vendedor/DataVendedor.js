import { useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import vendedorContext from "../../context/vendedor/vendedorContext";

const DataVendedor = () => {

    const vendContext = useContext(vendedorContext);

    const {vendedores,menuActionVendedor,obtenerVendedor,selectVendedor,deleteVendedor,showMenuActionVendedor,closeMenuActionVendedor} = vendContext;

    useEffect(() => {
        obtenerVendedor()
    },[])

    const imgVendedor = (item) => {
        if(item=== ''){
            return
        }
        const textItem = item.split(" ", 2);
        let it= '';
        if(textItem.length === 1){
            it = textItem[0].substring(0,2).toUpperCase()
        }else if(textItem.length === 2){
            it = textItem[0].substring(0,1).toUpperCase()+textItem[1].substring(0,1).toUpperCase();
        }
        
        return it;
    }
    const getClick = (id) => {
        if(menuActionVendedor === id || menuActionVendedor === ''){
            //mando el id y un falso, porque es el mismo item donde se esta
            //ejecutando la ventana del menu action
            showMenuActionVendedor(id);
        }
        else{
            closeMenuActionVendedor(id);
            showMenuActionVendedor(id);
        }
    }

    const selectVend = (vendedorItem) => {
        selectVendedor(vendedorItem);
    }
    const deleteVend = (vendedorItem) => {
        deleteVendedor(vendedorItem);
    }


    return (
        <ul className="containerItemsBOX">
        {
            (vendedores.length === 0)
            ? <li className='empty'>No hay vendedores cargados aun.</li>
            : 
                <TransitionGroup>
                    {vendedores.map(vendedorItem => (
                        <CSSTransition     
                            classNames="anim"              
                            key={vendedorItem.name_vendedor}
                            timeout={900}
                        >
                            <li className="anim">
                                <div className="containerMenuAction">
                                    <span onClick={() =>getClick(vendedorItem.id_vendedor)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6.51 12a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 12v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V12Zm5.5-1.5a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h.01Zm7 0a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H19a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h.01Z" clip-rule="evenodd"/></svg></span>
                                    {(menuActionVendedor === vendedorItem.id_vendedor) ? 
                                        <ul className="menuActions">
                                            <li className="edit" onClick={() => selectVend(vendedorItem)}>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M163 439.573l-90.569-90.569L322.78 98.656l90.57 90.569z" /><path d="M471.723 88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305z" /><path d="M64.021 363.252L32 480l116.737-32.021z" /></svg>
                                                </span><p>Editar</p>
                                            </li>
                                            <li className="delete" onClick={() => deleteVend(vendedorItem)}>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm5-7.1l1.9 1.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l1.9-1.9Z"/></svg>
                                                </span><p>Eliminar</p>
                                            </li>
                                        </ul>
                                        : null
                                    }
                                </div>
                                <div className="imgLetters">
                                    <span>{imgVendedor(vendedorItem.name_vendedor)}</span>
                                </div>
                                <h4>{vendedorItem.name_vendedor}</h4>
                                <p>{vendedorItem.phone_vendedor}</p>
                                <span className={'btn_'+vendedorItem.status_vendedor.toLowerCase()}>{vendedorItem.status_vendedor}</span>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            }
        </ul>
    );
}
 
export default DataVendedor;