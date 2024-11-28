const Greeting = (props) => {
  return (
    <div>
      <h3>{props.name}님 안녕하세요</h3>
      <h3>나이가 {props.age} 이시군요</h3>
      <h3>{props.isVIP ? "VIP" : "일반"} 회원님 환영합니다</h3>
    </div>
  );
};

export default Greeting;
