import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoomById, updateRoom } from "../../store/rooms";
import { getCurrentUserData, getUsersLoadingStatus } from "../../store/users";
import PropTypes from "prop-types";
import TextField from "../common/form/textField";

const RoomPageEdit = ({ id, onToggle }) => {
    const isLoading = useSelector(getUsersLoadingStatus());
    const dispatch = useDispatch();
    const room = useSelector(getRoomById(id));
    const [newRoom, setNewRoom] = useState(room);
    const authUser = useSelector(getCurrentUserData());

    const handleChange = (target) => {
        setNewRoom((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const handleSubmit = () => {
        if (authUser?.admin) {
            dispatch(updateRoom(newRoom));
            onToggle();
        };
    };

    if (isLoading === false && room !== undefined) {
        return <div className="room-page" key={room.Room}>
            {newRoom.img ? <img className="room-pictures" src={newRoom.img} /> : <div className="room-pictures"><p className="text room-pictures-text">Фото</p></div>}
            <div className="room-page-right">
                <div className="room-text-right-up">
                    <div className="room-text-right">
                        <TextField label="Информация о номере" name="about" onChange={handleChange} value={newRoom.about}></TextField>
                        <TextField label="Новое изображение" name="img" onChange={handleChange} value={newRoom.img}></TextField>
                        <p className="text room-text-right-subtitle">Примечание: В поле "Новое изображение" вставте ссылку на изображение!</p>
                    </div>
                </div>
                <div className="room-button-div">
                    <button className="room-button-right room-button-right-dawn" onClick={() => onToggle()}>Отмена</button>
                    <button className="room-button-right" onClick={() => handleSubmit(id)}>Сохранить</button>
                </div>
            </div>
        </div>;
    };
    return <div className="div-loading-circle">
        <div className="circle"></div>
    </div>;
};

RoomPageEdit.propTypes = {
    id: PropTypes.string,
    onToggle: PropTypes.func
};

export default RoomPageEdit;
