import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getRoomById, updateRoom } from "../../store/rooms";
import { getCurrentUserData, updateUser } from "../../store/users";
import PropTypes from "prop-types";

const MyRoomCard = ({ roomId }) => {
    const dispatch = useDispatch();
    const room = useSelector(getRoomById(roomId));
    const authUser = useSelector(getCurrentUserData());
    const history = useHistory();
    const handleChange = (id) => {
        history.push(`hotelRooms/${id}`);
    };
    const handleDelete = (id) => {
        const newRoom = { ...room, available: true };
        const newUser = { ...authUser, rooms: authUser.rooms.filter((r) => r !== id) };
        dispatch(updateUser(newUser));
        dispatch(updateRoom(newRoom));
    };

    return <div className="myRoom-card ">
        <div className="myRom-card-up">
            <p className="text room-card-number" key={room._id}>{room.Room} </p>
            <button className="myRoom-button-delete" onClick={() => handleDelete(room._id)}><i className="bi bi-x-lg"></i></button>
        </div>
        <button className="room-button myRoom-button-card" onClick={() => handleChange(room._id)}>Открыть</button>
    </div>;
};

MyRoomCard.propTypes = {
    roomId: PropTypes.string
};

export default MyRoomCard;
