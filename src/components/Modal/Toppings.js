import React from "react";
import styled from 'styled-components';

const ToppingStyle = styled.div`
  column-count: 2;
  column-gap: 25px;
  width: 500px;
  margin: 0 auto;
  text-align: center;
`;

const ToppingCheckbox = styled.input`
  margin: 10px;
`;
const ToppingName = styled.span``;

const ToppingSpan = styled.span`
  display: block;
`;

export function Toppings({ toppings, toppingSelect }) {


  return <ToppingStyle>
    {toppings.map((item, index) => {
      return <ToppingSpan key={index}>
        <ToppingName>{item.name}</ToppingName>
        <ToppingCheckbox type='checkbox' checked={item.checked} onChange={() => toppingSelect(index)} />
      </ToppingSpan>
    })}</ToppingStyle >
}
