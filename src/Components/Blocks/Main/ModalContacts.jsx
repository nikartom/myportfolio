import React from "react";
import Btn from "./Btn";


function ModalContacts() {
  return (
    <div className="modal__window">
      <form className="profile__form">
        <div className="form__group form__group--md">
          <input className="form__control" type="text" placeholder="Ваше имя" />
          <span className="form__line"></span>
        </div>

        <div className="form__group form__group--md">
          <input className="form__control" type="email" placeholder="E-mail" />
          <span className="form__line"></span>
        </div>

        <div className="form__group form__group--md">
          <input
            className="form__control"
            type="text"
            placeholder="Текст сообщения"
          />
          <span className="form__line"></span>
        </div>

        <Btn class_btn="btn__blue" title="Отправить" />

        <ul className="modal__footer">
          <li>
            e-mail: <a href="mailto:nikar.tom@gmail.com">nikar.tom@gmail.com</a>
          </li>
          <li>
            тел: <a href="tel:+79618620456">+79618620456</a>
          </li>
        </ul>
      </form>      
    </div>
  );
}

export default ModalContacts;
