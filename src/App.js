import React from 'react';
import styled from 'styled-components';

import Base from './components/Base';


function App() {
  return (
    <main>
      <StyledWrapper>
        <Base />
      </StyledWrapper>
    </main>
  );
}

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #ddd;
  padding: 10px;
`;

export default App;
