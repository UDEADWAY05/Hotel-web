import React from "react";
import { useParams } from "react-router";
import RoomPageAdd from "../components/ui/roomPageAdd";
import AdminPanel from "../components/ui/adminPanel";

const AdminPage = () => {
    const params = useParams();
    const { add } = params;
    return <div>
        { add
            ? <>
                <p className="mt-2 text text-title">Создания номера</p>
                <RoomPageAdd />
            </>
            : <>
                <p className="mt-2 text text-title">Панель администратора</p>
                <AdminPanel />
            </>}
    </div>;
};

export default AdminPage;
