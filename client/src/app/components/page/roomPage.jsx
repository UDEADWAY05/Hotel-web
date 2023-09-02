import React, { useState } from "react";
import RoomPageInfo from "../ui/roomPageInfo";
import PropTypes from "prop-types";
import RoomPageEdit from "../ui/roomPageEdit";

const RoomPage = ({ id }) => {
    const [isEdit, setIsEdit] = useState(false);
    const toggleFormType = () => {
        setIsEdit(prevState => !prevState);
    };
    return <>
        {isEdit
            ? <>
                <RoomPageEdit id={id} onToggle={toggleFormType} />
            </>
            : <>
                <RoomPageInfo id={id} onToggle={toggleFormType} />
            </>}
    </>;
};

RoomPage.propTypes = {
    id: PropTypes.string
};

export default RoomPage;
