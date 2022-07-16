import React from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  width: calc(100% - 40px);
  justify-content: space-between;
  font-size: 26px;
`;

const CountInput = styled.input`
  font-size: inherit;
  width: 50px;
  text-align: center;
`;

const CountBtn = styled.button`
  width: 30px;
`;

export const CountItem = ({ count, setCount, onChange, openItem }) => {
  // console.log(openItem)
  // openItem.count && setCount(openItem.count)
  return (
    <CountWrapper>
      <span>Колличество</span>
      <div>
        <CountBtn disabled={count <= 1} onClick={() => setCount(count - 1)}>-</CountBtn>
        <CountInput type='number' max='10' min='1' value={openItem.count && setCount(openItem.count) || count > 10 ? setCount(10) : count < 1 ? setCount(1) : count} onChange={onChange} />
        <CountBtn onClick={() => setCount(count + 1)}>+</CountBtn>
      </div>
    </CountWrapper>

  )

}
