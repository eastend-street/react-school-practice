import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <Link to="/">Logo</Link>
      <div className="menu">
        <NavLink to="/about" activeClassName="link-active">
          About
        </NavLink>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default HeaderNav;
