import React from "react";
// import styled from "styled-components"
import allMenu from "./DBMenu"



export const MenuList = (props) => {
  if (props.burgers) {
    return (
      allMenu.burger.map((burger) => (<li>{burger.name}</li>))
    )
  }
  else { return (allMenu.other.map((other) => (<li>{other.name}</li>))) }
}
