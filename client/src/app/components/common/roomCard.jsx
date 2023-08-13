import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RoomCard = ({ room }) => {
    const history = useHistory()
    const handleChange = (id) => {
        console.log(id);
        history.push(`hotelRooms/${id}`)
    }

    return <div className="room-card">
        <p className="text room-card-number" key={room._id}>{room.Room} </p>
        <p className="text room-card-title">Фото</p>
        <button className="room-button room-button-card" onClick={()=>handleChange(room._id)}><p className="text">Открыть</p></button>
    </div>;
}
 
export default RoomCard;