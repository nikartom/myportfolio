import React, { useState} from "react";
import { NavLink } from 'react-router-dom'
import Modal from "react-modal";

import head_img from "../Images/sidebar_header.jpg";
import inst_img from "../Images/instagram .png";
import vk_img from "../Images/vk.png";
import pint_img from "../Images/pinterest .png";
import ModalContacts from "./Blocks/Main/ModalContacts";
import close from "../Images/Icons/cancel.svg";

Modal.setAppElement("#root");

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <aside className="sidebar">

      <div className="sidebar__header">
        <img src={head_img} alt="" />
      </div>

      <div className="sidebar__content">
        <div className="profile">
          <img
            className="profilesidebar__avatar"
            src="https://placehold.it/100"
            alt=""
          />
        </div>
        <div className="profilesidebar__name">Николай Карчевский</div>
        <div className="profilesidebar__prof">IT design</div>

        <ul className="social">
          <li className="social__item">
            <a href="#" className="social__link">
              <img src={inst_img} alt="Instagram" />
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <img src={vk_img} alt="VK" />
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <img src={pint_img} alt="Pinterest" />
            </a>
          </li>
        </ul>

        <div className="profilesidebar__text">
          <p>
            Front-end разработчик. Практик верстки сайтов. Созданием сайтов
            занимаюсь с 2012 года. Работал в нескольких ИТ компаниях и наработал
            более 10 000 часов в создании сайтов различной сложности.
          </p>
        </div>
      </div>

      <div className="sidebar__footer">
          <NavLink to={'/works'} className="sidebar__btn sidebar__btn--red">Мои работы</NavLink>
          <button className="sidebar__btn sidebar__btn--blue" onClick={toggleModal}>Написать мне</button>
          <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="Contacts"
        className="modal"
        overlayClassName="modal__overlay"
        closeTimeoutMS={100}
      >
        <ModalContacts/>
      </Modal>
      </div>   

    </aside>
  );
}

