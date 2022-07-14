import React from "react";
import styled from 'styled-components';

const ChoicesStyle = styled.div`
  column-count: 2;
  column-gap: 25px;
  width: 500px;
  margin: 0 auto;
  text-align: center;
  font-family: Roboto, sans-serif;
`;

const ChoicesCheckbox = styled.input`
  margin: 10px;
`;
const ChoicesName = styled.span``;

const ChoicesSpan = styled.span`
  display: block;
`;

export function Choices({ choice, setChoices, openItem }) {

  return <ChoicesStyle>
    {openItem.choices.map((item, index) => {
      return <ChoicesSpan key={index}>
        <ChoicesName>{item}</ChoicesName>
        <ChoicesCheckbox
          type='radio'
          checked={item === choice}
          value={item}
          onChange={() => setChoices(item)} />
      </ChoicesSpan>
    })}</ChoicesStyle >
}
