import "../components.css";

const Image = (props) => {
    return <img src={props.img} alt="mypic" className="card_image" />;
}

export default Image;