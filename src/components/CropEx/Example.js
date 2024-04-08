import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import './example.css'

const Example = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  
  const [cropSize, setCropSize] = useState({ width: 400, height: 400 })
  const [zoom, setZoom] = useState(1)
  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }
    return (        
        <div className="App">
            <div className="crop-container">
                <Cropper
                image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b6036ae2-c9c4-4e26-8387-91e86c51363f/calzado-air-jordan-1-low-se-J0nqwk.png"
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                cropSize={cropSize}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                onCropSizeChange={setCropSize}
                />
            </div>
            <div className="controls">
                <input
                type="range"
                value={zoom}
                min={-3}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                onChange={(e) => {
                    setZoom(e.target.value)
                }}
                className="zoom-range"
                />
            </div>
        </div>
    );
}
 
export default Example;