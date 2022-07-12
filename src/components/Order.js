import React from "react";
import styled from "styled-components";

const OrderStyle = styled.div`
  width: 380px;
  height: 1666px;
`

const OrderHeader = styled.div`
  text-align: center;
`

const OrderTitle = styled.h2`
  text-align: center;
`


export const Order = () => {
  return (
    <OrderStyle>
      <OrderHeader>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <p>Вы еще ничего не добавили</p>
        <p>Вы еще ничего не добавили</p>
        <p>Вы еще ничего не добавили</p>
      </OrderHeader>
    </OrderStyle>
  )
}
