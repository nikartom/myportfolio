import React from "react";

function Recomend() {
  return (
    <div className="recomend">
      <h2 className="recomend__title">Интерено почитать</h2>
      <div className="recomend__content">
        <ul>
          <li className="recomend__item">
            <h4 className="recomend__item-title">
              Как я сходил на FrontEnd Conf 2021
            </h4>
            <time className="recomend__item-date" dateTime="2020-06-21 19:20">
              21.06.2020
            </time>
          </li>
          <li className="recomend__item">
            <h4 className="recomend__item-title">
              Купил новый ноутбук за 150 000 руб
            </h4>
            <time className="recomend__item-date" dateTime="2020-06-21 19:20">
              21.06.2020
            </time>
          </li>
        </ul>
        <ul>
          <li className="recomend__item">
            <h4 className="recomend__item-title">
              Купил новый ноутбук за 150 000 руб
            </h4>
            <time className="recomend__item-date" dateTime="2020-06-21 19:20">
              21.06.2020
            </time>
          </li>
          <li className="recomend__item">
            <h4 className="recomend__item-title">
              Как я сходил на FrontEnd Conf 2021
            </h4>
            <time className="recomend__item-date" dateTime="2020-06-21 19:20">
              21.06.2020
            </time>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Recomend;
