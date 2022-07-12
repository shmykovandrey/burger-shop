import styled from "styled-components"
import { CheckoutButton } from "./CheckoutButton"

const Overlay = styled.div`
  position: fixed;
  top:0px;
  left:0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 20;
`

const ModalStyle = styled.div`
  position: fixed;
  height: 600px;
  width: 600px;
  top: 50%;
  left: 50%;
  margin-left: -300px;
  margin-top: -300px;
  background-color: #fff;
  z-index: 20;
`
const BannerModal = styled.div`
  width: 600px;
  height: 200px;
  background-image: url(${props => '.' + props.openItem.img});
  background-position: center;
  background-size: cover;
`

const Content = styled.div`
  height: 400px;
  font-size: 24px;
  font-family: 'Pacifico', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const ContentHeader = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-evenly;
`

export const ModalWindow = ({ openItem, setOpenItem }) => {
  if (!openItem) return null
  return <>
    <Overlay id='overlay' onClick={(e) => setOpenItem(null)} />
    <ModalStyle>
      <BannerModal openItem={openItem} />
      <Content>
        <ContentHeader>
          <div>{openItem.name}</div>
          <div>{openItem.price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}</div>
        </ContentHeader>
        <CheckoutButton />
      </Content>
    </ModalStyle>
  </>
}
