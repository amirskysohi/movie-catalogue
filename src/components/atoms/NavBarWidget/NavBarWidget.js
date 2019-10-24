import React from "react";
import { Link } from "react-router-dom";

const NavBarWidget = ({ link, title }) => (
  <Link className="navbar-widget navigation-bar" to={link}>
    {title}
  </Link>
);

export default NavBarWidget;
