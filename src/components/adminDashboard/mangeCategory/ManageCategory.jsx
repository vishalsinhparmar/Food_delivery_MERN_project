import { useContext, useEffect, useState } from "react";
import { MyContext } from "../contextprovider/Mycontext";
import { FaRegEdit } from "react-icons/fa"
import { RiDeleteBin5Fill } from "react-icons/ri"
import { categorydeleteByid, categoryUpdatebyId } from "../Apibaseurl";


const MangeCategory = () => {
    // const [data,setNewData] = useState([]);
    const {
        categoryId,
        setcategoryId,setSelectvalue
    } = useContext(MyContext);
    console.log('categoryId', categoryId)


   

    const handleCategorydelete = async (id) => {
        alert(id)
        try {
            const res = await categorydeleteByid(id);
            if (res.success === true) {
                const deletdata = categoryId.filter(data => data._id !== id)

                setcategoryId(deletdata)
                console.log("delete data", deletdata)
            }
            console.log('categoryDelete', res)
        } catch (err) {
            console.log('error in the category', err.message)
        }
    }

    return (
        <>
            <div>
                <div className="grid grid-flow-row gap-5 mt-5">
                    {
                        categoryId.map((data) => (
                            <>
                                <div className=" bg-white  w-full rounded-md hover:bg-blue-50">
                                    <div className="border p-4 grid grid-cols-3 justify-center items-center">


                                        <div className="p-3">
                                            <h1 className="text-2xl font-medium ">{data.Categoryname}</h1>
                                        </div>

                                        <div className=" gap-2 flex items-center justify-center">
                                            <button className="p-2 bg-red-400 flex items-center justify-center gap-2 text-xl text-white w-1/3 hover:bg-red-500 rounded-md mx-2" onClick={() => handleCategorydelete(data._id)}><RiDeleteBin5Fill />delete</button>
                                            <button className="p-2 bg-yellow-300 font-medium flex items-center justify-center gap-2 text-xl text-white w-1/3 hover:bg-yellow-400 rounded-md mx-2"><FaRegEdit />edit</button>

                                        </div>

                                    </div>

                                </div>
                            </>
                        )

                        )
                    }
                </div>
            </div>
        </>
    )

}

export default MangeCategory