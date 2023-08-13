import { Route, Switch, Redirect } from "react-router-dom"
import NawBar from "./components/NawBar";
import HotelRooms from "./components/page/hotelRooms";
import Login from "./components/page/login";
import AdminPanle from "./components/page/adminPanel";
import AuthUserRooms from "./components/page/myRoom";
function App() {
    return (
        <div className="body">
            <NawBar />
            <Switch>
                <Route path="/hotelRooms/:roomId?" component={HotelRooms} />
                <Route path="/adminPanel" component={AdminPanle} />
                <Route path="/login" component={Login} />
                <Route path="/myroom" component={AuthUserRooms} />
                <Redirect exast from="/" to="/hotelRooms" />
            </Switch>
        </div>
    );
};

export default App;
