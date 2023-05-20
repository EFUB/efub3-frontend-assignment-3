import { Outlet } from "react-router-dom";
import styled from "styled-components";

//맨 위에 있는 헤더 컴포넌트. 어떤 페이지이든 위치. App.js에서
//Route로 공통 컴포넌트로 지정함.
//오른 쪽 위의 버튼은 각 페이지마다 absolute로 다르게 만듦(Header에 없음)
const Header = () => {
  return (
    <>
      <Wrapper>
        <LogoIcon src="/image/cinema.png" />
        <Title>Movies</Title>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: hotpink;
  color: white;
  font-weight: 900;
  display: flex;
  align-items: center;
  font-size: 40px;
  z-index: 100;
`;
const Title = styled.div`
  padding-left: 200px;
`;

const LogoIcon = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  left: 100px;
`;
