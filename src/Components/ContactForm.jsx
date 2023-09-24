const ContactForm = () => {
  return (
    <div>
      <form name="ContactForm">
        <label htmlFor="First-Name">First Name</label>
        <input id="First-Name" className="singleInput" name="firstName" />
        <label htmlFor="Last-Name">Last Name</label>
        <input id="Last-Name" className="singleInput" name="lastName" />
        <label htmlFor="Org">Organization</label>
        <input id="Org" className="singleInput" name="Org" />
      </form>
    </div>
  );
};
export default ContactForm;
