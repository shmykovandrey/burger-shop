import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
html{
  box-sizing:border-box;
}
*,
*::before,
*::after,
p{
  box-sizing:border-box;
  margin:0px;
  padding:0px;
}
body{
  font-family: Roboto, sans-serif;
}

a{
  font: inherit;
}

li{
  list-style: none;
}
`