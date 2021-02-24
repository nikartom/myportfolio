import React from "react";

import HeaderLeft from "./Blocks/Header/HeaderLeft";
import HeaderRight from "./Blocks/Header/HeaderRight";

function Header() {
  return (
    <header className="header">
      <input type="checkbox" id="hi"></input>
      <label className="burger" for="hi">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
      <HeaderLeft />
      <HeaderRight />
    </header>
  );
}

export default Header;
