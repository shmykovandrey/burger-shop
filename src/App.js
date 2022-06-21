import React from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalWindow } from './components/ModalWindow';

function App() {
  const [openItem, setOpenItem] = React.useState(null)
  return (
    <GlobalStyle>
      <Header />
      <Menu setOpenItem={setOpenItem} />
      <ModalWindow openItem={openItem} setOpenItem={setOpenItem} />
    </GlobalStyle>
  );
}

export default App;
