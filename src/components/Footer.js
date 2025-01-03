import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeIn' }}
    >
      <motion.p
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="footer-text"
      >
        &copy; sahayagladwinjs@gmail.com 2024
      </motion.p>
    </StyledFooter>
  );
}

// Styled Components
const StyledFooter = styled.footer`
  background-color: #000000; /* Black background */
  color: #e6e6e6; /* Light gray text color */
  padding: 20px 0;
  text-align: center;

  .footer-text {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0;
    transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;

    &:hover {
      color: #32cd32; /* Lime Green */
      text-shadow: 0 0 8px #32cd32, 0 0 10px #32cd32; /* Glowing effect on hover */
      transform: scale(1.1); /* Slight scale on hover */
    }
  }

  /* Fade-in animation */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 1s ease-in-out;

  /* Responsive text sizes */
  @media (max-width: 768px) {
    .footer-text {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .footer-text {
      font-size: 0.9rem;
    }
  }
`;
