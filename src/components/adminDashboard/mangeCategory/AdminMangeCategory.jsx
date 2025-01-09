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

  const categorycomponets = () => {
    switch (select.category) {
      case "category":
        return <MangeCategory />
      case "categoryIteam":
        return <ManagefoodCategoryitem />
      case "subcategory":
        return <ManageSubcategory />
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-6 px-4">
        <h2 className="text-xl font-semibold text-gray-700">Manage a Category</h2>
        <p className="text-sm text-gray-500 mt-1">Please select a category type to manage.</p>
      </div>

      <div className="m-6 bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Select Category Type</label>
          <select
            name="category"
            id=""
            value={select.category || "default"}
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-3"
            onChange={handleChangeCategory}
          >
            <option disabled value="default">Select List</option>
            <option value="category">Category</option>
            <option value="categoryIteam">Category Item</option>
            <option value="subcategory">Subcategory</option>
          </select>
        </div>

        <div>
          {categorycomponets()}
        </div>
      </div>
    </div>
  )
}
