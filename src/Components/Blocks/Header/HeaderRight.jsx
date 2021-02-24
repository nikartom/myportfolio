import React from "react";
import { NavLink } from 'react-router-dom'

function HeaderRight() {
  return (
    <div className="header__right">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to={'/profile'}  className="nav__link">
              Профиль
            </NavLink>
          </li>
        </ul>
      </nav>
      <form action="/" className="search" method="post">
        <input className="search__input" type="text" placeholder="Поиск" />
      </form>
    </div>
  );
}

export default HeaderRight;
