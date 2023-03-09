import Card from "./Card";
import SetData from "./SetData";

export default function CardContainer() {
  return (
    <>
      <div className="card-container">
        {SetData.map((val) => {
          return (
            <Card
              img={val.img}
              title={val.title}
              name={val.name}
              link={val.links}
            />
          );
        })}
      </div>
    </>
  );
}
