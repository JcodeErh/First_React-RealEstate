import Button from "../Blog/Button";

const ContactForm = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.name, e.target.value);
  };

  return (
    <>
      <form className="contact-form p-3" onSubmit={props.submit}>
        <label className="form-label mb-1" htmlFor="firstName">
          First Name
        </label>
        <input
          className="form-control mb-4"
          name="firstName"
          type="text"
          value={props.data.firstName}
          onChange={handleChange}
        />
        <label className="form-label mb-1" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="form-control mb-4"
          name="lastName"
          type="text"
          value={props.data.lastName}
          onChange={handleChange}
        />
        <label className="form-label mb-1" htmlFor="phone">
          Phone number
        </label>
        <input
          className="form-control mb-4"
          name="phone"
          type="tel"
          value={props.data.phone}
          onChange={handleChange}
        />
        <label className="form-label mb-1" htmlFor="email">
          Email
        </label>
        <input
          className="form-control mb-4"
          name="email"
          type="email"
          value={props.data.email}
          onChange={handleChange}
        />
        <label className="form-label mb-1" htmlFor="message">
          Questions
        </label>
        <textarea
          className="form-control mb-4"
          name="message"
          type="text"
          rows={5}
          value={props.data.message}
          onChange={handleChange}
        />
        <Button className="btn btn-primary btn-lg" type="submit">
          Send
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
