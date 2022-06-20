import React from "react";
import styled from "styled-components"
import { MenuList } from "./MenuList";
import Banner from "../svg/banner.png"

const UlList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 31px;
  column-gap: 94px;
`

const BannerStyle = styled.img`
  width: 1060px;
`

const Wrapper = styled.section`
  width: 1060px;
  margin-left: auto;
  margin-right: 0px;
`

const H2 = styled.h2`
  padding: 30px 0px 30px 80px;
`

export const Menu = ({ setOpenItem }) => (

  <Wrapper className='wrapper'>
    <BannerStyle src={Banner} alt='Banner' />
    <H2>Бургеры</H2>
    <UlList >
      <MenuList item='burger' setOpenItem={setOpenItem} />
    </UlList>
    <H2>Закуски/Напитки</H2>
    <UlList >
      <MenuList item='other' setOpenItem={setOpenItem} />
    </UlList>
  </Wrapper>
);
