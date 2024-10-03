import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  width: 300px;
  font-size: 1rem;
  border: 2px solid #ff4500;
  border-radius: 5px;
`;

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        placeholder="Search for dishes..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
