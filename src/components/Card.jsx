import React from "react";
import "./components.css";
import Image from "./CardComponents/Image";
import CardInfo from "./CardComponents/CardInfo";
// import SetData from "./SetData";

export default function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <Image img={props.img} />
          <CardInfo title={props.title} name={props.name} links={props.links} />
        </div>
      </div>
    </>
  );
}
