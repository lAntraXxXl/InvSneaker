import { useState } from "react";
import logo from "../media/logo.svg";

const Menu = () => {
    const [showMenu_User, setShowMenu_User] = useState(false);

    const userMenuOptions = () => {
        if (showMenu_User) {
            setShowMenu_User(false);
        } else {
            setShowMenu_User(true);
        }
    };

    return (
        <header className="menu">
            <div className="logo">
                <img src={logo} alt="logo" />
                <div className="title_app">
                    <h1>La Fresa</h1>
                    <span>Sneaker</span>
                </div>
            </div>
            <div className="user">
                <div className="canvUser" onClick={userMenuOptions}>
                    <img src="" alt="" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="128"
                        viewBox="0 0 256 256"
                    >
                        <g fill="#000000">
                            <path
                                d="M224 128a95.76 95.76 0 0 1-31.8 71.37A72 72 0 0 0 128 160a40 40 0 1 0-40-40a40 40 0 0 0 40 40a72 72 0 0 0-64.2 39.37A96 96 0 1 1 224 128Z"
                                opacity=".2"
                            />
                            <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM74.08 197.5a64 64 0 0 1 107.84 0a87.83 87.83 0 0 1-107.84 0ZM96 120a32 32 0 1 1 32 32a32 32 0 0 1-32-32Zm97.76 66.41a79.66 79.66 0 0 0-36.06-28.75a48 48 0 1 0-59.4 0a79.66 79.66 0 0 0-36.06 28.75a88 88 0 1 1 131.52 0Z" />
                        </g>
                    </svg>
                    <p>Juan Mtz.</p>
                </div>
                {showMenu_User ? (
                    <div className="userOptions">
                        <ul>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#000000"
                                        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2V4a8 8 0 1 1 0 16"
                                    />
                                </svg>
                                <p>Modo Oscuro</p>
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#000000"
                                        d="M5 21q-.825 0-1.412-.587T3 19v-3q0-.425.288-.712T4 15q.425 0 .713.288T5 16v3h14V5H5v3q0 .425-.288.713T4 9q-.425 0-.712-.288T3 8V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm6.65-8H4q-.425 0-.712-.288T3 12q0-.425.288-.712T4 11h7.65L9.8 9.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L14.8 11.3q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-3.575 3.575q-.3.3-.712.288T9.8 16.25q-.275-.3-.288-.7t.288-.7z"
                                    />
                                </svg>
                                <p>Salir</p>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </header>
    );
};

export default Menu;
