import React from 'react'
import { NavLink } from 'react-router-dom'


function HeaderLeft() {
    return (
        <div className="header__left">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
            <NavLink to={'/'}  className="nav__link">
                Главная
              </NavLink >
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link has-subnav">
                Статьи
              </a>
              <ul className="subnav">
                <li>
                  <a className="subnav__link" href="#">
                    Создание сайтов
                  </a>
                </li>
                <li>
                  <a className="subnav__link" href="#">
                    Интернет маркетинг
                  </a>
                </li>
                <li>
                  <a className="subnav__link" href="#">
                    Создание приложений
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Обо мне
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Реклама
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default HeaderLeft
