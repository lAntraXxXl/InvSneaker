import { useContext, useEffect, useState } from "react";
import productoContext from "../../context/producto/productoContext";
import Colors from "./Colors";
import EditImage from "./EditImage";


const FormProducto = () => {

    const prodContext = useContext(productoContext);
    const {selectColor,listColors,showListColor,closeFormProd,showErrorFormProd,errorFormProd,saveProduct,updateProd,productoSelected,clearProdSelected} = prodContext;

    const [imageProd, setImageProd] = useState("");
    const [editImg, setEditImg] = useState(false);


    useEffect(() =>{
        if(productoSelected !== null){
            setProducto(productoSelected);
            //setImageEdited(productoSelected.img_prod);
        }else{
            setProducto({
                img_prod:'',
                modelo_prod:'',
                marca_prod:'',
                primary_color:'',
                primary_code_color:'',
                second_color:'',
                second_code_color:''
            })
        }
    },[productoSelected])

    const [producto, setProducto] = useState({
        img_prod:'',
        modelo_prod:'',
        marca_prod:'',
        primary_color:'',
        primary_code_color:'',
        second_color:'',
        second_code_color:''
    });

    const {img_prod,modelo_prod,marca_prod,primary_color,second_color} = producto;


    const onChangeProducto = (e) => {
        setProducto({...producto, [e.target.name]:e.target.value});
        if(e.target.name === 'primary_color'){
            selectColor(e.target.value);
        }
        if(e.target.name === 'second_color'){
            selectColor(e.target.value);
        }
    }

    const onChangeImg = (e) => {
        if(e.target.files && e.target.files.length > 0){
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function(e){
                setImageProd(reader.result);
                setEditImg(true);
            }
        }
    }
    const onEditDone = (imgEditArea) => {
        //crea un canvas del recorte de la imagen
        const canvasElem = document.createElement("canvas");
        canvasElem.width = imgEditArea.width;
        canvasElem.height = imgEditArea.height;

        const context = canvasElem.getContext("2d");
        //cargar imagen seleccionada
        let imgProdOBJ = new Image();
        imgProdOBJ.src = imageProd;
        imgProdOBJ.addEventListener('load', () => {
            
            //dibujamos solo el pedazo de la imagen recortada
            context.drawImage(
                imgProdOBJ,
                imgEditArea.x,
                imgEditArea.y,
                imgEditArea.width,
                imgEditArea.height,
                0,
                0,
                imgEditArea.width,
                imgEditArea.height
            );
            //convertimos el canvas a formato imagen(JPEG formato)
            const dataURL = canvasElem.toDataURL("image/jpeg");
            setProducto({...producto, "img_prod":dataURL});
            setEditImg(false);
        });
    }

    const onEditCancel = () =>{
        setEditImg(false);
        setImageProd("");
        
    }

    const viewColor = (e) =>{        
        if(e.target.name === "primary_color"){
            showListColor(e.target.name)
        }
        if(e.target.name === "second_color"){
            showListColor(e.target.name)
        }
    }
    const onCloseForm = () =>{
        if(productoSelected !== null){
            clearProdSelected()
        }
        closeFormProd();
    }

    const onSubmitProd = () => {
        if(img_prod.trim() === '' || modelo_prod.trim() === '' || marca_prod.trim() === '' || primary_color.trim() === ''){
            showErrorFormProd();
            return
        }
        
        if(productoSelected !== null){
            //mandmos a actualizar al proveedor
            updateProd(producto);
            clearProdSelected();
        }else{
            //mandamos insertar el proveedor
            saveProduct(producto);
        }
        //limpiamos el form
        setProducto({
            img_prod:'',
            modelo_prod:'',
            marca_prod:'',
            primary_color:'',
            primary_code_color:'',
            second_color:'',
            second_code_color:''
        })
    }

    return (
        <div className="containerForm">
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <span className="closeForm" onClick={onCloseForm}><svg xmlns="http://www.w3.org/2000/svg" height="128" viewBox="0 0 20 20"><path d="M18.182 0C19.186 0 20 .814 20 1.818v16.364A1.818 1.818 0 0 1 18.182 20H1.818A1.818 1.818 0 0 1 0 18.182V1.818C0 .814.814 0 1.818 0h16.364Zm-5.975 6.818L10.01 9.01L7.815 6.818a.682.682 0 0 0-.88-.072l-.084.072a.682.682 0 0 0 0 .964l2.195 2.193l-2.195 2.193a.682.682 0 1 0 .964.965l2.195-2.195l2.197 2.195c.24.24.613.263.88.071l.084-.072a.682.682 0 0 0 0-.964l-2.196-2.193l2.195-2.193a.682.682 0 0 0-.963-.964Z"/></svg></span>
                <h4>{(productoSelected) ? "Editar" : "Agregar"} Producto</h4>
                <div className="inputStyle">
                    <div className="prodInput">
                        <p>Modelo</p>
                        <input type="text" name="modelo_prod" placeholder="Air Jordan 1 mid" value={modelo_prod} onChange={onChangeProducto}/>
                    </div>
                </div>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Marca</p>
                        <input type="text" name="marca_prod" placeholder="Converse" value={marca_prod} onChange={onChangeProducto}/>
                    </div>
                </div>
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Color Principal</p>
                        <input type="text" name="primary_color" placeholder="Azul" value={primary_color} onChange={onChangeProducto} onClick={viewColor}/>
                    </div> 
                    {(listColors === "primary_color")
                        ? <Colors producto={producto} setProducto={setProducto} />
                        : null
                    }     
                </div>      
                <div className="inputStyle">
                    <div className="prodInput">                                    
                        <p>Color Secundario</p>
                        <input type="text" name="second_color" placeholder="Selecciona si tiene otro color" value={second_color} onChange={onChangeProducto} onClick={viewColor}/>
                    </div>
                {(listColors === "second_color")
                    ? <Colors producto={producto} setProducto={setProducto}/>
                    : null
                }  
                </div>
                <div className="inputStyle imgProd">
                    <div className="prodInput">
                        <p>Imagen</p>
                        <input type="file" name="img_prod" accept="image/*" onChange={onChangeImg} />
                    </div>
                    <div className="previewImgProd">{(img_prod !== undefined && img_prod !== '') ? <img src={img_prod} alt="" /> : <span>none</span> }</div>
                </div>
                {(editImg) ? <EditImage imageProd={imageProd} onEditDone={onEditDone} onEditCancel={onEditCancel}/> : null }
                {(errorFormProd) ? <p className='error'>**Falta seleccionar o llenar algun campo</p> : null}
                <div className="buttonsForm">
                    <span className="btn escForm" onClick={onCloseForm}>Cancelar</span>
                    <span className="btn addForm" onClick={onSubmitProd}>{(productoSelected) ? "Actualizar" : "Agregar"}</span>
                </div>
            </form>
        </div>
    );
}
 
export default FormProducto;