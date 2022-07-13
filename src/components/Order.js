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
  background-color: #fff;
  border-right: 4px solid #f2f2f2;
  /* box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25); */
`

const OrderHeader = styled.div`
  text-align: center;
  margin: 20px;
  width: 100%;
`

const OrderTitle = styled.h2`
  text-align: center;
  margin: 20px;
`

const OrderList = styled.ul`
width: 100%;
`;

export const Order = ({ orders }) => {
  return (
    <OrderStyle>
      <OrderHeader>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderList>
          {orders.length === 0 ? <p>Нет никаких ордеров</p> :
            orders.map(order => <OrderItem order={order} />)
          }
        </OrderList>
      </OrderHeader>
      <OrderTotal />
      <CheckoutButton>Оформить</CheckoutButton>
    </OrderStyle>
  )
}
