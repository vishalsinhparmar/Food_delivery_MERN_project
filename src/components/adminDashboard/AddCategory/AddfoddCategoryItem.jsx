import { useContext, useEffect, useState } from "react";
import { MyContext } from "../contextprovider/Mycontext";
import { addcategoryItem, categoryUpdatebyId, getfoodcategory, getfoodcategoryItembyid } from "../Apibaseurl";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AddfoddCategoryItem = () => {
    const {id} = useParams();
    const [loading,setloading] = useState(false)
    const navigate = useNavigate()
    const { handleChangevalue,
            product,
            categoryId,
            select,
            setimage,
            image,
            handleChangeCategory,
            setSelectvalue,
            setproductvalue,
            handlchangeImage} = useContext(MyContext);
            
    console.log('image is',image);
      const [price, setprice] = useState(  
        [
          { size: "small", price: 0 },
          { size: "medium", price: 0 },
          { size: "large", price: 0 },
          { size: "xlarge", price: 0 }  
        ]
      )
     const handlepriceChange = (index,value)=>{
        const updateprice = [...price]
        updateprice[index].price = Number(value)
        setprice(updateprice)
     }
    //  formhandle
        useEffect(() => { 
          if (id) {
            const FetchsubcategorybyId = async () => {
              const res = await getfoodcategoryItembyid(id);
              if (res.success === true) {
                setproductvalue((prev) => (
                  {
                    ...prev,
                    categoryId:select.categoryselect,
                    categoryItemname:res.data.categoryItemName,
                    description:res.data.description,
                   
                  }
                ))

                setprice(res.data.pricing)
                    
                const { image} = res.data;
      
                setimage((prev) => (
                  {
                    ...prev,
                    image,
                  }
                ))
      
                console.log("image for uploaded", image)
              }
              console.log("res from the subcategory by id", res.data)
            }
      
            FetchsubcategorybyId()
      
          } 
          
        }, [setSelectvalue, setimage, id,setproductvalue])

        // update form
    const FormHandelSubmit = async (e)=>{
         e.preventDefault();
          setloading(true)
         const formdetail = new FormData();
         formdetail.append('categoryId',select.categoryItemselect)
         formdetail.append('categoryItemName',product.categoryItemname)
         formdetail.append('description',product.description)
         if(image.image){
         formdetail.append('image',image.image)
         }
         formdetail.append('pricing',JSON.stringify(price));

         console.log('formdetail',formdetail)

         try{
            if(id){
                const res = await getfoodcategoryItembyid(id,formdetail);
                console.log('categorydataItem categoryUpdatebyId',res);
                if(res.success === true){
                    alert('category item Update successfully')
                    setprice( [
                        { size: "small", price: 0 },
                        { size: "medium", price: 0 },
                        { size: "large", price: 0 },
                        { size: "xlarge", price: 0 }  
                      ])
                  
                    setproductvalue((prev) => (
                        {
                          ...prev,
                          categoryId:"",
                          categoryItemname:"",
                          description:"",
                         
                        }
                      ))
                    setSelectvalue({})
                    setimage((prev) => (
                        {
                          ...prev,
                          image:"",
                        }
                      ))
                    navigate('/admin/Managefoodcategory')
                    setloading(false)
                }
                 
            }else{
        
            const res = await addcategoryItem(formdetail);
            console.log('categorydataItem',res);
            if(res.success === true){
              Swal.fire({
                title: "CategoreyAdd",
                text: "CategoreyAdd item successfully",
                icon: "success"
              });
                setprice( [
                    { size: "small", price: 0 },
                    { size: "medium", price: 0 },
                    { size: "large", price: 0 },
                    { size: "xlarge", price: 0 }  
                  ])
                  setimage((prev) => (
                    {
                      ...prev,
                     
                    }
                  ))
                setproductvalue((prev) => (
                    {
                      ...prev
                   
                     
                    }
                  ))
                setproductvalue({})
                
                navigate('/admin/Managefoodcategory')
            }
        }
         }catch(error){
            console.log('error occur in the AddFoodCategoryitem',error.message)
         } finally{
          setloading(false)
         }
    }
   
    const resetForm = () => {
      setprice([
        { size: "small", price: 0 },
        { size: "medium", price: 0 },
        { size: "large", price: 0 },
        { size: "xlarge", price: 0 },
      ]);
      setproductvalue({
        categoryId: "",
        categoryItemname: "",
        description: "",
      });
      setSelectvalue({});
      setimage({ image: "" });
    };

    return (
      <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">
        {id ? "Update Food Category Item" : "Add Food Category Item"}
      </h2>
      <form onSubmit={FormHandelSubmit} className="space-y-6">
        {/* Category Selector */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-600 mb-2">
            Select Category
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:outline-none"
            name="categoryItemselect"
            value={select.categoryItemselect || "default"}
            onChange={handleChangeCategory}
            required
          >
            <option value="default" disabled>
              Select category
            </option>
            {categoryId.map((val) => (
              <option key={val._id} value={val._id}>
                {val.Categoryname}
              </option>
            ))}
          </select>
        </div>

        {/* Category Item Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Category Item Name
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:outline-none"
            name="categoryItemname"
            value={product.categoryItemname}
            onChange={handleChangevalue}
            placeholder="Enter category item name"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:outline-none"
            name="description"
            value={product.description}
            onChange={handleChangevalue}
            placeholder="Enter description"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            name="image"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none"
            onChange={handlchangeImage}
          />
          {image.image && (
            <div className="mt-4">
              <img
                src={
                  typeof image.image === "string"
                    ? image.image
                    : URL.createObjectURL(image.image)
                }
                className="w-40 h-40 object-cover rounded-lg"
                alt="Uploaded Preview"
              />
            </div>
          )}
        </div>

        {/* Pricing Section */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-4">
            Pricing (By Size)
          </label>
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {price.map((input, index) => (
                <div key={index} className="flex flex-col items-start">
                  <label className="font-medium text-gray-700 capitalize">
                    {input.size}
                  </label>
                  <input
                    type="number"
                    className="border border-gray-300 rounded-lg p-2 w-full mt-2"
                    onChange={(e) => handlepriceChange(index, e.target.value)}
                    value={input.price}
                    placeholder={`Price for ${input.size}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit and Reset Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="reset"
            onClick={resetForm}
            className="px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
          >
            Reset
          </button>
          <button
            disabled = {loading}
            type="submit"
            className={`px-6 py-3  ${loading ? "bg-slate-500 hover:bg-slate-500 cursor-wait disabled:bg-black":"bg-blue-500 hover:bg-blue-600"}   text-white rounded-lg`}
          >
            {id ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
    )
};

export default AddfoddCategoryItem;
