import img01 from '../media/01.jpg'
import img02 from '../media/02.jpg'
import img03 from '../media/03.jpg'
import img04 from '../media/04.jpg'
import img05 from '../media/05.jpg'
import { useContext, useEffect, useState } from "react";
import inventarioContext from "../../context/inventario/inventarioContext";

const DataStock = () => {

    const invContext = useContext(inventarioContext);

    const {obtenerInventario,arrayStock,obtenerStock,inventarioData} = invContext;

    useEffect(() => {
        if(inventarioData.length > 0){
            obtenerStock();
        }else{
            obtenerInventario();
        }
    },[inventarioData]);
    

    return (
        <ul className="containerStock">
            {(arrayStock.length > 0)
                ?   arrayStock.map(itemInv => (
                        <li key={itemInv.proveedor_inv}>
                            <div className='imgProd'><img src={img01} alt="" /></div>
                            <div className='description'>
                                <h3>{itemInv.modelo_inv}</h3>
                                <h5>{itemInv.marca_inv}</h5>
                                <div className='colors'>
                                    <p>Colores:</p>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill='red'><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                                </div>
                                <div className='proveedor'>
                                    <p>Proveedor:</p>
                                    <p>{itemInv.proveedor_inv}</p>
                                </div>
                            </div>
                            <div className='contTallas'>
                                <h3>Tallas</h3>
                                <div className="tallas">
                                    {Object.entries(itemInv.talla_inv).map(([talla,cantidad]) => (
                                        
                                        <div key={talla} className={(cantidad > 0) ? 'inStock' : 'soldOut' }>
                                            <p>{talla}</p>
                                            {(cantidad > 0) ? <span>{cantidad}</span> : null}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                ))
                : <li className='empty'><p>No hay datos aun.</p></li>
            }
           { /*<li>
                <div className='imgProd'><img src={img01} alt="" /></div>
                <div className='description'>
                    <h3>Air Force 1 '07</h3>
                    <h5>Nike</h5>
                    <div className='colors'>
                        <p>Colores:</p>
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill='red'><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                    </div>
                    <div className='proveedor'>
                        <p>Proveedor:</p>
                        <p>Alpine</p>
                    </div>
                </div>
                <div className='contTallas'>
                    <h3>Tallas</h3>
                    <div className="tallas">
                        <div className='soldOut'>
                            <p>22 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>22.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>23 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>23.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>24 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>24.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>25 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>25.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>27 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>27.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>28 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>28.55 mx</p>
                            <span>12</span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='imgProd'><img src={img02} alt="" /></div>
                <div className='description'>
                    <h3>Air Force 1 '07</h3>
                    <h3>Nike</h3>
                    <div className='colors'>
                        <h3>Colores:</h3>
                        <span><svg xmlns="http://www.w3.org/2000/svg"  height="128" viewBox="0 0 256 256"><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg"  height="128" viewBox="0 0 256 256" fill='red'><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                    </div>
                    <div className='proveedor'>
                        <h3>Proveedor:</h3>
                        <p>Alpine</p>
                    </div>
                </div>
                <div className='contTallas'>
                    <h3>Tallas</h3>
                    <div className="tallas">
                        <div className='soldOut'>
                            <p>22 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>22.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>23 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>23.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>24 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>24.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>25 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>25.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>27 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>27.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>28 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>28.55 mx</p>
                            <span>12</span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='imgProd'><img src={img03} alt="" /></div>
                <div className='description'>
                    <h3>Air Force 1 '07</h3>
                    <h3>Nike</h3>
                    <div className='colors'>
                        <h3>Colores:</h3>
                        <span><svg xmlns="http://www.w3.org/2000/svg"  height="128" viewBox="0 0 256 256"><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg"  height="128" viewBox="0 0 256 256" fill='red'><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                    </div>
                    <div className='proveedor'>
                        <h3>Proveedor:</h3>
                        <p>Alpine</p>
                    </div>
                </div>
                <div className='contTallas'>
                    <h3>Tallas</h3>
                    <div className="tallas">
                        <div className='soldOut'>
                            <p>22 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>22.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>23 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>23.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>24 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>24.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>25 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>25.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>27 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>27.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>28 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>28.55 mx</p>
                            <span>12</span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='imgProd'><img src={img04} alt="" /></div>
                <div className='description'>
                    <h3>Air Force 1 '07</h3>
                    <h3>Nike</h3>
                    <div className='colors'>
                        <h3>Colores:</h3>
                        <span><svg xmlns="http://www.w3.org/2000/svg"  height="128" viewBox="0 0 256 256"><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg"  height="128" viewBox="0 0 256 256" fill='red'><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                    </div>
                    <div className='proveedor'>
                        <h3>Proveedor:</h3>
                        <p>Alpine</p>
                    </div>
                </div>
                <div className='contTallas'>
                    <h3>Tallas</h3>
                    <div className="tallas">
                        <div className='soldOut'>
                            <p>22 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>22.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>23 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>23.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>24 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>24.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>25 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>25.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>27 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>27.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>28 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>28.55 mx</p>
                            <span>12</span>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div className='imgProd'><img src={img05} alt="" /></div>
                <div className='description'>
                    <h3>Air Force 1 '07</h3>
                    <h3>Nike</h3>
                    <div className='colors'>
                        <h3>Colores:</h3>
                        <span><svg xmlns="http://www.w3.org/2000/svg"  height="128" viewBox="0 0 256 256"><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                        <span><svg xmlns="http://www.w3.org/2000/svg"  height="128" viewBox="0 0 256 256" fill='red'><path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z"/></svg></span>
                    </div>
                    <div className='proveedor'>
                        <h3>Proveedor:</h3>
                        <p>Alpine</p>
                    </div>
                </div>
                <div className='contTallas'>
                    <h3>Tallas</h3>
                    <div className="tallas">
                        <div className='soldOut'>
                            <p>22 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>22.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>23 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>23.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>24 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>24.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>25 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>25.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>26.5 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>27 mx</p>
                            <span>12</span>
                        </div>
                        <div className='soldOut'>
                            <p>27.5 mx</p>
                        </div>
                        <div className='inStock'>
                            <p>28 mx</p>
                            <span>12</span>
                        </div>
                        <div className='inStock'>
                            <p>28.55 mx</p>
                            <span>12</span>
                        </div>
                    </div>
                </div>
            </li>*/}
        </ul>
    );
}
 
export default DataStock;