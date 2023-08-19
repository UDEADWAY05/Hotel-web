import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../components/ui/LoginForm";
import RegistrForm from "../components/ui/RegistrForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(type === "register" ? type : "login");
    const toggleFormType = () => {
        setFormType(prevState => prevState === "register" ? "login" : "register");
    };
    return <div className="container mt-5">
        <div className="form-standart">
            {formType === "register"
                ? <>
                    <h3 className="mb-4 text text-form ">Регистрация</h3>
                    <RegistrForm />
                </>
                : <>
                    <h3 className="mb-4 text text-form ">Вход</h3>
                    <LoginForm />
                    <p className="text-form"><a role="button" onClick={toggleFormType}>Зарегистрироваться</a></p>
                </>}
        </div>
    </div>;
};

export default Login;
