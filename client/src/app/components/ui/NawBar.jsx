import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserAdmin, getIsLoggedIn } from "../../store/users";
import NavProfile from "./navProfile";
import { useTheme } from "../../hooks/useTheme";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const isAdmin = useSelector(getCurrentUserAdmin());
    const { theme, setTheme } = useTheme();
    const handleClick = () => {
        setTheme(preveState => preveState === "light" ? "dark" : "light");
    };
    return (
        <div className="d-flex div-nawBar ">
            <div className="nawbar-left">
                <button className="dark-ligth-theme-button" onClick={() => handleClick()}>{theme + " theme"}</button>
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
