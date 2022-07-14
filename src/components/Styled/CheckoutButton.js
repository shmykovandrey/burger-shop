import styled from "styled-components";

export const CheckoutButton = styled.button`
  width: 250px;
  height: 65px;
  background-color: #299B01;
  color: #fff;
  border: 0px;
  transition-duration: 0.3s;
  transition-property:  background-color, color, border;
  font-size:24px;
  &:hover{
    cursor: pointer;
    background-color: #fff;
    color: #299B01;
    border: 2px solid #299B01;
  }
  &:disabled{
    background-color: #bbb;
    color: #aaa;
    border: 2px solid #ccc;
  }
`


