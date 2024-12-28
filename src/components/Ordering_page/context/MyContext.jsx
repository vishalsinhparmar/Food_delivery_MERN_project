import { createContext, useState } from "react"

const OrderContext = createContext();
const OrderProvider = ({children})=>{
    const [orderCopmonentValue,SetOrderComponentValue] =useState({name:"",id:null});
    const [category,setCategory] = useState();
    const [Subcategoryprice,setSubcategoryprice] = useState({price:0})

     const handelSetOrderComponentValue = (menuItem,id)=>{
             console.log('id is',id)
            console.log("menuItem",menuItem)
            SetOrderComponentValue((prevState) => ({
              ...prevState, // Spread the previous state
              name:menuItem, // Update the name
              id:id, // Update the id
            }));
           
           
      }
    return(
        <OrderContext.Provider value={{
                                  handelSetOrderComponentValue,
                                  orderCopmonentValue,
                                  setSubcategoryprice,
                                  Subcategoryprice
        }} >
            {children}
        </OrderContext.Provider>
    )
}

export {OrderProvider,OrderContext}