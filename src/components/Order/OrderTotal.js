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

export const OrderTotal = ({ orders }) => (
  <OrderTotalStyle>
    <SpanStyled>ИТОГО</SpanStyled>
    <SpanStyled>{orders.reduce((res, item) => res = res + item.count, 0)} шт.</SpanStyled>
    <SpanStyled>{toLocaleLang(orders.reduce((res, item) => res = res + item.price, 0))}</SpanStyled>
  </OrderTotalStyle>
)
