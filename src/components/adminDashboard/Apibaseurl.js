import axios from "axios";

const api_base_url = "http://localhost:8000/api/admin";

export const  getcategory = async()=>{
   const response = await axios.get(`${api_base_url}/foodcategorydatashow`)
   return response.data
}

export const  addcategory = async (data)=> {
    const response = await axios.post(`${api_base_url}/addfoodCategory`,data)
    return response.data
 }
 export const addcategoryItem = async (data)=> {
   const response = await axios.post(`${api_base_url}/addfoodCategoryitem`,data)
   return response.data
}

 export const  addsubcategory = async (data)=> {
   const response = await axios.post(`${api_base_url}/addsubCategory`,data)
   return response.data
}

export const  getsubcategory = async (id)=> {
   const response = await axios.get(`${api_base_url}/subfoodCategorydata/${id}`)
   return response.data
}

export const  getsubcategorybyId = async (id)=> {
   const response = await axios.get(`${api_base_url}/subCategorybyId/${id}`)
   return response.data
}

export const  getfoodcategory = async (id)=> {
   const response = await axios.get(`${api_base_url}/foodCategoryItemdata/${id}`)
   return response.data
}

export const  categorydeleteByid = async (id)=> {
   const response = await axios.delete(`${api_base_url}/foodCategorydeletebyId/${id}`)
   return response.data
}
export const  categoryItemdeleteByid = async (id)=> {
   const response = await axios.delete(`${api_base_url}/categoryItemDeletebyId/${id}`)
   return response.data
}
export const  subCategorydeleteByid = async (id)=> {
   const response = await axios.delete(`${api_base_url}/subcategoryDeletebyId/${id}`)
   return response.data
}

export const  categoryUpdatebyId = async (id)=> {
   const response = await axios.patch(`${api_base_url}/foodCategoryUpdatebyId/${id}`)
   return response.data
}

export const  subCategoryupdatebyId = async (id,formdata)=> {
   const response = await axios.patch(`${api_base_url}/subcategoryUpdatebyId/${id}`,formdata)
   return response.data
}