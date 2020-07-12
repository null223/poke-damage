import React from 'react';
import styled from 'styled-components';


const Init = ({update}) => (
  <div className="row">
    <h2>ポケカ　ダメージカウンター</h2>
    <StyledButton onClick={() => update("start")}>
      <div />
      <div />
    </StyledButton>
  </div>
);

export default Init;

const StyledButton = styled.div`
  width: 100%;
  position: relative;
  &::before {
    position: relative;
    content: '';
    display: block;
    padding-top: 100%;
    background-color: #ececec;
    border-radius: 8px;
  }
  & div {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 2rem;
    border-radius: 1rem;
    transform: translate(-50%, -50%);
    background-color: #fff;
    &:first-of-type {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
`;