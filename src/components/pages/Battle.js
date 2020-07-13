import React/*, { useEffect }*/ from 'react';
import styled from 'styled-components';


const Battle = ({status, setStatus, initStatus, update}) => {
  const ResetButton = () => {
    const onClick = e => {
      e.preventDefault();
      initStatus();
      update("init");
    }
    return <button onClick={onClick} className="btn btn-dark" children="リセット" />;
  }
  const HPUpButton = () => {
    const onClick = e => {
      e.preventDefault();
      setStatus(_status => ({..._status, hp: _status.hp + 10}));
    }
    return <button onClick={onClick} className="btn btn-info" children="+HP10" />;
  };
  const HPDownButton = () => {
    const onClick = e => {
      e.preventDefault();
      if (status.hp > status.damage)
        setStatus(_status => ({..._status, hp: _status.hp - 10}));
    }
    return <button onClick={onClick} className="btn btn-warning" children="-HP10" />;
  };
  const DamageBackButton = () => {
    const onClick = e => {
      e.preventDefault();
      if (status.damage != 0)
        setStatus(_status => ({..._status, damage: _status.damage - 10}));
    }
    return <button onClick={onClick} className="btn btn-primary" children="+10" />;
  };

  const DamageButton = () => {
    const handleDown = e => {
      e.preventDefault();
      initStatus();
      update('start');
    }
    const onClick = e => {
      e.preventDefault();
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
      <StyledButtonsWrapper>
        <ResetButton />
        <HPUpButton />
        <HPDownButton />
        <DamageBackButton />
      </StyledButtonsWrapper>
      <DamageButton />
    </div>
  );
};

export default Battle;



const StyledButtonsWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: inline-flex;
  & button + button {
    margin-left: .5rem;
  }
`;

const StyledDamageButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 3rem;
`;
