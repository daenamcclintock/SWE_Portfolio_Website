import React, { useState } from 'react';
import axios from "axios"
import { Spinner, Container, Carousel, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, ContactForm } from './ContactStyles';

// const nodemailer = require('nodemailer')


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

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'daena.c.mcclintock@gmail.com',
  //     password: 'Barcelona1029$'
  //   },
  // })
  
  // const options = {
  //   from: 'daena.c.mcclintock@gmail.com',
  //   to: email,
  //   subject: subject,
  //   text: message
  // }

  // const sendMessage = () => {
  //   transporter.sendMail(options, function (err, info) {
  //     if(err) {
  //       console.log(err)
  //     }
  //     console.log('Sent: ', info.response)
  //   })
  // }

  console.log('THIS IS EMAIL', email)
  console.log('THIS IS SUBJECT', subject)
  console.log('THIS IS message', message)

  return (
    <Section>
      <SectionTitle>Let's Chat!</SectionTitle>
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
          onClick={''}>SEND MESSAGE</Button>
        </Card.Footer>
      </Card>
      <br />
      <SectionDivider/>
    </Section>
  )
};

export default Acomplishments;
