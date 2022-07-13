import { useState } from 'react'

export function useStateOrderItem() {
  const [orders, setOrders] = useState([])
  return { orders, setOrders }
}
