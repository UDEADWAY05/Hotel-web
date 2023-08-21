import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import "../../../css/index.css";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, signUp } from "../../store/users";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const RegistrForm = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const [errors, setErrors] = useState({});
    const validatorConfig = {
        login: {
            isRequired: {
                message: "login обязателен для заполнения"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хоть одну заглавную букву"
            },
            isCounteinDigit: {
                message: "Пароль должен содержать хоть одну цифру"
            },
            min: {
                message: "Пароль должен быть минимум из 8 символов",
                value: 8
            }
        }
    };
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    useEffect(() => {
        validate();
    }, [data]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signUp(data));
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <TextField
                label="Логин"
                name="email"
                value={data.login}
                onChange={handleChange}
                error={errors.login}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <button type="submit" disabled={!isValid} className="form-button mx-auto">Регистрация</button>
        </form>
    );
};

export default RegistrForm;
