import { createContext, useContext, useEffect, useState } from "react";
import { ProductData } from "../../../services/Api";
import { getfoodcategoryItembyid } from "../../adminDashboard/Apibaseurl";

const ProductContext = createContext();
const ProductContextProvider = ({children}) =>{
      const [modaldata,setmodaldata]=useState(null);
      const [modalData,setModaldata] = useState([]);

    const [productData,setProductdata] = useState([]);
     console.log("productData",productData)
    const  [newProductdata , setnewProductdata] = useState([])
     const [modalIsopen,setmodalIsopen]=useState(false);
      const handelModelIsopen = (item)=>{
        setmodalIsopen(!modalIsopen);
        setmodaldata(item)
      }
      const handelModelIsclose = ()=>{
        setmodalIsopen(!modalIsopen);
      }

     const fetchProductdata = async()=>{
         try{
            const res = await ProductData();
             console.log('res of the producList',res)
            if(res.success === true){
                 setProductdata(res.data)
          
                 console.log('producList',productData)
                const desireProduct = ["Burgers","Fries","Cold drinks"];
                const newProductdata = productData.filter(item => desireProduct.includes(item.Categoryname))
                console.log("newProductdata",newProductdata);
                setnewProductdata(newProductdata)
            
         
            }   
         }catch(err){
            console.log("error message",err.response)
         }

         try{
             const res = await getfoodcategoryItembyid(modaldata);
             console.log("res are happen in the getfoodcategoryItem",res)
             if(res.success === true){
                setModaldata(res.data)
             } 

         }catch(err){
            console.log("err is happen in the fectchModldata",err.response)
         }
     }


    useEffect(()=>{
        fetchProductdata()
    },[])

    return (
         <ProductContext.Provider value={{
            modalData, newProductdata,setmodaldata,modaldata,handelModelIsopen,modalIsopen,handelModelIsclose
         }}>
             {children}
         </ProductContext.Provider>
     )
};

export {ProductContext,ProductContextProvider};