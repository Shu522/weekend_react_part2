const Box = (props) => {
  return (
    <div
      style={{
        height: "100px",
        width: "300px",
        backgroundColor: props.backgroundColor,
      }}
    ></div>
  );
};

export default Box;
