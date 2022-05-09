import React, { useState } from 'react';
import axios from "axios"
import { Spinner, Container, Carousel, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, ContactForm } from './ContactStyles';

// ********** NPM Nodemailer **********

const Acomplishments = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setSubject("");
    // navigate("/");
  };

  const sendMessage = (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append("email", email);
      data.append("subject", subject);
      data.append("message", message);

  const dev_url = "http://127.0.0.1:3000/contact";
  const production_url = "/contact"
  axios
      .post(production_url, data)
      .then((response) => {
      console.log(response);
      }, resetForm())
      .catch((error) => {
      console.log(error);
      });
  };

  return (
    <Section>
      <SectionTitle>Contact Me</SectionTitle>
      <Card style={{padding: '5px'}}>
        <form>
            <label>Email</label>
            <br />
            <input
                type="email"
                placeholder="Enter your email address"
                required
                onChange={(e) => setEmail(e.target.value)}
                style={{padding: '5px'}}
            />
            <br /><br />
            <label>Subject</label>
            <br />
            <input
                type="text"
                placeholder="Enter the subject"
                required
                onChange={(e) => setSubject(e.target.value)}
                style={{padding: '5px'}}
            />
            <br />
            <br />
            <label>Message</label>
            <br />
            <textarea
                cols="30"
                rows="10"
                placeholder="Type your message here"
                required
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
        </form>
        <br />
        <Card.Footer>
          <Button
          style={{padding: '5px', }}
          onClick={sendMessage}>SEND MESSAGE</Button>
        </Card.Footer>
      </Card>
      <br />
      <SectionDivider/>
    </Section>
  )
};

export default Acomplishments;
