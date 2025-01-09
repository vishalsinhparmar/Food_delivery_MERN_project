import { useContext } from "react";
import { MyContext } from "../contextprovider/Mycontext.jsx";
import AddfoddCategoryItem from "./AddfoddCategoryItem.jsx";
import AdminAddSubCategory from "./AddSubCategory.jsx";
import CategoreyAdd from "./AddCategoryadd.jsx";

export default function AddFoodCategory() {
  const { handleChangeCategory, select } = useContext(MyContext);

  const renderCategoryComponents = () => {
    switch (select.category) {
      case "category":
        return <CategoreyAdd />;

      case "categoryIteam":
        return <AddfoddCategoryItem />;

      case "subcategory":
        return <AdminAddSubCategory />;

      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md my-4" >
      {/* Header Section */}
      <div className="text-center mb-6">
        <p className="text-2xl font-semibold text-blue-500">
          Please select a category
        </p>
      </div>

      {/* Select Dropdown */}
      <div className="mb-6">
        <label
          htmlFor="category"
          className="block text-lg font-medium text-gray-700 mb-2"
        >
          Select Category:
        </label>
        <select
          name="category"
          id="category"
          value={select.category || "default"}
          className="w-full bg-white border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChangeCategory}
        >
          <option disabled value="default">
            Select List
          </option>
          <option value="category">Category</option>
          <option value="categoryIteam">Category Item</option>
          <option value="subcategory">Subcategory</option>
        </select>
      </div>

      {/* Rendered Component */}
      <div className="bg-white p-6 rounded-md shadow-sm">
        {renderCategoryComponents() || (
          <p className="text-gray-500 text-center">No category selected yet.</p>
        )}
      </div>
    </div>
  );
}
