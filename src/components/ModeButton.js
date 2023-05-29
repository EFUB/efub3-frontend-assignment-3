import styled from "styled-components";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//redux 사용부분
//useDispatch를 사용해서 기존 상태(mode)를 바꾸는 change 함수를 실행함
//useSelector를 사용해서 기존 상태(mode)를 읽어서 모드 버튼의 이미지를 변경함
const ModeButton = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state);

  const onClickChangeMode = () => {
    console.log("change");
    console.log(mode);
    dispatch({ type: "CHANGE" });
  };

  return (
    <ToggleBtn>
      {mode ? (
        <MdOutlineLightMode size={30} onClick={onClickChangeMode} />
      ) : (
        <MdOutlineDarkMode size={30} onClick={onClickChangeMode} />
      )}
    </ToggleBtn>
  );
};

export default ModeButton;

const ToggleBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  position: fixed;
  bottom: 30px;
  right: 50px;
  z-index: 1000;
`;
