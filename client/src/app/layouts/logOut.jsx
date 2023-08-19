import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LogOut = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(logOut());
        history.push("/");
    }, []);
    return <h1>Logout...</h1>;
};

export default LogOut;
