import React, { useEffect, useState } from "react";
import api from "../../../api";
import RoomCard from "./roomCard";

const RoomsCard = () => {
    const [rooms, setRooms] = useState()
    useEffect(() => {
        api.hotel.fetchAll().then((data) => setRooms(data))
    }, [])
    if (rooms !== undefined) {
        const newRooms = Object.keys(rooms)
        return <div className="rooms-card grid-container">{newRooms.map((roomKey) => {
            if (rooms[roomKey].available) { return <RoomCard key={roomKey} room={rooms[roomKey]} /> }
        })}</div>;
    };
    return <p className="text rooms-card text text-title">loading...</p>
}
 
export default RoomsCard;