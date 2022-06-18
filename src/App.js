import React from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';


function App() {
  return (
    <GlobalStyle>
      <Header />
      <Menu />
    </GlobalStyle>
  );
}

export default App;
