import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomById, updateRoom } from "../../store/rooms";
import { getCurrentUserData, getIsLoggedIn, getUsersLoadingStatus, updateUser } from "../../store/users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";

const RoomPage = ({ id }) => {
    const isLoading = useSelector((getUsersLoadingStatus()));
    const history = useHistory();
    const dispatch = useDispatch();
    const room = useSelector(getRoomById(id));
    const isLoggedIn = useSelector(getIsLoggedIn());
    const authUser = useSelector(getCurrentUserData());
    const handleChange = (id) => {
        if (isLoggedIn === true) {
            const newRoom = { ...room, available: false };
            const newUser = { ...authUser, rooms: [...authUser.rooms, id] };
            dispatch(updateUser(newUser));
            dispatch(updateRoom(newRoom));
            history.push(`/hotelRooms`);
        };
    };
    if (isLoading === false && room !== undefined) {
        return <div className="room-page" key={room.Room}>
            {room.img ? <img className="room-pictures" src={room.img} /> : <div className="room-pictures"><p className="text room-pictures-text">Фото</p></div>}
            <div className="room-page-right">
                <div className="room-text-right">
                    <p className="text room-text-right-title">{room.about}</p>
                    {isLoggedIn === false && <p className="text room-text-right-subtitle">Что бы забронировать номер нужно войти в аккаунт!</p>}
                </div>
                <div className="room-button-div">
                    <button className=" room-button-right" disabled={!isLoggedIn === true} onClick={() => handleChange(id)}><p className="text">Забронировать</p></button>
                </div>
            </div>
        </div>;
    };
    return <p className="text rooms-card text text-title">loading...</p>;
};

RoomPage.propTypes = {
    id: PropTypes.string
};

export default RoomPage;
