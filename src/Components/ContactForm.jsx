import "../CSS/ContactForm.css";
const ContactForm = (props) => {
  return (
    <div className="formInput">
      <label id="" htmlFor={props.id}>
        {props.placeholder}
      </label>
      <input placeholder={props.placeholder} id={props.id} />
    </div>
  );
};
export default ContactForm;
