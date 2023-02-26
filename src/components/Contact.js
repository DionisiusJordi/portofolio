import { useRef } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';



export const Contact = () => {
  const form = useRef();

  const Result = () => {
    return (
      <p>Your message has been sent</p>
    );
  };

  const [formDetails, setFormDetails] = useState(form);
  const [buttonText, setButtonText] = useState('Send');
  const [result, showResult] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}

const clearFields = () => {
  onFormUpdate('user_name', '');
  onFormUpdate('user_email', '');
  onFormUpdate('message', '');
}

  const handleSubmit = (e) => {
    e.preventDefault();


    // Udah dipastikan ada email dan ada name
    emailjs.sendForm('service_b2soahs', 'template_v5yn4ct', form.current, 'CD5pTO_SWdUnJ44Wj') // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
    .then((result) => {
      console.log(result.text);
      clearFields();
      showResult(true);
    }, (error) => {
      console.log(error.text);
      showResult(true);
  }
  );
};

  // hiding the result message
  setTimeout(() =>{
    showResult(false)
  }, 5000);

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Write me a messsage</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_name" value={formDetails.user_name} placeholder="Your Name" onChange={(e) => onFormUpdate('user_name', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="user_email" value={formDetails.user_email} placeholder="Your Email" onChange={(e) => onFormUpdate('user_email', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit" value="Send"><span>{buttonText}</span></button>
                      <div className="row">{result ? <Result /> : null}</div>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}