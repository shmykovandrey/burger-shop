import React from "react";
import styled from "styled-components";
import trashItem from "../../svg/trash.svg";
import { toLocaleLang } from "../basicFunction";

const OrderItemStyled = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 22px;
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

const ItemNameStyle = styled.div`
  flex-grow: 1;
  text-align: left;
`;

const ItemQuantStyle = styled.span`
  margin: 5px;
`;

const ItemPriceStyle = styled.span`
  margin: 5px;
`;

const OrderToppings = styled.span`
  color: #d1d1d1;
  text-align: left;
  margin: 5px;
`;

const DivTopping = styled.div`
  text-align: left;
`;

export const OrderItem = ({ order, orders, setOrders }) => {

  function deleteOrder(order) {
    setOrders(orders.filter(item => item.key !== order.key))
  }

  return <><OrderItemStyled>
    <ItemNameStyle>{order.name} {order.choice}</ItemNameStyle>
    <ItemQuantStyle>{order.count} шт.</ItemQuantStyle>
    <ItemPriceStyle>{toLocaleLang(order.price)}</ItemPriceStyle>
    <TrashStyled onClick={() => deleteOrder(order)} />
  </OrderItemStyled >
    <DivTopping>{order.toppings && order.toppings.map(item => item.checked && <OrderToppings>{item.name}</OrderToppings>)}</DivTopping>
  </>
}
