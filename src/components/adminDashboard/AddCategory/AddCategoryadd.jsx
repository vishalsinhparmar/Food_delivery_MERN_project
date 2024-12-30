import { useContext, useEffect } from "react";
import { addcategory, categoryUpdatebyId, getcategory } from "../Apibaseurl";
import { MyContext } from "../contextprovider/Mycontext";
import { useParams } from "react-router-dom";

const CategoreyAdd = () =>{
  const {id} = useParams();
    const { 
        handleChangevalue,
        product,
        setproductvalue,
        refreshCategory,
         } = useContext(MyContext);


const options = [
  { id: 1, value: 'Pizzas', label: 'Pizzas' },
  { id: 2, value: 'Garlic Bread', label: 'Garlic Bread' },
  { id: 3, value: 'Calzone', label: 'Calzone' },
  { id: 4, value: 'Kebabas', label: 'Kebabas' },
  { id: 5, value: 'Salads', label: 'Salads' },
  { id: 6, value: 'Cold drinks', label: 'Cold drinks' },
  { id: 7, value: 'Happy Meal®', label: 'Happy Meal®' },
  { id: 8, value: 'Desserts', label: 'Desserts' },
  { id: 9, value: 'Hot drinks', label: 'Hot drinks' },
  { id: 10, value: 'Sauces', label: 'Sauces' },
  { id: 11, value: 'Orbit®', label: 'Orbit®' },


]

console.log('category from Categorey componets',product)





const handleaddCategory = async (e) => {
  e.preventDefault();


  try {
    
       const res= await addcategory(product);
       console.log('res of category',res)

       if(res.success === true){
        setproductvalue({})
        refreshCategory()
        alert('category response is successfully')
     }
   
    // const res = await categoryUpdatebyId(id,product)

 

  
  } catch (error) {
    console.log("error occur in the create category",error.response)
    console.log('error message is in addcategory', error.message)
  }
}

    return (
        <div>

        <div className='py-4 '>
          <h1 className='text-3xl font-semibold my-2'>Category name :<span className=' underline underline-offset-8 ml-2 text-blue-400 mb-3 font-normal'></span>
  
  
          </h1>
          <p className='opacity-50 font-medium'>Add this category</p>
        </div>
  

  
       
  
  <div>
        <form onSubmit={handleaddCategory} className="bg-white h-60 rounded-md p-4">
          <div className='py-1 text-xl'>
  
            <p className=' font-bold py-1'>Categorey:</p>
  
            <select type="text"
              className='w-full rounded-2xl p-3 border outline-none '
              name="category"
              value={product.category}
              onChange={handleChangevalue}
              placeholder="category"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              {
                options.map((val) => (
                  <>
                    <option value={val.value} className=''>
                      {val.label}
                    </option>
                  </>
                ))
              }
  
            </select>
  
          </div>
  
          <button type="submit" className="bg-green-600 p-3 rounded-md">category</button>
         </form>
        </div>
        {/* complete a form */}

  
      </div>
    )
}

export default CategoreyAdd;