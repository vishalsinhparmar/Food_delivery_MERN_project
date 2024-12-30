import { createContext, useState } from "react"

const OrderContext = createContext();
const OrderProvider = ({ children }) => {
  const [orderCopmonentValue, SetOrderComponentValue] = useState({ name: "", id: null });
  const [Subcategoryprice, setSubcategoryprice] = useState({ price: 0 })
  const [modelIsopen, setmodelisOpen] = useState(false);
  const [nextmodalIsopen, NextsetmodelIsopen] = useState(false);
  const [instructionId,setInstructionid] = useState(null)

  console.log('model is Open',modelIsopen)

  const handleModelisopen = () => {
    setmodelisOpen(!modelIsopen)
    NextsetmodelIsopen(false)
  }
  const handleModelisclose = () => {
    setmodelisOpen(!modelIsopen)
  }

  const handelSetOrderComponentValue = (menuItem, id) => {
    console.log('id is', id)
    console.log("menuItem", menuItem)
    SetOrderComponentValue((prevState) => ({
      ...prevState, // Spread the previous state
      name:menuItem, // Update the name
      id:id, // Update the id
    }));

   


  }
  return (
    <OrderContext.Provider value={{
      handelSetOrderComponentValue,
      orderCopmonentValue,
      setSubcategoryprice,
      Subcategoryprice,
      setInstructionid,
      instructionId,
      handleModelisclose,
      modelIsopen,
      nextmodalIsopen,
      handleModelisopen,
      NextsetmodelIsopen
    }} >
      {children}
    </OrderContext.Provider>
  )
}

export { OrderProvider, OrderContext }