import { useState } from "react";

const UserLogin = () => {
  const [idValue, setIdValue] = useState("");
  const [psValue, setPsValue] = useState("");

  const userId = (e) => {
    setIdValue(e.target.value);
  };

  const userPs = (e) => {
    setPsValue(e.target.value);
  };
  const clickLogin = () => {
    if (idValue === "react" && psValue === "1234") {
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="아이디"
        value={idValue}
        onChange={userId}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={psValue}
        onChange={userPs}
      />
      <>
        <button onClick={clickLogin}>log in</button>
      </>
    </>
  );
};
export default UserLogin;
