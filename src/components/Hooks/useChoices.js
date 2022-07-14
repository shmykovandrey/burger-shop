import { useState } from "react";


export const useChoices = () => {
  const [choice, setChoices] = useState()
  return { choice, setChoices }
}
