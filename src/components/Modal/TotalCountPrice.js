import React from "react";
import styled from "styled-components";
import { toLocaleLang } from "../basicFunction";

const TotalCountPriceStyle = styled.div``;

export const TotalCountPrice = ({ count, price }) => (
  <TotalCountPriceStyle>
    <span>Итого:  </span>
    <span>{toLocaleLang(price * count)}</span>
  </TotalCountPriceStyle>
)
