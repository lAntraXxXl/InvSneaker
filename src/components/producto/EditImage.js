import React, { useState } from 'react'
import Cropper from 'react-easy-crop'

const EditImage = ({imageProd,onEditDone, onEditCancel}) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedArea,setCroppedArea] = useState(null);
    const [cropSize, setCropSize] = useState({ width: 400, height: 400 });

    const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
        //guarda el area de recorte en pixeles
        setCroppedArea(croppedAreaPixels);
    }
    return (
        <div className='containerEdit'>
            <h4>Modo Editar Imagen</h4>
            <Cropper
                image={imageProd}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                cropSize={cropSize}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                onCropSizeChange={setCropSize}
                style={{
                    containerStyle:{
                        width: "100%",
                        height: "80%",
                        backgroundColor: "#FFF",
                        position: "relative"
                    }
                }}
            />
            <div className='options'>
                <span className='btn blueOut' onClick={onEditCancel}>Cancelar</span>
                <span className='btn blueFill' onClick={() => onEditDone(croppedArea)}>Recortar</span>
            </div>
        </div>
    );
}
 
export default EditImage;