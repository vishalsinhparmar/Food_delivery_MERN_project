import { createContext, useEffect, useState } from "react";
import { getcategory } from "../Apibaseurl";

const MyContext = createContext();

const MyProvider = ({children}) =>{
    const [categoryId,setcategoryId] = useState([]);
    const [error,setError] = useState("");
    
    const [select,setSelectvalue] = useState({category:"default"});

    const [product,setproductvalue] = useState({});

    const [image,setimage] = useState({});
    
  
      
        const fetchCategory = async () => {
          try {
          const res = await getcategory();
          if(res.success === true){

            setcategoryId(res.data)
          } 
        }catch(error) {
        console.log('error happen in the fetchCategory')
      }
        }
      useEffect(()=>{
          fetchCategory()
      },[]);

      const refreshCategory = ()=>{
        fetchCategory() 
      }
          
  
  
 
    const handleChangevalue = (e)=>{
          const {name,value} = e.target
          setproductvalue({...product, [name]:value})
          setError('')
    }
    const handleChangeCategory = (e)=>{
      const {name,value} = e.target
      setSelectvalue((prev)=>(
        {
          ...prev,
          [name]:value
        }
      ))
}

    const handlchangeImage = (e) => {
         const {name,files} = e.target 
          setimage({...image,[name]:files[0]})
      }
    
    return(
        <MyContext.Provider value={{categoryId,
                                    setcategoryId,
                                    handleChangevalue,
                                    product,
                                    handlchangeImage,
                                    image,
                                    setproductvalue,
                                    setimage,
                                    refreshCategory,
                                    setSelectvalue,
                                    select,
                                    handleChangeCategory,
                                    setError,
                                    error
                                    }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyProvider,MyContext}