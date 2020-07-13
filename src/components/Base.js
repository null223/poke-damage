import React, { useState } from 'react';
import styled from 'styled-components';

import { Init, Start, Battle } from './pages';

const initialState = {
  name: "",
  hp: 0,
  damage: 0,
  pre_damage: 0,
  is_dead: false
}



const Base = () => {
  const [status, setStatus] = useState(initialState);
  const [state, update] = useState("init");
  const initStatus = () => setStatus(initialState);

  return (
    <StyledWrapper className="mb-4">
    {state == "init" ?
      <Init update={update} />
    : state == "start" ?
      <Start
        status={status}
        setStatus={setStatus}
        update={update}
      />
    : state == "battle" && 
      <Battle
        status={status}
        setStatus={setStatus}
        initStatus={initStatus}
        update={update} />
    }
    </StyledWrapper>
  )
};



const StyledWrapper = styled.div`
  width: 100%;
  padding: 15px 30px;
  border: 1px solid #666;
  background-color: #fff;
  border-radius: 8px;
`;



export default Base;