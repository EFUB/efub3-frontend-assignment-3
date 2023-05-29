import styled from "styled-components";
import { ReactComponent as Netflix } from "../../images/netflix_icon2.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

// 상단 메뉴바
const NavBar = () => {
  const color = useSelector((state) => state.color);
  const bgcolor = useSelector((state) => state.backgroundColor);

  // 스위치 버튼 onChange에 따라 화이트 모드/다크 모드로 변경
  // 다른 컴포넌트가 렌더링될 때 화면의 화이트/다크 모드 유지는 되지만 스위치가 기본 상태(다크 모드)로 돌아가는 문제가 생겨 localStorage에 체크 상태를 저장해두었습니다.
  // 그래도 여전히 다른 컴포넌트가 렌더링될 때 스위치가 계속 돌아가는..? 딜레이가 생겨서 자연스럽게 스위치가 유지되려면 어떻게 해야할지 조언주시면 감사하겠습니다.
  // 기본 상태를 false로 해두어서 그런 것 같은데 사용자가 현재 선택한 스위치 모드로 유지되도록 기본 상태를 설정하려면 어떻게 해야할 지 궁금합니다.
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const storedChecked = localStorage.getItem("checked");
    if (storedChecked) {
      setChecked(storedChecked === "true");
    }
  }, []);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    dispatch({ type: newChecked ? "White" : "Black" });
    localStorage.setItem("checked", newChecked.toString());
  };

  return (
    <NavBarContainer bgcolor={bgcolor}>
      <Link to="/home">
        <NetflixIcon />
      </Link>
      <ListContainer>
        <SwitchBtn onChange={handleToggle}>
          <input type="checkbox" checked={checked} />
          <OnOff className="onoff-switch"></OnOff>
        </SwitchBtn>
        <Link to="/home" style={{ textDecoration: "none" }}>
          <List color={color}>Home</List>
        </Link>
        <Link to="/movies" style={{ textDecoration: "none" }}>
          <List color={color}>Movies</List>
        </Link>
        <Link to="/popular" style={{ textDecoration: "none" }}>
          <List color={color}>Popular</List>
        </Link>
      </ListContainer>
    </NavBarContainer>
  );
};

const SwitchBtn = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 30px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + .onoff-switch:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  input:checked + .onoff-switch {
    background-color: #e50914;
    box-shadow: inset 1px 4px 1px #e3ae56;
  }
`;

const OnOff = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  background-color: #ccc;
  box-shadow: inset 1px 5px 1px #999;
  transition: 0.4s;

  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 20px;
  }
`;

const NavBarContainer = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  background-color: ${(props) => props.bgcolor};
  opacity: 80%;
  padding-top: 2px;
  z-index: 2;
`;

const NetflixIcon = styled(Netflix)`
  width: 100px;
  height: 80px;
  margin-left: 60px;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const List = styled.p`
  font-size: 20px;
  margin-left: 50px;
  color: ${(props) => props.color};
`;

export default NavBar;
