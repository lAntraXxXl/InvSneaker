import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import InventarioState from "./context/inventario/inventarioState";
import ProveedorState from "./context/proveedor/proveedorState";
import ProductoState from "./context/producto/productoState";
import ModalsState from "./context/modals/modalsState";
import Stock from "./components/stock/Stock";
import Inventario from "./components/inventario/Inventario";
import NotFound from "./components/layout/NotFound";
import Proveedor from "./components/proveedor/Proveedor";
import Producto from "./components/producto/Producto";
import Example from "./components/CropEx/Example";
import Vendedor from "./components/vendedor/Vendedor";
import VendedorState from "./context/vendedor/vendedorState";
import Login from "./components/login/Login";
import AuthState from "./context/autenticacion/authState";
import RutaPrivada from "./components/rutas/RutaPrivada";

function App() {
    return (
        <ProductoState>
            <ProveedorState>
                <InventarioState>
                    <VendedorState>
                        <ModalsState>
                            <AuthState>
                                <BrowserRouter>
                                    <Routes>
                                        <Route
                                            path="*"
                                            element={<NotFound />}
                                        />
                                        <Route index element={<Login />} />
                                        <Route element={<RutaPrivada />}>
                                            <Route
                                                path="/inventario"
                                                element={<Inventario />}
                                            />
                                            <Route
                                                path="/stock"
                                                element={<Stock />}
                                            />
                                            <Route
                                                path="/proveedor"
                                                element={<Proveedor />}
                                            />
                                            <Route
                                                path="/producto"
                                                element={<Producto />}
                                            />
                                            <Route
                                                path="/vendedor"
                                                element={<Vendedor />}
                                            />
                                            <Route
                                                path="/example"
                                                element={<Example />}
                                            />
                                        </Route>
                                    </Routes>
                                </BrowserRouter>
                            </AuthState>
                        </ModalsState>
                    </VendedorState>
                </InventarioState>
            </ProveedorState>
        </ProductoState>
    );
}

export default App;
