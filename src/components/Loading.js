import styled from "styled-components";
import { useSelector } from "react-redux";
//데이터가 들어오기 전 보여주는 로딩 페이지. 처음 MainPage 로딩전,
// Detail페이지 로딩전에 나옴
const LoadingPage = () => {
  const mode = useSelector((state) => state);
  return (
    <LoadingIcon mode={mode}>
      <img src="/image/loading.png" />
    </LoadingIcon>
  );
};

export default LoadingPage;

const LoadingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  img {
    width: 200px;
    height: 200px;
    margin-top: 250px;
  }
  background-color: ${(props) => (props.mode ? "white" : "black")};
  background-color: "white";
`;
