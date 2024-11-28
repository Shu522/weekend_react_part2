const CarState = (props) => {
  const stateMap = {
    await: {
      text: "대기",
      color: "#5d7d2b",
    },
    unComp: {
      text: "대기",
      color: "#5d7d2b",
    },
  };

  return (
    <span style={{ fontWeight: "bold", color: stateMap[props.state].color }}>
      {stateMap[props.state].text}
    </span>
  );
};

export default CarState;
