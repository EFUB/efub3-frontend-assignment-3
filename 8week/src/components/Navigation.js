import React from 'react';
import styled from "styled-components";

const Button = styled.div`
  background-color: yellowgreen;
  size: small;
  outline :auto ;
  padding: 10px 20px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;
function Navigation({ activeTab, onTabClick }) {
  return (
    <div>
      <BtnContainer>
      <Button onClick={() => onTabClick('current')}>현재 상영작</Button>
      <Button onClick={() => onTabClick('recommendation')}>추천작</Button>
      </BtnContainer>
    </div>
  );
}

export default Navigation;
