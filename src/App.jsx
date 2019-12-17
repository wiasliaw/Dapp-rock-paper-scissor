import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import FightField from './FightField';
import LoginBlock from './LoginBlock';

import './App.css';

const App = () => {
  const [addr, setAddr] = useState('');
  const [token, setToken] = useState(0);
  const [stake, setStake] = useState(0);
  const [selected, setSelected] = useState(-1);
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    if(addr==='') {
      setLogin(false);
    }
  }, [addr]);
  const handleClearData = (event) => {
    event.preventDefault();
    setAddr('');
    setToken(0);
  };
  const handleSetAddress = (in_addr) => {
    setAddr(in_addr);
    setLogin(true);
  };
  const handleSetStake = (stake) => setStake(stake);
  const handleSetSelect = (select) => {
    setSelected(select);
  }
  // const winDebug = () => {
  //   const guess = Math.floor(Math.random*3);
  //   if (guess===selected) {
  //     console.log('peace');
  //   } else if (x) {

  //   }
  // }

  return (
    <div className="contain">
      {
        (isLogin) ? (<></>) : (
          <LoginBlock
            handleAddress={handleSetAddress}
          />
        )
      }
      <Navbar
        address={addr}
        token={token}
        clearData={handleClearData}
      />
      <FightField
        handleStake={handleSetStake}
        selected={selected}
        handleSelect={handleSetSelect}
      />
    </div>
  );
};

export default App;