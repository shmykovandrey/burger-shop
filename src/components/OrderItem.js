import React from "react";
import styled from "styled-components";
import trashItem from "../svg/trash.svg";


const OrderItemStyled = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
`;

const TrashStyled = styled.button`
  background-image: url(${trashItem});
  width: 24px;
  height: 24px;
  border: 0px;
  &:hover{
    cursor: pointer;
  }
`;

const ItemNameStyle = styled.span`
    flex-grow: 1;
    text-align: left;
`;

const ItemQuantStyle = styled.span`
    margin: 5px;
`;

const ItemPriceStyle = styled.span`
    margin: 5px;
`;


export const OrderItem = ({ order }) => (
  <OrderItemStyled>
    <ItemNameStyle>{order.name}</ItemNameStyle>
    <ItemQuantStyle>1шт.</ItemQuantStyle>
    <ItemPriceStyle>{order.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</ItemPriceStyle>
    <TrashStyled />
  </OrderItemStyled>
)
