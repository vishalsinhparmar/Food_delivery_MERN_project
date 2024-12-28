import { useContext, useEffect } from "react"

import ManagefoodCategoryitem from "./MangefoodCategoryitem.jsx";
import { MyContext } from "../contextprovider/Mycontext.jsx";
import ManageSubcategory from "./ManageSubcategory.jsx";
import MangeCategory from "./ManageCategory.jsx";

export default function AddFoodCategory() {
  
  const {
    handleChangeCategory,
    select,
    setSelectvalue
  } = useContext(MyContext);


 
 
  console.log(select)
  const categorycomponets = () => {
    switch (select.category) {
      case "category":
        return <MangeCategory/>

      case "categoryIteam":
        return <ManagefoodCategoryitem />
      
        case "subcategory":
          return <ManageSubcategory/>
        

    }
  }

  return (
    <div>

      <div className='py-4 '>


       
        <p className='opacity-50 font-medium'>Add this category</p>
      </div>

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
}
