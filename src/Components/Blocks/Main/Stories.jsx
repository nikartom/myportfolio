import React from "react";
import Stories1 from "../../../Images/Stories/Rectangle 4.jpg";
import Stories2 from "../../../Images/Stories/Rectangle 3.jpg";
import Stories3 from "../../../Images/Stories/Rectangle 2.jpg";
import Stories4 from "../../../Images/Stories/Rectangle 1.jpg";

function StoriesItem (props) {
    return (
      <div className="stories__item">
        <img className="stories__preview" src={props.img} alt="Stories1" />
        <div className="stories__title">{props.title}</div>
        <time className="stories__date" dateTime="2020-09-21 19:21">
          {props.date}
        </time>
      </div>
    )
  }

function Stories() {
  return (
    <div className="stories">
      <StoriesItem img={Stories1} title="Закат на озере" date="20.20.2020"/>
      <StoriesItem img={Stories2} title="Работаю" date="21.20.2020"/>
      <StoriesItem img={Stories3} title="Номер в гостиннице" date="22.20.2020"/>
      <StoriesItem img={Stories4} title="Осень пришла" date="23.20.2020"/>
    </div>
  )
}

export default Stories;
