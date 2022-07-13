import React from "react";
import styled from "styled-components";
import { toLocaleLang } from "../basicFunction";

const OrderTotalStyle = styled.div`
  margin: 10px;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  & span:first-child{
    flex-grow: 1;
  }
`;

const SpanStyled = styled.span`
  padding: 10px;
`;

export const OrderTotal = () => (
  <OrderTotalStyle>
    <SpanStyled>ИТОГО</SpanStyled>
    <SpanStyled>5</SpanStyled>
    <SpanStyled>{toLocaleLang(850)}</SpanStyled>
  </OrderTotalStyle>
)
