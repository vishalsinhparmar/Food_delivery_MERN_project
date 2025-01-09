import { useContext } from "react";
import { MyContext } from "../contextprovider/Mycontext";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { categorydeleteByid } from "../Apibaseurl";

const MangeCategory = () => {
    const { categoryId, setcategoryId } = useContext(MyContext);

    const handleCategorydelete = async (id) => {
        try {
            const res = await categorydeleteByid(id);
            if (res.success === true) {
                const updatedData = categoryId.filter(data => data._id !== id);
                setcategoryId(updatedData);
            }
        } catch (err) {
            console.log("Error deleting category:", err.message);
        }
    }

    return (
        <div className="py-6 px-4 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryId.map((data) => (
                    <div key={data._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="text-xl font-semibold text-gray-700">{data.Categoryname}</h2>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <button
                                className="flex items-center gap-2 p-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none transition"
                                onClick={() => handleCategorydelete(data._id)}
                            >
                                <RiDeleteBin5Fill size={20} />
                                <span>Delete</span>
                            </button>
                            <button
                                className="flex items-center gap-2 p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none transition"
                            >
                                <FaRegEdit size={20} />
                                <span>Edit</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MangeCategory;
