import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
html{
  box-sizing:border-box;
  height: 100%;
}
*,
*::before,
*::after,
p{
  box-sizing: border-box;
  margin:0px;
  padding:0px;
}
body{
  width: 100%;
  height: 100%;
  font-family: Roboto, sans-serif;
  background-color: #E5E5E5;
}

a, div, span, button{
  font-size: inherit;
}

li{
  list-style: none;
}

#root{
  min-height: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance: none;
}
`
