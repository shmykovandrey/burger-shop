import React from "react";
import styled from "styled-components";
import { OrderItem } from "./OrderItem"
import { CheckoutButton } from "./CheckoutButton";
import { OrderTotal } from "./OrderTotal"

const OrderStyle = styled.div`
  min-width: 380px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  background-color: #fff;
  border-right: 4px solid #f2f2f2;
  /* box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25); */
`

const OrderHeader = styled.div`
  text-align: center;
`

const OrderTitle = styled.h2`
  text-align: center;
`

const OrderList = styled.ul`
`;

export const Order = () => {
  return (
    <OrderStyle>
      <OrderHeader>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderList>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </OrderList>
      </OrderHeader>
      <OrderTotal />
      <CheckoutButton>Оформить</CheckoutButton>
    </OrderStyle>
  )
}
