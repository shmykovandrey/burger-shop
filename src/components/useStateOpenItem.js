import { useState } from 'react'


export function useStateOpenItem() {
  const [openItem, setOpenItem] = useState(null)
  return { openItem, setOpenItem }
}
