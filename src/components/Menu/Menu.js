import React from "react";
import styled from "styled-components"
import { MenuList } from "./MenuList";
import Banner from "../../svg/banner.png"

const UlList = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 31px;
  column-gap: 94px;
`

const BannerStyle = styled.img`
  width: 1060px;
  height: 210px;
  background-size: cover;
  background-position: center;
`

const MenuStyled = styled.div`
  background-color: #fff;
`;

const H2MenuStyled = styled.h2`
padding: 20px;
`;

export const Menu = ({ setOpenItem }) => (
  <MenuStyled>
    <BannerStyle src={Banner} alt='Banner' />
    <H2MenuStyled>Бургеры</H2MenuStyled>
    <UlList>
      <MenuList item='burger' setOpenItem={setOpenItem} />
    </UlList>
    <H2MenuStyled>Закуски/Напитки</H2MenuStyled>
    <UlList>
      <MenuList item='other' setOpenItem={setOpenItem} />
    </UlList>
  </MenuStyled>
);
