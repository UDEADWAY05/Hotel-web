import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { getCurrentUserAdmin, getIsLoggedIn } from "../../store/users";

const ProtectedRouteAdmin = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const userIsAdmin = useSelector(getCurrentUserAdmin());
    return <Route {...rest} render={(props) => {
        if (!isLoggedIn) {
            if (userIsAdmin === true) {
                return <Redirect to={{
                    pathname: "/adminPanel"
                }} />;
            }
            if (userIsAdmin === false) {
                return <Redirect to={{
                    pathname: "/hotelRooms"
                }} />;
            }
        } else {
            return <Redirect to={{
                pathname: "/hotelRooms"
            }} />;
        }
        return Component ? <Component {...props} /> : children;
    }} />;
};

ProtectedRouteAdmin.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProtectedRouteAdmin;
