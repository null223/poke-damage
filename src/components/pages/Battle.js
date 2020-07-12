import React/*, { useEffect }*/ from 'react';
import styled from 'styled-components';


const Battle = ({status, setStatus, initStatus, update}) => {
  
  const DamageBackButton = () => {
    const onClick = () => {
      if (status.damage != 0)
        setStatus(_status => ({..._status, damage: _status.damage - 10}));
    }
    return (
      <StyledDamageBackButton onClick={onClick}
        className="btn btn-primary">
        +10
      </StyledDamageBackButton> 
    );
  };

  const DamageButton = () => {
    const handleDown = () => {
      initStatus();
      update('start');
    }
    const onClick = () =>{
      setStatus(_status => ({..._status, damage: _status.damage + 10}));
    }
    if (status.hp <= status.damage) {
      return <StyledDamageButton onClick={handleDown}
        className="btn btn-dark">きぜつした！<br />いれかえる</StyledDamageButton>;
    } else {
      return <StyledDamageButton onClick={onClick}
        className="btn btn-danger">-10</StyledDamageButton>;
    }
  }

  return (
    <div className="position-relative">
      <p>{status.name}</p>
      <p>HP {status.hp - status.damage - status.pre_damage}/{status.hp}</p>
      <DamageBackButton />
      <DamageButton />
    </div>
  );
};

export default Battle;

const StyledDamageBackButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;  
 `;

const StyledDamageButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 3rem;
`;
