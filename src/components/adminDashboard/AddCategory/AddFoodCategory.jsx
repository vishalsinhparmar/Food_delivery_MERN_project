import { useContext, useEffect, useState } from "react"
// import AdminAddSubCategory from "./AddSubCategory.jsx";
import { MyContext } from "../contextprovider/Mycontext.jsx";
// import AddfoddCategoryItem from "./AddfoddCategory.jsx";
// import CategoreyAdd from "./AddCategoryadd.jsx";
import { useParams } from "react-router-dom";
import AddfoddCategoryItem from "./AddfoddCategoryItem.jsx";
import AdminAddSubCategory from "./AddSubCategory.jsx";
import CategoreyAdd from "./AddCategoryadd.jsx";

export default function AddFoodCategory() {

  // const {id} = useParams();
  // const [updid,seupdtId] = useState(null)
  const {
   
    handleChangeCategory,
    setSelectvalue,
    select
  } = useContext(MyContext);
console.log("for select are providing only a seleted object",select)
 console.log('select value from the category main',select);


 const categorycomponets = ()=>{
  
   switch(select.category){
    
    case "category":
    return  <CategoreyAdd/>

     
    case "categoryIteam":
     return <AddfoddCategoryItem/>
    

     case "subcategory":
      return <AdminAddSubCategory/>
     

    default :null

   }
  }

    return (

    <div>
          <p className="text-2xl flex items-center justify-center font-semibold text-blue-500">please select a category</p>
          <div className="m-4">
        <select
          name="category"
          id=""
          value={select.category || "default"}
          className="bg-white rounded-md p-4"
          onChange={handleChangeCategory}

        >
          <option disabled value="default" className="bg-white p-4">selct List</option>
          <option value="category">category</option>
          <option value="categoryIteam">categoryIteam</option>
          <option value="subcategory">subcategory</option>

        </select>
      </div>
        

       <div>
   
        {categorycomponets()}
   
       </div>
    </div>
    )
     









  return (
    <div>

      <div className='py-4 '>
        <h1 className='text-3xl font-semibold my-2'>Category name :<span className=' underline underline-offset-8 ml-2 text-blue-400 mb-3 font-normal'></span>


        </h1>
        <p className='opacity-50 font-medium'>Add this category</p>
      </div>

      <div className="m-4">
        <select
          name="slectitem"
          id=""
          value={select.slectitem || "default"}
          className="bg-white rounded-md p-4"
          onChange={handleChangeCategory}
        >

          <option value="default"  disabled className="bg-white p-4">selct List</option>
          <option value="category">category</option>
          <option value="categoryIteam">categoryIteam</option>
          <option value="subcategory">subcategory</option>

        </select>
      </div>

        <div>
            {categorycomponets()}
        </div>


 

    </div>
  )
}
