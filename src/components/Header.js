import React from "react";
import styled from "styled-components"
import logo from "../svg/fast-food.svg"
import user from "../svg/user.svg"


const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background-color: #299B01;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`

const H1 = styled.h1`
  color:#fff;
  display: flex;
  align-items: center;
  font-family: pacifico, sans-serif;
  padding-left: 25px;
`

const Enter = styled.a`
  color:#fff;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding-right: 25px;
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <H1><img src={logo} style={{ 'paddingRight': '10px' }} alt="logo" />MrDoooder</H1>
      <Enter><img src={user} alt="user" />Войти</Enter>
    </HeaderStyle>
  );
}
