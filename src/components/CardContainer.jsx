import Card from "./Card";
import SetData from "./SetData";

export default function CardContainer() {
  return (
    <>
      <div className="card-container">
        {SetData.map((val) => {
          return (
            <Card
              key={val.id}
              img={val.img}
              title={val.title}
              name={val.name}
              links={val.links}
            />
          );
        })}
      </div>
    </>
  );
}
