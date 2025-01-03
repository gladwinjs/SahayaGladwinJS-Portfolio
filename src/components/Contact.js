import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v14ncg3", // Replace with your EmailJS service ID
        "template_r949i7n", // Replace with your EmailJS template ID
        form.current,
        "q7GVJiK0WZxxjsW8j" // Replace with your EmailJS public key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I will get back to you soon.",
            confirmButtonColor: "#32CD32", // Green color
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops, something went wrong!",
            text: "Please try again later.",
            confirmButtonColor: "#d33",
          });
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <FormWrapper
        as={motion.form}
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <TextWrapper>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Contact Me
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I'd love to hear from you. Please fill out the form below.
          </motion.p>
        </TextWrapper>
        <FormElements>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></motion.textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </FormElements>
      </FormWrapper>
    </ContactContainer>
  );
};

export default Contact;

/* Styled Components */
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a, #009688); /* Dark Grey to Teal */
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

const FormWrapper = styled.form`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 2rem 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #000000, transparent); /* Black Gradient */
    z-index: -1;
    transform: skewY(-10deg);
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2); /* Shadow effect on hover */
  }
`;

const TextWrapper = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #32cd32; /* Highlighted Green */
    margin: 0;
    transition: color 0.3s ease;
  }

  p {
    font-size: 1.1rem;
    color: #ccc;
    transition: color 0.3s ease;
  }

  &:hover h1,
  &:hover p {
    color: #ffffff;
  }
`;

const FormElements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  input,
  textarea {
    width: 100%;
    padding: 1.2rem;
    border: 2px solid #444;
    border-radius: 8px;
    background: #333; /* Dark background for inputs */
    color: #fff;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #32cd32; /* Light Green */
      box-shadow: 0 0 10px rgba(50, 205, 50, 0.8); /* Green glow */
    }
  }

  textarea {
    resize: none;
  }

  button {
    background: #32cd32; /* Highlighted Green */
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: #28a745; /* Darker Green */
      transform: translateY(-3px); /* Button hover effect */
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 8px rgba(50, 205, 50, 0.8); /* Green glow */
    }
  }
`;

/* Responsive Design for mobile and tablet screens */
const mediaQueries = {
  tablet: '@media (max-width: 768px)',
  mobile: '@media (max-width: 480px)',
};

FormWrapper.extend = `
  ${mediaQueries.tablet} {
    padding: 1.5rem 1.5rem;
  }

  h1 {
    font-size: 2.2rem; /* Smaller title on tablets */
  }

  p {
    font-size: 1rem; /* Adjusted paragraph size */
  }

  button {
    padding: 1rem 1.5rem; /* Smaller button */
  }

  ${mediaQueries.mobile} {
    padding: 1.2rem 1.2rem;
    h1 {
      font-size: 1.8rem; /* Smaller title on mobile */
    }
    p {
      font-size: 0.9rem; /* Adjusted paragraph size for mobile */
    }
    button {
      padding: 0.8rem 1.3rem; /* Smaller button */
    }
  }
`;
