import { useState } from "react";
import "../CSS/ContactForm.css";
const ContactForm = (props) => {
  const [focused, setFocused] = useState(false);
  const { onChange, type, errorMessage, style, placeholder, ...inputProps } =
    props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label id="" htmlFor={props.id} focused={focused.toString()}>
        {props.placeholder}
      </label>
      <input
        {...inputProps}
        type={type}
        placeholder={focused == true ? "" : placeholder}
        id={style}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => inputProps.name === "message" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default ContactForm;
