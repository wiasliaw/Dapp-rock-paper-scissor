import React from 'react';

const Navbar = ({
  address,
  token,
  clearData,
}) => {
  return (
    <div id="navbar">
      <div className="nav_elem">
        <p>Address: <span>{address}</span></p>
        <p>Tokens: <span>{token}</span></p>
      </div>
      <div className="nav_elem">
        <button onClick={clearData}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;