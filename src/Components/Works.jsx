import React from "react";

import Btn from "./Blocks/Main/Btn";
import img1 from "../Images/Works/Rectangle 21.jpg";
import img2 from "../Images/Works/Rectangle 22.jpg";

function Works() {
  return (
    <div className="main">
      <div className="container">
        <h2 className="page__title">Мои работы</h2>
        <div className="works__item">
          <img src={img1} alt="" className="works__img" />
          <div className="works__content">
            <a href="#" className="works__url">
              altermono.com
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat.
            </p>
            <div className="works__tags">
              <Btn class_btn="btn__gold" title="дизайн" />
              <Btn class_btn="btn__gold" title="создание сайта" />
              <Btn class_btn="btn__gold" title="SMM" />
            </div>
            <div className="works__btn">
              <Btn class_btn="btn__blue" title="Перейти на сайт" />
            </div>
          </div>
        </div>

        <div className="works__item">
          <img src={img2} alt="" className="works__img" />
          <div className="works__content">
            <a href="#" className="works__url">
            codedoco.com
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia
              sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas.
              Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
              volutpat massa. Egestas ornare vel volutpat.
            </p>
            <div className="works__tags">
              <Btn class_btn="btn__gold" title="дизайн" />
              <Btn class_btn="btn__gold" title="создание сайта" />
              <Btn class_btn="btn__gold" title="SMM" />
            </div>
            <div className="works__btn">
              <Btn class_btn="btn__blue" title="Перейти на сайт" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
