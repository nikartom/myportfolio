import React from "react";
import send_img from "../../../Images/Btns/send.svg"

function AddPost() {
  return (
    <div className="add-post">
      <form className="add-post__form" action="/" method="post">
        <textarea className="add-post__textarea"
          name="post-text"
          placeholder="Публикации от админа"
        ></textarea>

        <div className="add-post__form-actions">
          <label className="add-post__file" htmlFor="add-post-file">
            <input type="file" id="add-post-file" />
          </label>
          <button className="add-post__send" type="submit">
              <img src={send_img} alt="Отпрваить"/>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
