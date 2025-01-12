import axios from "axios";
import apiBaseUrl from "../../config";
console.log('api base_url from the admin',apiBaseUrl)
const api_base_url = apiBaseUrl;
// get a category all data
export const  getcategory = async()=>{
   const response = await axios.get(`${api_base_url}/admin/foodcategorydatashow`)
   return response.data
}
// get categorybyid individual
export const  getcategoryByid= async(id)=>{
   const response = await axios.get(`${api_base_url}/admin/categorybyId/${id}`)
   return response.data
}
//  add category
export const  addcategory = async (data)=> {
    const response = await axios.post(`${api_base_url}/admin/addfoodCategory`,data)
    return response.data
 }
 export const addcategoryItem = async (data)=> {
   const response = await axios.post(`${api_base_url}/admin/addfoodCategoryitem`,data)
   return response.data
}

 export const  addsubcategory = async (data)=> {
   const response = await axios.post(`${api_base_url}/admin/addsubCategory`,data)
   return response.data
}
// 

// get all subcategory data by using a category
export const  getsubcategory = async (id)=> {
   const response = await axios.get(`${api_base_url}/admin/subfoodCategorydata/${id}`)
   return response.data
}

// get a subcategory
export const  getsubcategorybyId = async (id)=> {
   const response = await axios.get(`${api_base_url}/admin/subCategorybyId/${id}`)
   return response.data
}

// get foodcategorybyitem by category id
export const  getfoodcategory = async (id)=> {
   const response = await axios.get(`${api_base_url}/admin/foodCategoryItemdata/${id}`)
   return response.data
}
// get foodcategoryitembyId
export const  getfoodcategoryItembyid = async (id)=> {
   const response = await axios.get(`${api_base_url}/admin/categoryItembyId/${id}`)
   return response.data
}
// 
export const  categorydeleteByid = async (id)=> {
   const response = await axios.delete(`${api_base_url}/admin/foodCategorydeletebyId/${id}`)
   return response.data
}
export const  categoryItemdeleteByid = async (id)=> {
   const response = await axios.delete(`${api_base_url}/admin/categoryItemDeletebyId/${id}`)
   return response.data
}
export const  subCategorydeleteByid = async (id)=> {
   const response = await axios.delete(`${api_base_url}/admin/subcategoryDeletebyId/${id}`)
   return response.data
}

export const  categoryUpdatebyId = async (id)=> {
   const response = await axios.patch(`${api_base_url}/admin/foodCategoryUpdatebyId/${id}`)
   return response.data
}

export const  subCategoryupdatebyId = async (id,formdata)=> {
   const response = await axios.patch(`${api_base_url}/admin/subcategoryUpdatebyId/${id}`,formdata)
   return response.data
}
export const  categoryItemUpdatebyId = async (id,formdata)=> {
   const response = await axios.patch(`${api_base_url}/admin/categoryItemupdatebyId/${id}`,formdata)
   return response.data
}

export const  showArchivedOrderDetail = async (id)=> {
   const response = await axios.get(`${api_base_url}/adminauth/ArchivedOrder/${id}`)
   return response.data
}


// admin order detail 

export const  showUserList = async ()=> {
   const response = await axios.get(`${api_base_url}/adminauth/Userdetail`)
   return response.data
}
