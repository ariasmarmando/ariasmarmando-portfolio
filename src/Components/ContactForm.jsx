import { useState } from "react";
import "../CSS/ContactForm.css";

const ContactForm = ({ onChange, type, errorMessage, style, placeholder, id, ...inputProps }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="formInput">
            <label
                htmlFor={id}
                data-focused={focused ? "true" : "false"}
            >
                {placeholder}
            </label>
            <input
                {...inputProps}
                id={id}
                type={type}
                placeholder={focused ? "" : placeholder}
                className={`input--${style}`}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                onFocus={() => inputProps.name === "message" && setFocused(true)}
                data-focused={focused ? "true" : "false"}
            />
            <span className="formInput__error">{errorMessage}</span>
        </div>
    );
};

export default ContactForm;