import React from "react";
import styled from "styled-components";
import { CheckoutButton } from "../Styled/CheckoutButton";
import { OrderItem } from "./OrderItem"
import { OrderTotal } from "./OrderTotal"


const OrderStyle = styled.div`
  min-width: 380px;
  height: calc(100vh - 80px);
  max-height: 200vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-right: 4px solid #f2f2f2;
`

const OrderBody = styled.div`
  text-align: center;
  margin: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const OrderTitle = styled.h2`
  text-align: center;
  margin: 20px;
`

const OrderList = styled.ul`
  margin-left: 10px;
`;

export const Order = ({ orders, setOrders }) => {
  return (
    <OrderStyle>
      <OrderBody>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderList>
          {orders.length === 0 ? <p>Ваш заказ пуст</p> :
            orders.map((order, i) => <OrderItem key={i} order={order} orders={orders} setOrders={setOrders} />)
          }
        </OrderList>
      </OrderBody>
      <OrderTotal orders={orders} />
      <CheckoutButton>Оформить</CheckoutButton>
    </OrderStyle>
  )
}
