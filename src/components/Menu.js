import React from "react";
import styled from "styled-components"
import { MenuList } from "./MenuList";
import Banner from "../svg/banner.png"

const UlList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 31px;
  column-gap: 94px;
`

const BannerStyle = styled.img`
  width: 1060px;
`

export const Menu = () => (
  <>
    <BannerStyle src={Banner} alt='Banner' />
    <h2>Бургеры</h2>
    <UlList>
      <MenuList item='burger' />
    </UlList>
    <h2>Закуски/Напитки</h2>
    <UlList>
      <MenuList item='other' />
    </UlList>
  </>
);
