import Section from "../Blog/Section";
import ContactForm from "./ContactForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ContactUs = () => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [contacts, setContacts] = useState([]);

  const [success, setSuccess] = useState(false);

  const handleFieldChange = (fieldName, fieldValue) => {
    setContact({ ...contact, [fieldName]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contact.firstName &&
      contact.lastName &&
      contact.phone &&
      contact.email &&
      contact.message
    ) {
      const newContact = { ...contact, id: uuidv4() };
      setContacts([...contacts, newContact]);
      setContact({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  };

  useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify([...contacts]));
  }, [contacts]);

  return (
    <div className="container-sm">
      {success && (
        <div className="overlay">
          <h3 className="text-center">Thank you for your message</h3>
        </div>
      )}
      <div className="row mb-4">
        <h2 className="text-center">Contact us</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col align-self-center">
          <div className="row row-cols-1 row-cols-md-3 justify-content-center align-content-center">
            <Section className={"col d-flex flex-column"}>
              <FontAwesomeIcon icon={faMapLocationDot} className="fa-3x mb-3" />
              <p style={{color:"white"}} className="text-center">Real Estate Gothenburg Office</p>
              <p style={{color:"white"}} className="text-center">Avenyn, Gothenburg</p>
            </Section>
            <Section className={"col d-flex flex-column"}>
              <FontAwesomeIcon icon={faPhone} style={{color:"white"}} className="fa-3x mb-3" />
              <p style={{color:"white"}} className="text-center">Real Estate Gothenburg phone number</p>
              <p style={{color:"white"}} className="text-center">09-543-565</p>
            </Section>
            <Section className={"col d-flex flex-column"}>
              <FontAwesomeIcon icon={faEnvelope} style={{color:"white"}} className="fa-3x mb-3" />
              <p style={{color:"white"}} className="text-center">Real Estate Gothenburg Email</p>
              <p style={{color:"white"}} className="text-center">message@realEstateGothenburg.com</p>
            </Section>
          </div>
        </div>
        <div className="col d-flex flex-column justify-content-center">
          <ContactForm
            data={contact}
            onChange={handleFieldChange}
            submit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
 