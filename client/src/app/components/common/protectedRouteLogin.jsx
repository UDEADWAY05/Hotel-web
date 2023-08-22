import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";

const ProtectedRouteLogin = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return <Route {...rest} render={(props) => {
        if (isLoggedIn === true) {
            return <Redirect to={{
                pathname: "/hotelRooms"
            }} />;
        } else {
            return Component ? <Component {...props} /> : children;
        }
    }} />;
};

ProtectedRouteLogin.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProtectedRouteLogin;
