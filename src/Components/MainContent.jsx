import React from "react";
import AddPost from "./Blocks/Main/AddPost";
import Stories from "./Blocks/Main/Stories";
import PostTwitt from "./Blocks/Main/PostTwitt";
import PostImg from "./Blocks/Main/PostImg";
import PostVideo from "./Blocks/Main/PostVideo";

import post_img from "../Images/Posts/Rectangle 5.jpg";
import post_img2 from "../Images/Posts/Rectangle 4.jpg";

function MainContent() {
  return (
    <div className="main">
      <div className="container">
        <Stories />
        <AddPost />

        <PostTwitt
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
              cumque reiciendis quam harum, quibusdam non culpa inventore
              deserunt totam vero."
          date="21.02.2020"
        />

        <PostImg
          img_url={post_img}
          title="Как писать быстро и безболезненно?"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse 
              cumque reiciendis quam harum, quibusdam non culpa inventore deserunt totam vero."
          category="создание сайтов"
          date="21.06.2020"
        />

        <PostVideo
          video_url="https://www.youtube.com/embed/p4zbV1MBJNs"
          title="Купил ноутбук за 150 000р"
          date="24.03.2020"
          category="видео"
        />

        <PostImg
          img_url={post_img2}
          title="Посещение конференции"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse 
              cumque reiciendis quam harum, quibusdam non culpa inventore deserunt totam vero."
          category="создание сайтов"
          date="21.06.2020"
        />

        <ul className="pagination">
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              &lt;
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link active" href="#">
              1
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              2
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              3
            </a>
          </li>
          <li className="pagination__item">
            <a className="pagination__link" href="#">
              &gt;
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
