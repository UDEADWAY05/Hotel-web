import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoom, getRoomById, updateRoom } from "../../store/rooms";
import { getCurrentUserData, getIsLoggedIn, getUserById, getUsersLoadingStatus, updateUser } from "../../store/users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";

const RoomPageInfo = ({ id, onToggle }) => {
    const isLoading = useSelector(getUsersLoadingStatus());
    const history = useHistory();
    const dispatch = useDispatch();
    const room = useSelector(getRoomById(id));
    const isLoggedIn = useSelector(getIsLoggedIn());
    const authUser = useSelector(getCurrentUserData());
    const isAvaibleThisUser = authUser ? Boolean(authUser.rooms.find(r => r === id)) : false;
    let user;
    if (room !== undefined) {
        if (room.userId !== null) {
            user = useSelector(getUserById(room.userId));
        };
        user = authUser;
    };
    const getClassesButton = () => {
        if (isLoggedIn) {
            if (room.available) {
                return false;
            };
            return true;
        };
        return true;
    };
    const handleChange = (id) => {
        if (isLoggedIn === true) {
            const newRoom = { ...room, available: false, userId: authUser._id };
            const newUser = { ...authUser, rooms: [...authUser.rooms, id] };
            dispatch(updateUser(newUser));
            dispatch(updateRoom(newRoom));
            history.push(authUser.admin ? `/adminPanel` : `/hotelRooms`);
        };
    };

    const handleCancel = (id) => {
        const newRoom = { ...room, available: true, userId: null };
        const newUser = { ...user, rooms: user.rooms.filter((r) => r !== id) };
        dispatch(updateUser(newUser));
        dispatch(updateRoom(newRoom));
        history.push(authUser.admin ? `/adminPanel` : `/hotelRooms`);
    };
    const handleDelete = (id) => {
        dispatch(deleteRoom(id));
        history.push(authUser.admin ? `/adminPanel` : `/hotelRooms`);
    };

    if (isLoading === false && room !== undefined) {
        return <div className="room-page" key={room.Room}>
            {room.img ? <img className="room-pictures" src={room.img} /> : <div className="room-pictures"><p className="text room-pictures-text">Фото</p></div>}
            <div className="room-page-right">
                <div className="room-text-right-up">
                    <div className="room-buttor-setting">
                        {authUser?.admin && <button onClick={() => onToggle()} className="setting-button">
                            <i className="bi bi-gear"></i>
                        </button>}
                    </div>
                    <div className="room-text-right">
                        <p className="text room-text-right-title">{room.about}</p>
                        {isLoggedIn === false && <p className="text room-text-right-subtitle">Что бы забронировать номер нужно войти в аккаунт!</p>}
                    </div>
                </div>
                <div className="room-button-div">
                    {
                        authUser?.admin && <button className="room-button-right-danger room-button-right-dawn" onClick={() => handleDelete(id)}>
                            <p className="text-button-danger text">Удалить номер</p>
                        </button>
                    }
                    <>{!room.available && (isAvaibleThisUser || authUser.admin)
                        ? <button className="room-button-right" onClick={() => handleCancel(id)}>
                        Отменить бронь
                        </button>
                        : <div>
                            <button className="room-button-right" disabled={getClassesButton()} onClick={() => handleChange(id)}>
                                Забронировать
                            </button>
                        </div>}
                    </>

                </div>
            </div>
        </div>;
    };
    return <div className="div-loading-circle">
        <div className="circle"></div>
    </div>;
};

RoomPageInfo.propTypes = {
    id: PropTypes.string,
    onToggle: PropTypes.func
};

export default RoomPageInfo;
