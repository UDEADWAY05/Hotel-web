import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createdRoom } from "../../store/rooms";
import { getCurrentUserData, getUsersLoadingStatus } from "../../store/users";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PropTypes from "prop-types";
import TextField from "../common/form/textField";

const RoomPageAdd = () => {
    const isLoading = useSelector(getUsersLoadingStatus());
    const history = useHistory();
    const dispatch = useDispatch();
    const [room, setRoom] = useState({ about: "", Room: "", img: "" });
    const authUser = useSelector(getCurrentUserData());
    const handleChange = (target) => {
        setRoom((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const handleCancel = () => {
        history.push("/adminPanel");
    };
    const handleSubmit = () => {
        if (authUser?.admin) {
            const newRoom = { ...room, Room: Number(room.Room) };
            dispatch(createdRoom(newRoom));
            history.push("/adminPanel");
        };
    };
    if (isLoading === false && room !== undefined) {
        return <div className="room-page" key={room.Room}>
            {room.img ? <img className="room-pictures" src={room.img} /> : <div className="room-pictures"><p className="text room-pictures-text">Фото</p></div>}
            <div className="room-page-right">
                <div className="room-text-right-up">
                    <div className="room-text-right">
                        <TextField label="Информация о номере" name="about" onChange={handleChange} value={room.about}></TextField>
                        <TextField label="Фотография номера" name="img" onChange={handleChange} value={room.img}></TextField>
                        <TextField label="Номер комнаты" name="Room" onChange={handleChange} value={room.Room}></TextField>
                        <p className="text room-text-right-subtitle">Примечание: В поле "Фотография номера" вставте ссылку на изображение!</p>
                    </div>
                </div>
                <div className="room-button-div">
                    <button className="room-button-right room-button-right-dawn" onClick={() => handleCancel()}>Отмена</button>
                    <button className="room-button-right" onClick={() => handleSubmit()}>Создать</button>
                </div>
            </div>
        </div>;
    };
    return <div className="div-loading-circle">
        <div className="circle"></div>
    </div>;
};

RoomPageAdd.propTypes = {
    id: PropTypes.string
};

export default RoomPageAdd;
