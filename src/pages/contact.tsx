import { NextPage } from 'next';
import ContactForm from '@/components/contact/contact-form';
import Head from 'next/head';

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!"/>
      </Head>
      <ContactForm/>
    </>
  )
}

export default ContactPage;
