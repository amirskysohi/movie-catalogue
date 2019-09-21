import React from "react";
import NavBarWidget from "../../atoms/NavBarWidget/NavBarWidget";

const NavBar = () => {
  return (
    <div className="topnav">
      <NavBarWidget link="/" title="Home" />
      <NavBarWidget link="/about/" title="About" />
    </div>
  );
};

export default NavBar;
