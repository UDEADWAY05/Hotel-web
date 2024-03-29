import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "form-input" + (type === "password" ? " form-input-password" : "") + (error ? " is-invalid" : "");
    };
    const toggleShowPassword = (params) => {
        setShowPassword((prevState) => !prevState);
    };
    return (<div className="mb-4">
        <div className="input-group has-validation form-input-group">
            <input
                type={showPassword ? "text" : type}
                id={name}
                placeholder={label}
                value={value}
                name={name}
                onChange={handleChange}
                className={getInputClasses()} />
            {type === "password" && (<button type="button" className="form-input-button" onClick={toggleShowPassword}>
                <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
            </button>)}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    </div>
    );
};
TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
