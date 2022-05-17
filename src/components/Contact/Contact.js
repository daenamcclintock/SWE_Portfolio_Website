import React, { useState, useRef } from 'react';
import axios from "axios"
import { Spinner, Container, Carousel, Button, Card } from "react-bootstrap";

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import emailjs from '@emailjs/browser';
import { ContactSection, Image, LeftSection, RightSection, ContactForm, ContactButton, ContactInput, ContactMessage, ContactLabel } from './ContactStyles';
import AutoDismissAlert from '../../constants/AutoDismissAlert';

const Contact = () => {
  const [msgAlerts, setMsgAlerts] = useState([])

  // Msg Alert
	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

  // Send Email
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
    <ContactSection row nopadding id="contact">
        <LeftSection>
          <SectionTitle main center>Let's Chat!</SectionTitle>
          <ContactForm>
            <form ref={form} onSubmit={sendEmail}>
              <ContactLabel>Name</ContactLabel>
              <br />
                <ContactInput type="text" name="name" placeholder='Name' />
              <br /><br />
              <ContactLabel>Email</ContactLabel>
              <br />
                <ContactInput type="email" name="email" placeholder='Email'  />
              <br /><br />
              <ContactLabel>Subject</ContactLabel>
              <br />
                <ContactInput type="text" name="subject"  placeholder='Subject'/>
              <br /><br />
              <ContactLabel>Message</ContactLabel>
              <br />
                <ContactMessage name="message" placeholder='Message' />
                <br />
                <ContactButton type="submit" value="Send">Send</ContactButton>
            </form>
          </ContactForm>
        </LeftSection>
        <br />
        <RightSection>
          <Image src={'https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/36742202_1801106396649810_5733688723485229056_n.jpg?_nc_cat=106&ccb=1-6&_nc_sid=174925&_nc_ohc=W8KvDrVgbycAX9ef_h7&_nc_ht=scontent-lax3-2.xx&oh=00_AT8eh8RJXN5SyQ960b1b1PFMRMez-B3Se5dJHFwVFCABsg&oe=629D3742'}/>
        </RightSection>
        {msgAlerts.map((msgAlert) => (
          <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
          deleteAlert={deleteAlert}
					/>
          ))}
          <SectionDivider/>
    </ContactSection>
  )
};

export default Contact;
