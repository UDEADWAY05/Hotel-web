import React, { useEffect, useState } from "react";
import api from "../../../api";

const RoomPage = ({ id }) => {
    const [room, setRoom] = useState()
    useEffect(() => {
        api.hotel.getById(id).then((data) => setRoom(data))
    }, [])
    const handleChange = (id) => {
        room.available = false
        api.hotel.update(id, room).then((data) => console.log(data))
    }
    console.log(room)
    if (room !== undefined) {
        return <div className="room-page">
            {room.img ? <img className="room-pictures" src={room.img} /> : <div className="room-pictures"><p className="text room-pictures-text">Фото</p></div>}
            <div className="room-page-right">
                <p className="text room-text-right">{room.about}</p>
                <button className="room-button room-button-right" onClick={()=>handleChange(id)}><p className="text">Забронировать</p></button>
            </div>

        </div>;   
    }
    return <p className="text rooms-card text text-title">loading...</p>;
}
 
export default RoomPage;
//room-pictures