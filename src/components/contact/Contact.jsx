import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jrz31b1', 'template_svroqyo', form.current, '8OQU0P-Oa-0BEAkRO')
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email sent successfully!'); // Optional alert
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email. Please try again.'); // Optional alert
        }
      );
  };

  return (
    <section id='contact'>
      <h2>Get In Touch</h2>
      <h1>Contact Me</h1>
      <div className="container contact__container">
        <div className='contact__options'>
          <article className='contact__option'> 
            <MdOutlineMail className='contact__option-icon' size={30} />
            <h4>Email</h4>
            <h5>kalanakd471@gmail.com</h5>
            <a href="mailto:kalanakd471@gmail.com" target='_blank' rel="noopener noreferrer">Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsTelephone className='contact__option-icon' size={30} /> 
            <h4>Telephone</h4>
            <h5>+94765626471</h5>
            <a href="tel:+94765626471" target='_blank' rel="noopener noreferrer">Take a Call</a>
          </article>

          <article className='contact__option'> 
            <FaWhatsapp className='contact__option-icon' size={30} />
            <h4>Whatsapp</h4>
            <h5>+94765626471</h5>
            <a href="https://api.whatsapp.com/send?phone=+94765626471" target='_blank' rel="noopener noreferrer">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
