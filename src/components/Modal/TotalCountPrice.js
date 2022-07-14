import React from "react";
import styled from "styled-components";
import { toLocaleLang } from "../basicFunction";

const TotalCountPriceStyle = styled.div``;

export const TotalCountPrice = ({ count, price, toppings }) => {
  const toppingsCount = !toppings ? 0 : toppings.filter(item => item.checked).length
  return (<TotalCountPriceStyle>
    <span>Итого:  </span>
    <span>{toLocaleLang((price + price * toppingsCount * 0.1) * count)}</span>
  </TotalCountPriceStyle>)
}
