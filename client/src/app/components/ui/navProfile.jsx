import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCurrentUserData } from "../../store/users";

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOper] = useState(false);
    const toggleMenu = () => {
        setOper(presState => !presState);
    };
    if (!currentUser) return "loading...";
    return (<div className="dropdown" onClick={toggleMenu}>
        <div className="btn dropdown-toggle d-flex align-items-center">
            <p className="text text-main me-2">{currentUser.email}</p>
        </div>
        <div className={"w-100 dropdown-menu naw-prodile " + (isOpen ? "show" : "")}>
            <Link to={`/myroom`} className="dropdown-item">Мои номера</Link>
            <Link to="/logout" className="dropdown-item">Выход</Link>
        </div>
    </div>);
};

export default NavProfile;
