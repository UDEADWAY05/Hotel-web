import React from "react";
import RoomCard from "./roomCard";
import { useSelector } from "react-redux";
import { getRooms } from "../../store/rooms";

const RoomsCard = () => {
    const rooms = useSelector(getRooms());
    if (rooms !== undefined && rooms !== null) {
        const newRooms = Object.keys(rooms);
        return <div className="rooms-card grid-container">{newRooms.map((roomKey) => {
            if (rooms[roomKey].available) {
                return <RoomCard key={roomKey} room={rooms[roomKey]} />;
            };
            return null;
        })}</div>;
    };
    return <div className="div-loading-circle">
        <div className="circle"></div>
    </div>;
};

export default RoomsCard;
