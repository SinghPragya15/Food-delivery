import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const HomeContainer = styled.div`
  padding: 2rem;
  background-color: #f8f8f8;
  min-height: 100vh;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1.2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-top: 2rem;
  text-align: center;
`;

const FoodList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FoodCard = styled.div`
  width: calc(33.333% - 2rem);
  margin: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #fff;
  padding: 1rem;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const FoodImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 8px;
`;

const FoodName = styled.h3`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

const FoodDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

// Dummy data for food types
const foodTypes = [
  { name: 'Pizza', image: 'pizza2.avif', description: 'Cheesy & Delicious' },
  { name: 'Burger', image: 'burger.webp', description: 'Juicy & Tasty' },
  { name: 'Momo', image: 'momo2.jpg', description: 'Steamed & Spicy' },
  { name: 'Indian', image: 'indian.avif', description: 'Flavorful & Rich' },
  { name: 'Beverages', image: 'beverages1.jpg', description: 'Refreshing Drinks' },
  { name: 'Cake', image: 'cake2.avif', description: 'Sweet & Creamy' },
];

// Home component
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <HomeContainer>
      <Heading>Welcome to Tasty Delight</Heading>

      {/* Search bar */}
      <SearchBar
        type="text"
        placeholder="Search for dishes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Food Types Section */}
      <SectionTitle>What are you craving?</SectionTitle>
      <FoodList>
        {foodTypes.map((food, index) => (
          <FoodCard key={index}>
            <FoodImage src={food.image} alt={food.name} />
            <FoodName>{food.name}</FoodName>
            <FoodDescription>{food.description}</FoodDescription>
          </FoodCard>
        ))}
      </FoodList>
    </HomeContainer>
  );
};

export default Home;
