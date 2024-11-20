import React, { useState } from 'react';
import axios from 'axios';
import Styles from '../../components/ContactForm/ContactForm.module.css';
import logoCircle from '../../assets/logoCircle.png';
import { FaArrowRightLong } from 'react-icons/fa6';
import BookImage from '../../assets/yellowBook.jpeg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/submit-form',
        formData
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setFormData({ firstName: '', lastName: '', email: '' });
      } else {
        toast.error(response.data.message || 'Something went wrong.');
      }
    } catch (error) {
      toast.error('Failed to submit the form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      <div className={Styles.icon_textDiv}>
        <div className={Styles.icon_div}>
          <img src={logoCircle} alt="" />
        </div>
        <div className={Styles.texts}>
          <h2 className={Styles.textsh2}>Actually complete that project.</h2>
          <p className={Styles.textsP}>
            There are many books to read, podcasts to listen to, and courses to
            take...but none of that matters if you don't do the work. Motivated
            Mornings is a service focused on making sure that your best work
            actually happens.
          </p>
          <div
            className={Styles.learnMore_arrow}
            style={{ textDecoration: 'underline' }}
          >
            <span className={Styles.textsSpan}>Learn more</span>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <div className={Styles.FormBanner}>
        <div className={Styles.FormImage}>
          <section className={Styles.contactForm}>
            <p>FREE GUIDE</p>
            <h2>8 Secrets to Doing Work That Matters</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Download the Guide'}
              </button>
            </form>
          </section>
          <div className={Styles.imageBook}>
            <img src={BookImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
