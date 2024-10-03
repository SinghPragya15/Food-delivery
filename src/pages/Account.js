import React from 'react';
import styled from 'styled-components';

const AccountContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Account = () => {
  return (
    <AccountContainer>
      <h1>My Account</h1>
      <p>Manage your profile and settings.</p>
    </AccountContainer>
  );
};

export default Account;
