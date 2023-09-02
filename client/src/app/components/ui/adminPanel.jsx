import React from "react";
import { useSelector } from "react-redux";
import { getRooms } from "../../store/rooms";
import { getUsersLoadingStatus } from "../../store/users";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AdminCard from "../common/adminCard";

const AdminPanel = () => {
    const isLoading = useSelector((getUsersLoadingStatus()));
    const rooms = useSelector(getRooms());
    if (isLoading === false && (rooms !== null ? rooms[0] !== undefined : "")) {
        return <div>
            <div className="Admin-panel">
                <p className="mt-2 text text-title">Статус номеров</p>
                <div className="admin-room-status mt-3">
                    <AdminCard rooms={rooms} />
                    {
                        rooms.length < 12 && <Link className="link" to="adminPanel/add" key="plus">
                            <div key="plus" className="ar-status-place arc-place-added">
                                <i className="ar-status-place-text bi bi-plus"></i>
                            </div>
                        </Link>
                    }
                </div>
            </div>
        </div>;
    };
    return <div>
        <p className="mt-2 text text-title">Панель администратора</p>
        <div className="div-loading-circle">
            <div className="circle"></div>
        </div>
    </div>;
};

export default AdminPanel;
