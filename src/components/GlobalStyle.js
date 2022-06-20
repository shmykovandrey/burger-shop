import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
}

*,
*::before,
*::after,
p{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body{
  width: 1440px;
  margin: 0 auto;
  font-family: 'Pacifico', sans-serif;
}

a{
  font: inherit;
}

li{
  list-style: none;
}
`
