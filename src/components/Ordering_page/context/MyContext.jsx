import { createContext, useEffect, useState } from "react"
import { getcategory, getfoodcategory } from "../../adminDashboard/Apibaseurl";
import { getCartData } from "../../../services/Api";

const OrderContext = createContext();
const OrderProvider = ({ children }) => {
  const [data,setdata] = useState([]);
  // const [category,setCategory] = useState();
    const [category,setcategoryData] = useState([]);
    const [categoryData, setdataCategory] = useState([]);
    const [loading,setloading] = useState(false);
    const [error,setError] = useState({err:""})
     console.log('error come from the context for cartITem',error)
  console.log("category is context",category[0])
  const [orderCopmonentValue, SetOrderComponentValue] = useState(
                                                                 { name:category.length  > 0 ? category[0].Categoryname:"",
                                                                   id:category.length  > 0 ? category[0]._id:null});
  const [Subcategoryprice, setSubcategoryprice] = useState({ price: 0 })
  const [modelIsopen, setmodelisOpen] = useState(false);
  const [nextmodalIsopen, NextsetmodelIsopen] = useState(false);
  const [instructionId,setInstructionid] = useState(null)

  console.log('model is Open',modelIsopen)
 
  const fetchCartData = async ()=>{
    try{
     const res = await getCartData();
     console.log("res of cart",res.data)
     if(res.success === true){
       
         setdata(res.data)
        //  alert('data fectched success')
     }
     console.log("res from the cartData",res)
    }catch(err){
      console.log("error occur in the basket fetchCartData",err.response)
      const {user} = err.response.data.data;
      console.log("error are ",error)
      setError((prev)=>(
         {
           ...prev,
           err:user
         }
      ))
  }
  
}

  const handleModelisopen = () => {
    setmodelisOpen(!modelIsopen)
    NextsetmodelIsopen(false)
  }
  const handleModelisclose = () => {
    setmodelisOpen(!modelIsopen)
  }
  // default category
  useEffect(() => {
    if (category.length > 0) {
      SetOrderComponentValue({
        name: category[0].Categoryname,
        id: category[0]._id,
      });
    }
  }, [category]);

  // fetchcategory data
  const FetchcategoryData = async ()=>{
    try{
      setloading(true)
      const res = await getcategory();
      console.log("res in the FetchcategoryData",res)
      if(res.success === true){
        setcategoryData(res.data);
        
        
      }
    } catch(err){
       console.log("error hapen in the categoryFetch")
    } finally{
          setloading(false)
        }
   
     
    }
  
    useEffect(()=>{
      FetchcategoryData();
    },[])



  const handelSetOrderComponentValue = (menuItem , id) => {
    console.log('id is', id)
    console.log("menuItem", menuItem)
    SetOrderComponentValue((prevState) => ({
      ...prevState, // Spread the previous state
      name:menuItem, // Update the name
      id:id, // Update the id
    }));




  }

  // fetchcategory Item list based on ID
  useEffect(() => {
    const FetchcategoryItem = async () => {
      console.log("category", orderCopmonentValue.id)
      const res = await getfoodcategory(orderCopmonentValue.id);
      if (res.success === true) {
        setdataCategory(res.data.categoryIteam)
      }
      console.log("res of the categoryItem", res)
    }
    FetchcategoryItem()

  }, [orderCopmonentValue.id])
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
      categoryData,
      loading,
      fetchCartData,
      error
    }} >
      {children}
    </OrderContext.Provider>
  )
}

export { OrderProvider, OrderContext }