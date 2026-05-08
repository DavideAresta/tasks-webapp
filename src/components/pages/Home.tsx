import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <h1>Welcome to the Task Management App</h1>
    </HomeContainer>
  );
};

export default Home;
