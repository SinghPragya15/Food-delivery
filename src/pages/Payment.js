import React from 'react';
import styled from 'styled-components';

const PaymentContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Payment = () => {
  return (
    <PaymentContainer>
      <h1>Payment</h1>
      <p>Complete your payment securely.</p>
    </PaymentContainer>
  );
};

export default Payment;
