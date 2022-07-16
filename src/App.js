import React from 'react';
import { Header } from './components/Header/Header';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './components/Styled/GlobalStyle';
import { ModalWindow } from './components/Modal/ModalWindow';
import { Order } from './components/Order/Order';
import { Main } from './components/Menu/Main';
import { useStateOpenItem } from './components/Hooks/useStateOpenItem'
import { useStateOrderItem } from './components/Hooks/useStateOrderItem'

function App() {
  const useOpenItem = useStateOpenItem();
  const useOrderItem = useStateOrderItem();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Order {...useOrderItem} {...useOpenItem} />
        <Menu {...useOpenItem} />
      </Main>
      {useOpenItem.openItem && <ModalWindow {...useOpenItem} {...useOrderItem} />}

    </>
  );
}

export default App;
