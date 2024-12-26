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
  { id: 1, value: 'Pizza', label: 'Pizza' },
  { id: 2, value: 'Burger', label: 'Burger' },
  { id: 3, value: 'Salad', label: 'Salad' },
  { id: 4, value: 'Garlic_Bread', label: 'Garlic_Bread' },
  { id: 5, value: 'Calzone', label: 'Calzone' },
  { id: 6, value: 'Cold_drinks', label: 'Cold_drinks' },
  { id: 7, value: 'Happy_Meal', label: 'Happy_Meal' },
  { id: 8, value: 'Hot_drinks', label: 'Hot_drinks' },
  { id: 9, value: 'Sauces', label: 'Sauces' },
  { id: 10, value: 'Orbit', label: 'Orbit' },
  { id: 11, value: 'Kebabas', label: 'Kebabas' },
  { id: 12, value: 'Dessert', label: 'Dessert' },
  { id: 13, value: 'Fries', label: 'Fries' }

]

console.log('category from Categorey componets',product)





const handleaddCategory = async (e) => {
  e.preventDefault();


  try {
     if(!id){
       const res= await addcategory(product);
       console.log('res of category',res)

       if(res.success === true){
        setproductvalue({})
        refreshCategory()
        alert('category response is successfully')
     }
   }
    // const res = await categoryUpdatebyId(id,product)

 

  
  } catch (error) {
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