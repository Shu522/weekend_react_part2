import CarModel from "./typo/CarModel";
import CarNumber from "./typo/CarNumber";
import CarState from "./typo/CarState";

const CarCard = (props) => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "20px",
        backgroundColor: "#5d7d2b",
      }}
    >
      <div>
        <CarModel name={props.model} />
        <CarState state={props.state} />
      </div>
      <CarNumber number={props.number} />
    </section>
  );
};

export default CarCard;
