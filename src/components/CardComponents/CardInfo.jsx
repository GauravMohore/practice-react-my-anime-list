import "../components.css";

const CardInfo = (props) => {
    return (
      <div className="card_info">
        <span className="">{props.title}</span>
        <h3 className="anime-name">{props.name}</h3>
        <a href={props.links} target="blank">
          <button className="watch-now-button">Watch Now</button>
        </a>
      </div>
    );
}

export default CardInfo;