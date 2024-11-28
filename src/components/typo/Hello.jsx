const Hello = (props) => {
  return (
    <div>
      <h3>{props.data.name}님 안녕하세요</h3>
      <h3>나이가 {props.data.age} 이시군요</h3>
      <h3>{props.data.isVIP ? "VIP" : "일반"} 회원님 환영합니다</h3>
    </div>
  );
};

export default Hello;
