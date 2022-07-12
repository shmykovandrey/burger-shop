import React from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalWindow } from './components/ModalWindow';
import { Order } from './components/Order';
import { Main } from './components/Main';

function App() {
  const [openItem, setOpenItem] = React.useState(null)
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Order />
        <Menu setOpenItem={setOpenItem} />
      </Main>
      <ModalWindow openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
