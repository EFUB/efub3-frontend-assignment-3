import { useSelector } from "react-redux";
import styled from "styled-components";

const Button = ({ onClick }) => {
    // 라이트/다크모드 전환하는 버튼 컴포넌트
    const isDarkMode = useSelector((state) => state.isDarkMode);
    return (
        <>
            <Wrapper>
                <ToggleSwitch 
                    onClick={onClick}
                    className={isDarkMode ? "toggleSwitch active" : "toggleSwitch"}
                >
                    <span className="toggleButton"></span>
                </ToggleSwitch>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    width: max-content;
    left: 50px;
    top: 50px;
    position: absolute;
    .toggleSwitch.active {
        background: lightsteelblue;
    }
    .toggleSwitch.active .toggleButton {
        left: calc(100% - 25px);
        background: white;
    }
`;

const ToggleSwitch = styled.div`
    width: 60px;
    height: 30px;
    display: block;
    position: relative;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
    cursor: pointer;
    transition: all 0.2s ease-in;

    .toggleButton {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        left: 4px;
        transform: translateY(-50%);
        border-radius: 50%;
        background: lightsteelblue;
        transition: all 0.2s ease-in;
    }
`;

export default Button;