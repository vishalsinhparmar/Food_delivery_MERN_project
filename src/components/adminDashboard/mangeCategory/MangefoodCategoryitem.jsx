import { useContext, useEffect, useState } from "react";
import { categoryItemdeleteByid, getfoodcategory } from "../Apibaseurl";
import { MyContext } from "../contextprovider/Mycontext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManagefoodCategoryitem = () => {
  const navigate = useNavigate();
  const [categoryData, setcategoryData] = useState([]);
  const {
    product,
    categoryId,
    handleChangeCategory,
    select,
    setSelectvalue,
  } = useContext(MyContext);

  useEffect(() => {
    console.log("select from the categoryItem", select);

    try {
      const FetchcategoryData = async () => {
        if (select.categoryItemselect) {
          const res = await getfoodcategory(select.categoryItemselect);
          if (res.success === true) {
            setcategoryData(res.data.categoryIteam || []);
          }
        }
      };
      FetchcategoryData();
    } catch (err) {
      console.log("error occur in the mangeCategory", err.message);
    }
  }, [select.categoryItemselect]);

  const handleCategorydelete = async (id) => {
    try {
      const res = await categoryItemdeleteByid(id);
      if (res.success === true) {
        const deletdata = categoryId.filter((data) => data._id !== id);
        setcategoryData(deletdata);
        setSelectvalue({});
         Swal.fire({
                                title: "CategoreyItem",
                                text: "CategoreyAdd item remove successfully",
                                icon: "error"
                              });
      }
    } catch (err) {
      console.log("error in the category", err.message);
    }
  };

  return (
    <div className="p-5">
      {/* Dropdown for selecting a category */}
      <div className="mb-6">
        <select
          className="w-full rounded-lg p-3 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          name="categoryItemselect"
          value={select.categoryItemselect || "default"}
          onChange={handleChangeCategory}
          required
        >
          <option value="default" disabled>
            Select category
          </option>
          {categoryId.map((val) => (
            <option value={val._id} key={val._id}>
              {val.Categoryname}
            </option>
          ))}
        </select>
      </div>

      {/* Category Items */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categoryData.map((data) => (
          <div
            key={data._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-200 hover:scale-105"
          >
            {/* Image Section */}
            <div className="w-full h-40 overflow-hidden bg-gray-200 flex items-center justify-center">
              <img
                src={data.image}
                alt={data.categoryItemName}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 truncate">
                {data.categoryItemName}
              </h2>
              <p className="text-gray-600 mt-2">{data.description}</p>

              {/* Pricing Section */}
              <div className="mt-4 grid gap-3">
                {data?.pricing?.map((price, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
                  >
                    <span className="font-medium text-gray-700">
                      {price.size}
                    </span>
                    <button className="bg-black text-white rounded-md px-3 py-1 text-sm">
                      &#x20B9;{price.price}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 border-t flex justify-between items-center">
              <button
                className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={() => handleCategorydelete(data._id)}
              >
                <RiDeleteBin5Line />
                Delete
              </button>
              <button
                className="flex items-center justify-center gap-2 bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                onClick={() => navigate(`/admin/Foods/${data._id}`)}
              >
                <FaRegEdit />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagefoodCategoryitem;
