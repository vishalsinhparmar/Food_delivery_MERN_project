import { createContext, useEffect, useState } from "react"

const OrderContext = createContext();
const OrderProvider = ({ children }) => {
  const [data,setdata] = useState([]);
  // const [category,setCategory] = useState();
    const [category,setcategoryData] = useState([]);
    const [categoryData, setdataCategory] = useState([]);

  console.log("category is context",category[0])
  const [orderCopmonentValue, SetOrderComponentValue] = useState(
                                                                 { name:category.length  > 0 ? category[0].Categoryname:"",
                                                                   id:category.length  > 0 ? category[0]._id:null});
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
  
  useEffect(() => {
    if (category.length > 0) {
      SetOrderComponentValue({
        name: category[0].Categoryname,
        id: category[0]._id,
      });
    }
  }, [category]);

  const handelSetOrderComponentValue = (menuItem , id) => {
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
      SetOrderComponentValue,
      Subcategoryprice,
      setInstructionid,
      instructionId,
      handleModelisclose,
      modelIsopen,
      nextmodalIsopen,
      handleModelisopen,
      NextsetmodelIsopen,
      setdata,
      setcategoryData,
      category,
      data,
      setdataCategory,
      categoryData
    }} >
      {children}
    </OrderContext.Provider>
  )
}

export { OrderProvider, OrderContext }