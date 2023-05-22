import React from "react";
import { MdMovie } from "react-icons/md";
import { GiPopcorn } from "react-icons/gi";
import styled from "styled-components";

//영화 페이지의 헤더를 화면에 출력하는 컴포넌트
function Header() {
  return (
    <>
      <HeaderBox>
        <MdMovie size="35"></MdMovie>
        <h1>Movie Collection</h1>
        <MdMovie size="35"></MdMovie>
      </HeaderBox>
      <HeaderDes>
        <div>Check Out</div>
        <div>All the High Rated Movies!</div>
        <GiPopcorn size="35"></GiPopcorn>
      </HeaderDes>
    </>
  );
}

const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8em;
  background-color: #03071e;
  color: #ffee32;
  svg {
    margin: 20px;
  }
`;

const HeaderDes = styled.div`
  height: 6em;
  background-color: #d6d6d6;
  color: #6c757d;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    margin-top: 7px;
    color: #ffee32;
  }
`;

export default Header;
