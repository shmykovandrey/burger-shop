import styled from "styled-components"
import { CheckoutButton } from "../Styled/CheckoutButton"
import { CountItem } from "./CountItem"
import { TotalCountPrice } from "./TotalCountPrice"
import { useCount } from "../Hooks/useCount";
import { toLocaleLang } from "../basicFunction";
import { Toppings } from "./Toppings";
import { useToppings } from "../Hooks/useToppings";
import { Choices } from "./Choices";
import { useChoices } from "../Hooks/useChoices";


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

export const ModalWindow = ({ openItem, setOpenItem, orders, setOrders }) => {
  const useCounts = useCount()
  const useToppingss = useToppings(openItem.toppings)
  const choices = useChoices(openItem.choices);

  const addOrder = () => {
    const toppingsCount = !useToppingss.toppings ? 0 : useToppingss.toppings.filter(item => item.checked).length
    const order = {
      ...openItem,
      key: Math.random(),
      count: useCounts.count,
      price: useCounts.count * (openItem.price + toppingsCount * openItem.price * 0.1),
      toppings: useToppingss.toppings || [],
      choice: choices.choice,
    }

    setOrders([...orders, order])
    setOpenItem(null);
  }

  console.log(openItem)
  return <>
    <Overlay id='overlay' onClick={(e) => setOpenItem(null)} />
    <ModalStyle>
      <BannerModal openItem={openItem} />
      <Content>
        <ContentHeader>
          <div>{openItem.name}</div>
          <div>{toLocaleLang(openItem.price)}</div>
        </ContentHeader>
        <CountItem {...useCounts} openItem={openItem} />
        {/* {openItem.toppings && <Toppings {...useToppingss} />} */}
        {openItem.choices && <Choices {...choices} openItem={openItem} />}
        <TotalCountPrice {...useCounts} {...openItem} {...useToppingss} />
        <CheckoutButton
          onClick={addOrder}
          disabled={openItem.choices && !choices.choice}
        >Добавить</CheckoutButton>
      </Content>
    </ModalStyle>
  </>
}
