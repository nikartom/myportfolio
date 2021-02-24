import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import img_page from "../Images/Posts/Rectangle 5.jpg";
import Recomend from "./Blocks/Pages/Recomend";
import Comments from "./Blocks/Pages/Comments";

function PostPage() {
  return (
    <div className="main">
      <div className="container">
        <div className="content">
          <div className="postpage__content">
            <div className="postpage__header">
              <a href="#">вернуться назад</a>
              <div className="postpage__share">
                <a href="#">поделиться</a>
                <FontAwesomeIcon className="postpage__icon" icon={faShareAlt} />
              </div>
            </div>

            <h1 className="post__title">Как создавать сайты легко</h1>

            <div className="postpage__subtitle">
              <ul className="postpage__data">
                <li className="postpage__data-item">
                  <time className="postpage__date" dateTime="2020-06-21 19:20">
                    21.02.2020
                  </time>
                </li>
                <li className="postpage__data-item">
                  <a className="postpage__data-category" href="#">
                    создание сайтов
                  </a>
                </li>
              </ul>
            </div>
            <p className="postpage__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis magnam repudiandae debitis voluptates vel corporis.
              Animi quae nisi excepturi sit ducimus aliquid id sequi repellat
              laudantium maiores earum rerum eligendi dolorum doloribus
              aspernatur laborum reprehenderit vero, sint cupiditate ullam unde
              eius? Odit eos perferendis incidunt ipsa. Laborum aliquid quo
              maiores ab saepe vel iusto impedit nesciunt optio necessitatibus.
              Provident laborum cum at nam velit doloremque eos sit ea.
              Veritatis quis molestiae esse. Maxime odio quae expedita ullam,
              dolorum ducimus consectetur sint distinctio tenetur unde harum
              accusantium minima. Quaerat tempora rem tempore enim quis qui
              nihil rerum maiores, deleniti beatae cum doloribus nostrum
              blanditiis iste, neque aliquid, aut magnam exercitationem
              temporibus sunt sapiente magni at veritatis accusantium! Iure
              ducimus expedita modi?
              <img
                className="postpage__img"
                src={img_page}
                alt="Post image"
                className="post__img"
              />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis magnam repudiandae debitis voluptates vel corporis.
              Animi quae nisi excepturi sit ducimus aliquid id sequi repellat
              laudantium maiores earum rerum eligendi dolorum doloribus
              aspernatur laborum reprehenderit vero, sint cupiditate ullam unde
              eius? Odit eos perferendis incidunt ipsa. Laborum aliquid quo
              maiores ab saepe vel iusto impedit nesciunt optio necessitatibus.
              Provident laborum cum at nam velit doloremque eos sit ea.
              Veritatis quis molestiae esse. Maxime odio quae expedita ullam,
              dolorum ducimus consectetur sint distinctio tenetur unde harum
              accusantium minima. Quaerat tempora rem tempore enim quis qui
              nihil rerum maiores, deleniti beatae cum doloribus nostrum
              blanditiis iste, neque aliquid, aut magnam exercitationem
              temporibus sunt sapiente magni at veritatis accusantium! Iure
              ducimus expedita modi?
            </p>
            
            <Recomend/>
            <Comments/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
