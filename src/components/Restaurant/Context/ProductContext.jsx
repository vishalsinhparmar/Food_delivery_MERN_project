import { createContext, useContext, useEffect, useState } from "react";
import { ProductData } from "../../../services/Api";
import { getfoodcategoryItembyid } from "../../adminDashboard/Apibaseurl";

const ProductContext = createContext();
const ProductContextProvider = ({children}) =>{
      const [modaldataId,setmodaldataId]=useState();
      console.log("modaldataId",modaldataId)
      const [modalData,setModaldata] = useState(null);

    const [productData,setProductdata] = useState([]);
     console.log("productData",productData)
    const  [newProductdata , setnewProductdata] = useState([])
     const [modalIsopen,setmodalIsopen]=useState(false);
      const handelModelIsopen = (id)=>{
        setmodalIsopen(!modalIsopen);
        setmodaldataId(id)
      }
      const handelModelIsclose = ()=>{
        setmodalIsopen(!modalIsopen);
      }

     const fetchProductdata = async()=>{
         try{
            const res = await ProductData();
             console.log('res of the producList',res)
            if(res.success === true){
                 const ProduList = res.data;
                 setProductdata(ProduList)
          
                
                const desireProduct = ["Burgers","Fries","Cold drinks"];
                const newProductdata = ProduList.filter(item => desireProduct.includes(item.Categoryname))
                console.log("newProductdata",newProductdata);
                setnewProductdata(newProductdata)
            
         
            }else{
               console.log('error to fetching a data')
            }  
         }catch(err){
            console.log("error message",err.response)
         }

         try{
       
             const res = await getfoodcategoryItembyid(modaldataId);
              console.log("modaldataId",modaldataId)
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
            modalData, newProductdata,setmodaldataId,modaldataId,handelModelIsopen,modalIsopen,handelModelIsclose
         }}>
             {children}
         </ProductContext.Provider>
     )
};

export {ProductContext,ProductContextProvider};