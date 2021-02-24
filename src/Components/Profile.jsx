import React from "react";
import Btn from "./Blocks/Main/Btn";

function Profile() {
  return (
    <div className="main">
      <div className="container">
        <h1 className="page__title">Профиль</h1>
        <form action="/" className="form" method="post">
          <div className="profile">
            <div className="profile__form">
              <div className="form__group form__group--md">
                <input
                  className="form__control"
                  type="text"
                  placeholder="Ваше имя"
                  value="Никоай Карчевский"
                />
                <span className="form__line"></span>
              </div>

              <div className="form__group form__group--md">
                <input
                  className="form__control"
                  type="email"
                  placeholder="E-mail"
                  value="nikar.tom@gmail.com"
                />
                <span className="form__line"></span>
              </div>

              <div className="form__group form__group--md">
                <input
                  className="form__control"
                  type="password"
                  placeholder="Новый пароль"
                />
                <span className="form__line"></span>
              </div>

              <div className="form__group form__group--md">
                <input
                  className="form__control"
                  type="password"
                  placeholder="Повторите пароль"
                />
                <span className="form__line"></span>
              </div>
            </div>

            <div className="profile__avatar">
              <img src="https://placehold.it/150" alt="" />
              <label className="profile__file">
                  <input type="file"/>
                  выбрать аватар
              </label>
            </div>
          </div>
        </form>

        <Btn class_btn="btn__blue" title="Отправить" />
      </div>
    </div>
  );
}

export default Profile;
