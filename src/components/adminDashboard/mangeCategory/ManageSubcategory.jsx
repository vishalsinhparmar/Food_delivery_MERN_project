import { useContext, useEffect, useState } from "react";
import { categorydeleteByid, getsubcategory, subCategorydeleteByid } from "../Apibaseurl";
import { MyContext } from "../contextprovider/Mycontext";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const ManageSubcategory = () => {
    const navigate = useNavigate();
    const [subcategoryData, setcategoryData] = useState([]);
    const { categoryId, select, handleChangeCategory } = useContext(MyContext);

    useEffect(() => {
        const FetchsubcategoryData = async () => {
            if (select.subcategory) {
                try {
                    const res = await getsubcategory(select.subcategory);
                    if (res.success) {
                        setcategoryData(res.data.subcategories);
                    }
                } catch (err) {
                    console.log("Error fetching subcategories:", err.message);
                }
            }
        };
        FetchsubcategoryData();
    }, [select.subcategory]);

    const handleCategorydelete = async (id) => {
        try {
            const res = await subCategorydeleteByid(id);
            if (res.success) {
                const updatedData = subcategoryData.filter((data) => data._id !== id);
                setcategoryData(updatedData);
            }
        } catch (err) {
            console.log("Error deleting subcategory:", err.message);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                {/* Category Dropdown */}
                <div className="mb-6">
                    <select
                        className="w-full p-4 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        name="subcategory"
                        value={select.subcategory || "default"}
                        onChange={handleChangeCategory}
                        required
                    >
                        <option value="default" disabled>
                            Select a Category
                        </option>
                        {categoryId.map((val) => (
                            <option key={val._id} value={val._id} className="text-gray-700">
                                {val.Categoryname}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Subcategory Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subcategoryData.map((data) => (
                        <div
                            key={data._id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                        >
                            <div className="p-6 flex flex-col items-center space-y-4">
                                {/* Image */}
                                <img
                                    src={data.image}
                                    alt={data.subCategoryname}
                                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
                                />

                                {/* Subcategory Name */}
                                <h2 className="text-xl font-semibold text-gray-800">{data.subCategoryname}</h2>

                                {/* Action Buttons */}
                                <div className="flex gap-4">
                                    {/* Delete Button */}
                                    <button
                                        className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none transition duration-200"
                                        onClick={() => handleCategorydelete(data._id)}
                                    >
                                        <RiDeleteBin5Fill className="inline-block mr-2" />
                                        Delete
                                    </button>
                                    {/* Edit Button */}
                                    <button
                                        className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 focus:outline-none transition duration-200"
                                        onClick={() => navigate(`/admin/Foods/${data._id}`)}
                                    >
                                        <FaRegEdit className="inline-block mr-2" />
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageSubcategory;
