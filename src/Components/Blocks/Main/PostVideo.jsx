import React from "react";

function PostVideo(props) {
  return (
    <article className="post">
      <div className="post__header post__header--video">
          <div className="embed">
            <iframe
            src={props.video_url}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
        </div>
      </div>
      <div className="post__content">
        <h2 className="post__title">
          <a href="#">{props.title}</a>
        </h2>
      </div>
      <div className="post__footer">
        <ul className="post__data">
          <li className="post__data-item">
            <time className="post__date" dateTime="2020-06-21 19:20">
              {props.date}
            </time>
          </li>
          <li className="post__data-item">
            <a className="post__data-category" href="#">
              {props.category}
            </a>
          </li>
        </ul>
        <a href="#" className="post__read">
          оставить комментарий
        </a>
      </div>
    </article>
  );
}

export default PostVideo;
