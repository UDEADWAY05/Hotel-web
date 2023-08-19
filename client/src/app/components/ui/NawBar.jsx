import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserAdmin, getIsLoggedIn } from "../../store/users";
import NavProfile from "./navProfile";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const isAdmin = useSelector(getCurrentUserAdmin());
    return (
        <div className="d-flex div-nawBar ">
            <div className="nawbar-left">
                <Link className="nav-link mt-3" aria-current="page" to={isAdmin === true ? "/adminPanel" : "/"}>
                    <p className="text-main ">Шапка-меню</p>
                </Link>
            </div>
            <div className="nawbar-right d-flex">
                {isLoggedIn
                    ? <NavProfile />
                    : <Link className="nav-link mt-3" aria-current="page" to="/login">
                        <p className="text-main">Вход/Регистрация</p>
                    </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;
