import React from 'react';
import { GlobalStyle } from './components/GlobalStyle';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { ModalWindow } from './components/ModalWindow';

function App() {
  const [openItem, setOpenItem] = React.useState(null);
  console.log(openItem)
  return (
    <>
      <GlobalStyle />
      <Header />
      <Menu setOpenItem={setOpenItem} />
      <ModalWindow openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
