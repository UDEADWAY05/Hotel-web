import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUserRooms, getUsersLoadingStatus } from "../store/users";
import MyRoomCard from "../components/common/myRoomCard";

const AuthUserRooms = () => {
    const isLoading = useSelector((getUsersLoadingStatus()));
    const userRoom = useSelector(getCurrentUserRooms());
    if (isLoading === false && userRoom !== null) {
        return <div className="myRooms mt-2">
            <p className="text text-title">Мои номера</p>
            <div className="mt-3 myRoom-container">
                {userRoom
                    ? userRoom.map((r) => {
                        return <MyRoomCard roomId={r} key={r} />;
                    })
                    : null}
            </div>
        </div>;
    } return <div>
        <p className="mt-2 text text-title">Мои номера</p>
        <div className="div-loading-circle">
            <div className="circle"></div>
        </div>
    </div>;
};

export default AuthUserRooms;
