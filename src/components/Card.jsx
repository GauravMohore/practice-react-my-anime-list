import React from "react";
import "./components.css";
// import SetData from "./SetData";

export default function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.img} alt="mypic" className="card_image" />
          <div className="card_info">
            <span className="">{props.title}</span>
            <h3 className="anime-name">{props.name}</h3>
            <a href="/" target="blank">
              <button className="watch-now-button">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
