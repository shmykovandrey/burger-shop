import React from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalWindow } from './components/ModalWindow';
import { Order } from './components/Order';
import { Main } from './components/Main';
import { useStateOpenItem } from './components/useStateOpenItem'
import { useStateOrderItem } from './components/useStateOrderItem'

function App() {
  const useOpenItem = useStateOpenItem();
  const useOrderItem = useStateOrderItem();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Order {...useOrderItem} />
        <Menu {...useOpenItem} />
      </Main>
      {useOpenItem.openItem && <ModalWindow {...useOpenItem} {...useOrderItem} />}

    </>
  );
}

export default App;
