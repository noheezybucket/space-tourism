import React from "react";
import "../styles/Header.css";
import logo from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header--logo">
        <img src={logo} alt="app logo" />
      </div>
      <div className="header--navigation">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link" : "normal-link"
            }
          >
            <span>00</span> Home
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              isActive ? "active-link" : "normal-link"
            }
          >
            <span>01</span> Destination
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              isActive ? "active-link" : "normal-link"
            }
          >
            <span>02</span> Crew
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive ? "active-link" : "normal-link"
            }
          >
            <span>03</span> Technology
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
