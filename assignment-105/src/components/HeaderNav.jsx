import React from "react";
import { Link, NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <Link to="/">Logo</Link>
      <div className="menu">
        <NavLink to="/about">About</NavLink>
        <div className="works">
          <NavLink to="/works">Works</NavLink>
          <ul>
            <li>
              <NavLink to="/works/1">Works1</NavLink>
            </li>
            <li>
              <NavLink to="/works/2">Works2</NavLink>
            </li>
            <li>
              <NavLink to="/works/3">Works3</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default HeaderNav;
