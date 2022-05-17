import React, { useState, useRef } from 'react';
import axios from "axios"
import { Spinner, Container, Carousel, Button, Card } from "react-bootstrap";

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import emailjs from '@emailjs/browser';

// const nodemailer = require('nodemailer')


const Contact = () => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setSubject("");
  };

  console.log('THIS IS EMAIL', email)
  console.log('THIS IS SUBJECT', subject)
  console.log('THIS IS message', message)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_website', form.current, 'SbJwbvEIoRP7VcCav')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <Section>
      <SectionTitle>Let's Chat!</SectionTitle>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <br />
            <input type="text" name="name" placeholder='Name' />
          <br /><br />
          <label>Email</label>
          <br />
            <input type="email" name="email" placeholder='Email'  />
          <br /><br />
          <label>Subject</label>
          <br />
            <input type="text" name="subject"  placeholder='Subject'/>
          <br /><br />
          <label>Message</label>
          <br />
            <textarea name="message" cols='30' rows='8' placeholder='Your message' />
            <br />
            <input type="submit" value="Send" />
        </form>
      <br />
      <SectionDivider/>
    </Section>
  )
};

export default Contact;
