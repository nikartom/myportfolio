import React from 'react'
import { NavLink } from 'react-router-dom'

function PostImg(props) {
    return (
        <article className="post">
          <div className="post__header">
            <NavLink to={'/post'}>
              <img src={props.img_url} alt={props.title} className="post__img" />
            </NavLink>
          </div>
          <div className="post__content">
            <h2 className="post__title">
              <a href="#">{props.title}</a>
            </h2>
            <p className="post__text">{props.text}</p>
          </div>
          <div className="post__footer">
            <ul className="post__data">
              <li className="post__data-item">
                <time className="post__date" dateTime="2020-06-21 19:20">
                  {props.date}
                </time>
              </li>
              <li className="post__data-item">
                  <a className="post__data-category" href="#">{props.category}</a>
              </li>
            </ul>
            <a href="#" className="post__read">читать</a>
          </div>
        </article>
    )
}

export default PostImg
