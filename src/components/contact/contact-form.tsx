import React, { useEffect, useRef, useState } from 'react';
import classes from '@/styles/contact-form.module.css';
import axios, { AxiosError } from 'axios';
import NotificationComp from '@/components/ui/notification';
import { Notification, Status } from '@/models';

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [requestStatus, setRequestStatus] = useState<Status | null>(null);

  useEffect(() => {
    if (requestStatus === 'success') {
      const timerId = setTimeout(() => {
        setRequestStatus(null);
      }, 3000);

      return () => {
        clearTimeout(timerId);
      }
    }
  }, [requestStatus]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setLoading(true);
    setRequestStatus('pending')

    try {
      const body = {
        email: emailRef.current?.value,
        name: nameRef.current?.value,
        message: messageRef.current?.value
      };

      await axios.post('/api/contact', body);

      setRequestStatus('success')
    } catch (e) {
      if (e instanceof AxiosError) {
        setRequestStatus('error');
        const errorMessage = e.response?.data?.message as string;
        setErrorMessage(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  }

  let notification: Notification | null;

  switch (requestStatus) {
    case 'pending':
      notification = {
        status: 'pending',
        title: 'Sending message...',
        message: 'Your message is on its way!',
      };
      break;
    case 'success':
      notification = {
        status: 'success',
        title: 'Success!',
        message: 'Message sent successfully!',
      };
      break;
    case 'error':
      notification = {
        status: 'error',
        title: 'Error!',
        message: errorMessage,
      };
      break;
    default:
      notification = null;
      break;
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
      {notification && <NotificationComp item={notification}/>}
    </section>
  )
}

export default ContactForm;
