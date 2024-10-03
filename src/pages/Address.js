import React from 'react';
import styled from 'styled-components';

const AddressContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Address = () => {
  return (
    <AddressContainer>
      <h1>Address</h1>
      <p>Enter your delivery address.</p>
    </AddressContainer>
  );
};

export default Address;
