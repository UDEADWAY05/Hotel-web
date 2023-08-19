import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomById, updateRoom } from "../../store/rooms";
import { getCurrentUserData, getUsersLoadingStatus, updateUser } from "../../store/users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";

const RoomPage = ({ id }) => {
    const isLoading = useSelector((getUsersLoadingStatus()));
    const history = useHistory();
    const dispatch = useDispatch();
    const room = useSelector(getRoomById(id));
    const authUser = useSelector(getCurrentUserData());
    const handleChange = (id) => {
        const newRoom = { ...room, available: false };
        console.log(newRoom);
        const newUser = { ...authUser, rooms: [...authUser.rooms, id] };
        dispatch(updateUser(newUser));
        dispatch(updateRoom(newRoom));
        history.push(`/hotelRooms`);
    };
    console.log(room);
    if (isLoading === false && room !== undefined) {
        return <div className="room-page" key={room.Room}>
            {room.img ? <img className="room-pictures" src={room.img} /> : <div className="room-pictures"><p className="text room-pictures-text">Фото</p></div>}
            <div className="room-page-right">
                <p className="text room-text-right">{room.about}</p>
                <button className="room-button room-button-right" onClick={() => handleChange(id)}><p className="text">Забронировать</p></button>
            </div>
        </div>;
    };
    return <p className="text rooms-card text text-title">loading...</p>;
};

RoomPage.propTypes = {
    id: PropTypes.string
};

export default RoomPage;
