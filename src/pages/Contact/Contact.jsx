import {useState} from 'react';
import styles from './Contact.module.css';

// Components
import Header from '../../components/Header/Header';
import PagesContainer from '../../components/PagesContainer/PagesContainer';
import SectionBreakTitle from '../../components/SectionBreakTitle/SectionBreakTitle';
import UpArrow from '../../components/UpArrow/UpArrow';

// External Libraries
import { HashLink as Link } from "react-router-hash-link";

const EMAIL_CONTACT_EXTERNAL = "https://formsubmit.co/johnathanbryce@gmail.com";

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setTimeout(() => {
      setFormSubmitted(true);
    }, 100);
  };

  // renders when form is submitted
  if (formSubmitted) {
    return (
      <div >
        <Header />
        <div className={styles.form_submitted}>
          <h3> Thank you for reaching out! </h3>
          <p> I'll respond to your email as soon as possible. </p>
          <p> - John Bryce</p>
        </div>
      </div>
    );
  }
  return (
    <div id="contact">
    <SectionBreakTitle header='get in touch.' />
    <PagesContainer>
    <Link to="#about"><UpArrow /></Link>
      <section  className={styles.contact_container}>
        <div className={styles.text_container}>
          {/* <h2> Get In Touch </h2> */}
          <p> I am currently interested in web development opportunities. If you have other requests or questions please do not hesitate to reach out! </p>
          <div className={styles.text_contact_info}>
            <div>
              <p> johnathanbryce@gmail.com </p>
              <p> 604-220-7425 </p>
            </div>
            <div>
              <p><a href="https://www.linkedin.com/in/johnathanbryce/" target="_blank" rel="noreferrer"> linked-in</a></p>
              <p><a href="https://github.com/johnathanbryce" target="_blank" rel="noreferrer"> github </a> </p>
            </div>
          </div>
        </div>

      {/* content separating line */}
      <div className={styles.line_content_break}> </div>
      {/* content separating line */}

        {/* CONTACT FORM: */}
        <div className={styles.form_container}>
          <form
            action={EMAIL_CONTACT_EXTERNAL}
            onSubmit={handleFormSubmit}
            method="POST"
            target="_blank"
          >
            <div className={styles.form_name_email_container}>
              <input type="text" placeholder="Your name" name="name" required />
              <input type="email" placeholder="Your email" name="email" required />
            </div>
            <input type="text" placeholder="Subject" name="subject"  required/>
            <textarea
              placeholder="Your message"
              name="message"
              className=""
              required
            />
            <span className={styles.underline}></span>
            <button className={styles.form_btn} type="submit" >
              Send Email
            </button>
          </form>
        </div>
      </section>
    </PagesContainer>
    </div>
  )
}

export default Contact