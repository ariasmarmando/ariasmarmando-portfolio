import "../CSS/ContactForm.css";
const ContactForm = (props) => {
  return (
    <div className="formInput">
      <label htmlFor={props.id}>{props.placeholder}</label>
      <input ref={props.refer} placeholder={props.placeholder} id={props.id} />
    </div>
  );
};
export default ContactForm;
