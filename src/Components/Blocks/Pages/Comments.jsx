import React from "react";
import BlueBtn from "../Main/Btn";

function Comments() {
  return (
    <div className="comments">
      <h3 className="comments__title">Обсуждение</h3>

      <form action="/" className="form" method="post">
        <div className="form__group">
        <textarea
          className="form__control form__control--textarea"
          name="commenttext"
          placeholder="Текст комментария"
        ></textarea>
        </div>
        <BlueBtn class_btn="btn__blue" title="Отправить" />
      </form>

      <ul className="comments__content">
        <li className="comments__item">

          <div className="comments__header">
            <img src="https://placehold.it/30" alt="" className="comments__avatar" />
            <div className="comments__author">
              <div className="comments__name">Дмитрий Валак</div>
              <time className="comments__date" dateTime="2020-12-21 19:21">
                1 неделю назад
              </time>
            </div>
          </div>

          <div className="comments__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum aut
            excepturi eos exercitationem fugit distinctio dolore, quisquam vitae
            soluta impedit dicta ad. Non laborum provident ipsum hic asperiores
            voluptate vel.
          </div>

          <button className="comments__replay" type="button">
            ответить
          </button>

          <ul className="comments__content">
        <li className="comments__item">

          <div className="comments__header">
            <img src="https://placehold.it/30" alt="" className="comments__avatar" />
            <div className="comments__author">
              <div className="comments__name">Дмитрий Валак</div>
              <time className="comments__date" dateTime="2020-12-21 19:21">
                1 неделю назад
              </time>
            </div>
          </div>

          <div className="comments__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum aut
            excepturi eos exercitationem fugit distinctio dolore, quisquam vitae
            soluta impedit dicta ad. Non laborum provident ipsum hic asperiores
            voluptate vel.
          </div>

          <button className="comments__replay" type="button">
            ответить
          </button>
        </li>
      </ul>
      
        </li>
      </ul>
    </div>
  );
}

export default Comments;
