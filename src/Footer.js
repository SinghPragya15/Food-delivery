import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #ff4500;
  color: white;
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Tasty Delight. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
