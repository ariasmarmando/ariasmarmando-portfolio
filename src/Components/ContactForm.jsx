import "../CSS/ContactForm.css";
const ContactForm = (props) => {
  const { onChange, style, placeholder, ...inputProps } = props;
  return (
    <div className="formInput">
      <label id="" htmlFor={props.id}>
        {props.placeholder}
      </label>
      <input
        {...inputProps}
        placeholder={placeholder}
        id={style}
        onChange={onChange}
      />
    </div>
  );
};
export default ContactForm;
