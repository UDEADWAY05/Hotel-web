import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NawBar from "./components/ui/NawBar";
import HotelRooms from "./layouts/hotelRooms";
import Login from "./layouts/login";
import AuthUserRooms from "./layouts//myRoom";
import AppLoader from "./components/ui/hoc/appLoader";
import LogOut from "./layouts/logOut";
import ProtectedRoute from "./components/common/protectedRoute";
import ProtectedRouteAdmin from "./components/common/protectedRouteAdmin";
import ProtectedRouteLogin from "./components/common/protectedRouteLogin";
import AdminPage from "./layouts/adminPage";
import { useTheme } from "./hooks/useTheme";

function App() {
    useTheme();
    return (
        <div className="body">
            <AppLoader>
                <NawBar />
                <Switch>
                    <Route path="/hotelRooms/:roomId?" component={HotelRooms} />
                    <ProtectedRouteAdmin path="/adminPanel/:add?" component={AdminPage} />
                    <ProtectedRouteLogin path="/login" component={Login} />
                    <ProtectedRoute path="/myroom" component={AuthUserRooms} />
                    <Route path="/logout" component={LogOut} />

                    <Redirect from="/" to="/hotelRooms" />
                </Switch>
            </AppLoader>
        </div>
    );
};

export default App;
