import React, { useRef, useState } from 'react';
import classes from '@/styles/contact-form.module.css';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setLoading(true);
    e.preventDefault();

    const data = {
      email: emailRef.current?.value,
      name: nameRef.current?.value,
      message: messageRef.current?.value
    };

    await axios.post('/api/contact', data);
    setLoading(false);
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef}/>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} required ref={messageRef}/>
        </div>
        <div className={classes.actions}>
          {loading && <span>Loading...</span>}
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm;
