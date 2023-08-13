import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="d-flex div-nawBar ">
                <div className="nawbar-left">
                    <Link className="nav-link mt-3" aria-current="page" to="/">
                        <p className="text-main ">Шапка-меню</p>
                    </Link>
                </div>
                <div className="nawbar-right">
                    <Link className="nav-link mt-3" aria-current="page" to="/login">
                        <p className="text-main">Вход/Регистрация</p>
                    </Link>
                </div>
        </div>
    );
};

export default NavBar;
