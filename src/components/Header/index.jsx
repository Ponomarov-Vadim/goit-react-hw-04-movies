import React from "react";
import { NavLink } from "react-router-dom";
import styled from "./Header.module.css";

const Header = () => (
  <div className={styled.wrapper}>
    <ul className={styled.navList}>
      <li>
        <NavLink
          exact
          to="/"
          activeClassName={styled.activeLink}
          className={styled.link}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          activeClassName={styled.activeLink}
          className={styled.link}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
