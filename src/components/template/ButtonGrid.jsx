import Button from "../button/Button";

const ButtonGrid = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "10px",
      }}
      className="App"
    >
      <Button backgroundColor="primary" borderRadius="hard"></Button>
      <Button backgroundColor="primary" borderRadius="smooth"></Button>
      <Button backgroundColor="primary" borderRadius="circle"></Button>
      <Button backgroundColor="hover" borderRadius="hard"></Button>
      <Button backgroundColor="hover" borderRadius="smooth"></Button>
      <Button backgroundColor="hover" borderRadius="circle"></Button>
      <Button backgroundColor="deactive" borderRadius="hard"></Button>
      <Button backgroundColor="deactive" borderRadius="smooth"></Button>
      <Button backgroundColor="deactive" borderRadius="circle"></Button>
    </div>
  );
};

export default ButtonGrid;
