import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => (
  <div className="navigation">
    <ul className="nav">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          exact
          to="/"
        >
          Экспонаты
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/new"
        >
          Добавить экспонат
        </NavLink>
      </li>
    </ul>
  </div>
);


export default Navigation;
