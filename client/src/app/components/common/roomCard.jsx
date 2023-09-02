import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RoomCard = ({ room }) => {
    const history = useHistory();
    const handleChange = (id) => {
        history.push(`hotelRooms/${id}`);
    };
    return <div className="room-card">
        <p className="text room-card-number" key={room._id}>{room.Room} </p>
        {/* <p className="text room-card-title">Фото</p> */}
        <div className="small-img-block">
            <img className="small-img" src={room.img} alt="" />
        </div>
        <button className="room-button" onClick={() => handleChange(room._id)}>Открыть</button>
    </div>;
};

RoomCard.propTypes = {
    room: PropTypes.object
};

export default RoomCard;
