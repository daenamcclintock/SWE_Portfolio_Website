import React, { useRef } from 'react';
import { SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import emailjs from '@emailjs/browser';
import { ContactSection, Image, LeftSection, RightSection, ContactForm, ContactButton, ContactInput, ContactMessage, ContactLabel } from './ContactStyles';

const Contact = ({ successNotficiation, failNotification, open }) => {

  // Send Email
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'portfolio_website', form.current, 'SbJwbvEIoRP7VcCav')
      .then((result) => {
          console.log(result.text);
          successNotficiation()
      },
      (error) => {
          console.log(error.text);
          failNotification()
      });
      e.target.reset()
  };

  return (
    <ContactSection row nopadding id="contact" open={open}>
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
              <ContactButton type="submit" value="Send">
                Send
              </ContactButton>
            </form>
          </ContactForm>
        </LeftSection>
        <br />
        <RightSection>
          <Image src={"/images/Me.png"}/>
        </RightSection>
          <SectionDivider/>
    </ContactSection>
  )
};

export default Contact;
