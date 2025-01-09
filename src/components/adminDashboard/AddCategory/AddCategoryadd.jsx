import { useContext, useEffect } from "react";
import { addcategory, getcategory } from "../Apibaseurl";
import { MyContext } from "../contextprovider/Mycontext";
import { useParams } from "react-router-dom";

const CategoreyAdd = () => {
  const { id } = useParams();
  const {
    handleChangevalue,
    product,
    setproductvalue,
    refreshCategory,
  } = useContext(MyContext);

  const options = [
    { value: "select category", label: "Select Category" },
    { id: 1, value: "Pizzas", label: "Pizzas" },
    { id: 2, value: "Garlic Bread", label: "Garlic Bread" },
    { id: 3, value: "Calzone", label: "Calzone" },
    { id: 4, value: "Kebabas", label: "Kebabas" },
    { id: 5, value: "Salads", label: "Salads" },
    { id: 6, value: "Cold drinks", label: "Cold Drinks" },
    { id: 7, value: "Happy Meal®", label: "Happy Meal®" },
    { id: 8, value: "Desserts", label: "Desserts" },
    { id: 9, value: "Hot drinks", label: "Hot Drinks" },
    { id: 10, value: "Sauces", label: "Sauces" },
    { id: 11, value: "Orbit®", label: "Orbit®" },
    { id: 12, value: "Burgers", label: "Burgers" },
    { id: 13, value: "Fries", label: "Fries" },
  ];

  const handleAddCategory = async (e) => {
    e.preventDefault();

    try {
      const res = await addcategory(product);
      if (res.success === true) {
        setproductvalue({});
        refreshCategory();
        alert("Category added successfully!");
      }
    } catch (error) {
      console.error("Error creating category:", error.response);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="py-4 text-center">
        <h1 className="text-3xl font-semibold text-gray-800">
          Add New Category
        </h1>
        <p className="text-gray-500 mt-1">
          Choose a category to add to the product list.
        </p>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleAddCategory}
        className="bg-white p-6 rounded-md shadow-sm"
      >
        {/* Category Selection */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-lg font-medium text-gray-700"
          >
            Category:
          </label>
          <select
            id="category"
            name="category"
            className="w-full mt-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={product.category}
            onChange={handleChangevalue}
            required
          >
            {options.map((val) => (
              <option key={val.id} value={val.value}>
                {val.label}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoreyAdd;
