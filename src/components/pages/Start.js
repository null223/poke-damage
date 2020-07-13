import React, { useState } from 'react';


const Start = ({status, setStatus, update}) => {

  // const [state, updateState] = useState({name: status.name, hp: status.hp});
  const useInput = initialValue => {
    const [value, set] = useState(initialValue);
    return { value, onChange: e => set(e.target.value) };
  };
  const name = useInput("");
  const hp = useInput(0);

  const onSubmit = e => {
    e.preventDefault();
    const _name = name.value ? name.value : "ポケモン"
    setStatus(_status => ({..._status, name: _name, hp: +hp.value}));
    if (!(hp.value < 10)) {
      update("battle");
    }
  };

  return (
    <form className="row" onSubmit={onSubmit}>
      <h3 className="col-12">名前とHPを入力してね</h3>
      <input
        name="name" type="text" {...name}
        className="col-sm-6 mb-3" placeholder="ポケモン" />
      <input
        name="hp" type="number" {...hp}
        step="10" min="10" className="col-sm-6 mb-3" placeholder="100" />
      <button type="submit" className="btn btn-primary col-6 offset-3" children="スタート！" />
    </form>
  );
};

export default Start;