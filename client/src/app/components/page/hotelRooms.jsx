import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RoomsCard from "../common/hotelRoom";
import RoomPage from "./roomPage";


const HotelRooms = () => {
    const params = useParams();
    const { roomId } = params;
    return roomId
        ? <div>
            <p className="mt-2 text text-title">Сраница номера</p>
            <RoomPage id={roomId} />
        </div>
        : <div>
            <p className="mt-2 text text-title">Доступные номера</p>
            <RoomsCard />
    </div>
}
 
export default HotelRooms;