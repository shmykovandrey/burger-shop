import React from "react";
import styled from "styled-components"
import allMenu from "../DBMenu"
import { toLocaleLang } from "../basicFunction";


const LiItems = styled.li`
position: relative;
width: 400px;
height: 155px;
color: #fff;
font-size: 30px;
background-image: url(${props => '.' + props.img});
z-index: 1;
&::after{
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: black;
  z-index: -1;
  opacity: 50%;
}
&:hover{
  cursor: pointer;
  box-shadow: inset 0px 0px 50px 30px black;
  &::after{
    opacity: 0;
  }
}
`
const PStyled = styled.p`
padding: 5px 10px 0px;
`;

export const MenuList = ({ item, setOpenItem }) => (

  allMenu[item].map((burger) => (
    <LiItems
      img={burger.img}
      key={burger.id}
      onClick={() => setOpenItem(burger)}
    >
      <PStyled>{burger.name}</PStyled>
      <PStyled>{toLocaleLang(burger.price)}</PStyled>
    </LiItems>))

)
