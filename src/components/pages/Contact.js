import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSucessMessage, setShowSucessMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (email.length == 0) {
      setErrorMessage("Email is required");
    } else if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    } else if (validateEmail(email)) {
      setErrorMessage("");
      return;
    }
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
    if (userName.length == 0) {
      setErrorMessage("Name is required");
    } else {
      setErrorMessage("");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (message.length == 0) {
      setErrorMessage("Message is required");
    } else {
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      email.length > 0 &&
      userName.length > 0 &&
      message.length > 0 &&
      errorMessage.length === 0
    ) {
      setUserName("");
      setMessage("");
      setEmail("");
      setShowSucessMessage(true);
    } else {
      setErrorMessage("Please fill out all fields!");
    }
  };

  return (
    <div>
      {showSucessMessage == true ? (
        <Alert key="success" variant="success">
          Thank you for contacting me!
        </Alert>
      ) : (
        ""
      )}
      {errorMessage.length > 0 ? (
        <Alert key="danger" variant="danger">
          {errorMessage}
        </Alert>
      ) : (
        ""
      )}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={handleEmailChange}
            onBlur={handleEmailChange}
            onFocus={() => setShowSucessMessage(false)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            value={userName}
            placeholder="Enter Name"
            onChange={handleNameChange}
            onBlur={handleNameChange}
            onFocus={() => setShowSucessMessage(false)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            value={message}
            placeholder="Enter Message"
            onChange={handleMessageChange}
            onBlur={handleMessageChange}
            onFocus={() => setShowSucessMessage(false)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );

  // return (
  //   <div>
  //     <p>Hello {userName}</p>
  //     <form className="form">
  //       <input
  //         value={email}
  //         name="email"
  //         onChange={handleEmailChange}
  //         onBlur={handleEmailChange}
  //         type="email"
  //         placeholder="email"
  //       />
  //       <input
  //         value={userName}
  //         name="userName"
  //         onChange={handleNameChange}
  //         onBlur={handleNameChange}
  //         type="text"
  //         placeholder="name"
  //       />
  //       <input
  //         value={message}
  //         name="message"
  //         onChange={handleMessageChange}
  //         onBlur={handleMessageChange}
  //         type="text"
  //         placeholder="Message"
  //       />
  //       <button type="button" onClick={handleFormSubmit}>
  //         Submit
  //       </button>
  //     </form>
  //     {errorMessage && (
  //       <div>
  //         <p className="error-text">{errorMessage}</p>
  //       </div>
  //     )}
  //   </div>
  // );
}

export default Contact;
