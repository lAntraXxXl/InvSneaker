import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
    const [showNav, setShowNav] = useState(false);

    const show = () => {
        if (showNav) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    };

    return (
        <div className="container_nav">
            <ul className={showNav ? "minimize" : ""}>
                <li>
                    <div className="principal">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            onClick={show}
                        >
                            <path d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z" />
                        </svg>
                    </div>
                </li>
                <li>
                    <NavLink to={"/inventario"}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g fill="none" stroke-width="1.5">
                                    <path d="M16 4.002c2.175.012 3.353.109 4.121.877C21 5.758 21 7.172 21 10v6c0 2.829 0 4.243-.879 5.122C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.878C3 20.242 3 18.829 3 16v-6c0-2.828 0-4.242.879-5.121c.768-.768 1.946-.865 4.121-.877" />
                                    <path
                                        stroke-linecap="round"
                                        d="M10.5 14H17M7 14h.5M7 10.5h.5m-.5 7h.5m3-7H17m-6.5 7H17"
                                    />
                                    <path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5v-1Z" />
                                </g>
                            </svg>
                        </div>
                        <p>Inventario</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/stock"}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    stroke="none"
                                    d="M12 6V0H4v6H0v7h16V6h-4zm-5 6H1V7h2v1h2V7h2v5zM5 6V1h2v1h2V1h2v5H5zm10 6H9V7h2v1h2V7h2v5zM0 16h3v-1h10v1h3v-2H0v2z"
                                />
                            </svg>
                        </div>
                        <p>Stock</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Producto"}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2ZM7 7h.01"
                                />
                            </svg>
                        </div>
                        <p>Productos</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Proveedor"}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 14 14"
                            >
                                <g
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                >
                                    <path d="M1.358 2.266h11.284s.858 0 .858.858v7.752s0 .858-.858.858H1.358s-.858 0-.858-.858V3.124s0-.858.858-.858M9.36 5.88h1.986M9.36 7.849h1.986" />
                                    <path d="M3.507 6.208a1.64 1.64 0 1 0 3.282 0a1.64 1.64 0 0 0-3.282 0Z" />
                                    <path d="M2.654 9.473a3.17 3.17 0 0 1 1.064-1.19a2.62 2.62 0 0 1 1.43-.434c.502 0 .994.15 1.431.434a3.17 3.17 0 0 1 1.064 1.19" />
                                </g>
                            </svg>
                        </div>
                        <p>Proveedor</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Vendedor"}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h3m8 0h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"
                                />
                            </svg>
                        </div>
                        <p>Vendedor</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;
