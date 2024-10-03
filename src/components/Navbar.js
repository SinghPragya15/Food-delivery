import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #ff4500;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: white;
  font-family: 'Pacifico', cursive;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin: 0 1rem;
    text-decoration: none;
    font-size: 1.2rem;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Tasty Delight</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/payment">Payment</Link>
        <Link to="/address">Address</Link>
        <Link to="/account">Account</Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
