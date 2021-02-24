import React from 'react'

function PostTwitt(props) {
    return (
        <div className="post">
          <div className="post__content">
            <p className="post__text">{props.text}</p>
          </div>
          <div className="post__footer">
            <ul className="post__data">
              <li className="post__data-item">
                <time className="post__date" dateTime="2020-06-21 19:20">
                    {props.date}
                </time>
              </li>
            </ul>
          </div>
        </div>
    )
}

export default PostTwitt
