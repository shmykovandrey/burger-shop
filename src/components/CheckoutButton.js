import React from "react";
import styled from "styled-components";

const CheckoutButtonStyle = styled.button`
  width: 250px;
  height: 65px;
  background-color: #299B01;
  color: #fff;
  border: transparent;
  &:hover{
    cursor: pointer;
  }
`

export const CheckoutButton = () => (
  <CheckoutButtonStyle>Добавить</CheckoutButtonStyle>
)
