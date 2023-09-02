import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const AdminCard = ({ rooms }) => {
    const getStyleByAvailable = (status) => {
        const style = status ? "ars-place-available" : "ars-place-occupied";
        return "ar-status-place " + style;
    };
    return rooms.map((r) => {
        return <Link className="link" to={"/hotelRooms/" + r._id} key={r.Room}>
            <div key={r.Room} className={getStyleByAvailable(r.available)}>
                <p className="ar-status-place-text">
                    {r.Room}
                </p>
            </div>
        </Link>;
    });
};

export default AdminCard;
