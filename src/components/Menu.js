import React from "react";
// import styled from "styled-components"
import { MenuList } from "./MenuList";


export const Menu = () => (
  <ul>
    <h2>Бургеры</h2>
    <MenuList burgers={true} />
    <h2>Закуски/Напитки</h2>
    <MenuList burgers={false} />
  </ul>

);
