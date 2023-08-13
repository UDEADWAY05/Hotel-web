import React, { useEffect, useState } from "react";
import api from "../../../api";

const AdminPanle = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        api.hotel.fetchAll().then((data) => setRooms(data))
    }, [])
    useEffect(() => {
        console.log(rooms)
    }, [rooms])
    const getStyleByAvailable = (status) => {
        const style = status ? "ars-place-available" : "ars-place-occupied" 
        return "ar-status-place " + style
    }

    if (rooms[0] !== undefined) {
        return <div>
                <p className="mt-2 text text-title">Панель администратора</p> <div className="Admin-panel">
                <p className="mt-2 text text-title">Статус номеров</p>
                <div className="admin-room-status mt-3">
                    {rooms.map((r) => {
                        return <div className={getStyleByAvailable(r.available)}>
                            <p className="ar-status-place-text">
                                {r.Room}
                            </p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    } 
    return <div>
        <p className="mt-2 text text-title">Панель администратора</p>
        <p className="text rooms-card text text-title">loading...</p>
    </div>
}
 
export default AdminPanle;