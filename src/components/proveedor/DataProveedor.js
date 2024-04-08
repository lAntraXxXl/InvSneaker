import { useContext, useEffect} from "react";
import proveedorContext from "../../context/proveedor/proveedorContext";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const DataProveedor = () => {
    const provContext = useContext(proveedorContext);
    const {proveedores,showMenuActionProv,menuActionProv,closeMenuActionProv,selectProveedor,deleteProveedor,obtenerProveedor} = provContext;

    useEffect(() => {
        obtenerProveedor()
    },[])

    const imgProveedor = (item) => {
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
        if(menuActionProv === id || menuActionProv === ''){
            //mando el id y un falso, porque es el mismo item donde se esta
            //ejecutando la ventana del menu action
            showMenuActionProv(id);
        }
        else{
            closeMenuActionProv(id);
            showMenuActionProv(id);
        }
    }

    const selectProv = (provItem) => {
        selectProveedor(provItem);
    }
    const deleteProv = (provItem) => {
        deleteProveedor(provItem);
    }

    return (
        <ul className="containerItemsBOX">
            {
                (proveedores.length === 0)
                ? <li className='empty'>No hay proveedores cargados aun.</li>
                : 
                <TransitionGroup>
                    {proveedores.map(provItem => (
                        <CSSTransition      
                            classNames="anim"              
                            key={provItem.name_prov}
                            timeout={900}
                        >
                            <li className="anim">
                                <div className="containerMenuAction">
                                    <span onClick={() =>getClick(provItem.id_prov)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M6.51 12a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 12v.01a1.5 1.5 0 0 0 1.5 1.5h.01a1.5 1.5 0 0 0 1.5-1.5V12Zm5.5-1.5a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H12a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h.01Zm7 0a1.5 1.5 0 0 1 1.5 1.5v.01a1.5 1.5 0 0 1-1.5 1.5H19a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h.01Z" clip-rule="evenodd"/></svg></span>
                                    {(menuActionProv === provItem.id_prov) ? 
                                        <ul className="menuActions">
                                            <li className="edit" onClick={() => selectProv(provItem)}>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M163 439.573l-90.569-90.569L322.78 98.656l90.57 90.569z" /><path d="M471.723 88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305z" /><path d="M64.021 363.252L32 480l116.737-32.021z" /></svg>
                                                </span><p>Editar</p>
                                            </li>
                                            <li className="delete" onClick={() => deleteProv(provItem)}>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm5-7.1l1.9 1.9q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7q.275.275.7.275t.7-.275l1.9-1.9Z"/></svg>
                                                </span><p>Eliminar</p>
                                            </li>
                                        </ul>
                                        : null
                                    }
                                </div>
                                <div className="imgLetters">
                                    <span>{imgProveedor(provItem.name_prov)}</span>
                                </div>
                                <h4>{provItem.name_prov}</h4>
                                <p>{provItem.phone_prov}</p>
                                <p>{provItem.address_prov}</p>
                                
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            }
        </ul>
    );
}
 
export default DataProveedor;