import React, { createRef } from 'react';
import Wallet from '../svg/wallet.png';

const LoginBlock = ({ handleAddress }) => {
  const inputRef = createRef();
  const handleOnClick = (event) => {
    event.preventDefault();
    if (inputRef.current.value.match(/0x[a-zA-Z0-9]{40}/i)) {
      handleAddress(inputRef.current.value);
    } else {
      alert('Invalid Address');
    }
  };
  return (
    <div id="login">
      <form>
        <img src={Wallet} alt=""/>
        <label htmlFor="loginAddr">
          Please Enter your Address
        </label>
        <input type="text" id="loginAddr" placeholder="Address" ref={inputRef}/>
        <button type="button" onClick={handleOnClick}>Submit</button>
      </form>
    </div>
  );
};

export default LoginBlock;
