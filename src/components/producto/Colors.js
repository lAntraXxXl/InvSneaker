import { useContext} from "react";
import productoContext from "../../context/producto/productoContext";

const Colors = ({producto,setProducto}) => {
    const prodContext = useContext(productoContext);
    const {filterColor,closeListColor,listColors} = prodContext;
    
    const setColor = (color,codeColor) => {
        if(listColors === "primary_color"){
            setProducto({...producto, "primary_color":color, "primary_code_color":codeColor});
        }
        if(listColors === "second_color"){
            setProducto({...producto, "second_color":color, "second_code_color":codeColor});
        }
        closeListColor();
    }
    return (
        <ul className="containerColors">
           { filterColor.map(color => (
                <li className="listColor" key={color.color} onClick={() => setColor(color.name,color.color)}>
                    <span style={{background: color.color}}></span>
                    <p>{color.name}</p>
                </li>
            ))}
        </ul>
    );
}
 
export default Colors;