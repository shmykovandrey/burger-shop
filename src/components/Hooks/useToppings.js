import { useState } from "react";

function transformTopping(toppings) {
  if (!toppings) return null
  if (toppings[0].name) {
    console.log('toppings')
    return toppings
  }
  return toppings.map(item => ({
    name: item,
    checked: false
  }))
}
export const useToppings = (toppingss) => {
  const [toppings, setToppings] = useState(transformTopping(toppingss))

  function toppingSelect(index) {
    setToppings(toppings.filter((item, i) => {
      if (i === index) {
        item.checked = !item.checked
      }
      return item
    }))
  }
  return { toppings, toppingSelect }
}
