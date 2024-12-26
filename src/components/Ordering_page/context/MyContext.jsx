import { createContext, useState } from "react"

const OrderContext = createContext();
const OrderProvider = ({children})=>{
    const [orderCopmonentValue,SetOrderComponentValue] =useState({name:"",id:null});
    const [category,setCategory] = useState();

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
                                  orderCopmonentValue
        }} >
            {children}
        </OrderContext.Provider>
    )
}

export {OrderProvider,OrderContext}