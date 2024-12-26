import axios  from "axios";


const api = axios.create({
    baseURL:"http://localhost:8000/api"
});

export const getcategory = async ()=>{
   const response = await api.get('/admin/foodcategorydatashow')
   return response.data;
}

// Cart api

export const getCartData = async ()=>{
   const response = await api.get('/cart/cartdetail')
   return response.data;
}








// auth api
export const UserSignUp = async (formdata)=>{
    const response = await api.post('/auth/SignUp',formdata)
    return response.data;
 }

 export const VerifyUser = async ()=>{
    const response = await api.get('/auth/verifyemail/:token')
    return response.data;
 }

 export const UserSignIn = async (form)=>{
    const response = await api.post('/auth/SignIn',form)
    return response.data;
 }

 export const ForgottePassword = async (userEmail)=>{
    const response = await api.post('/auth/forgopassword',userEmail)
    return response.data;
 }

 export const ResetPassword = async (password,token)=>{
    const response = await api.post(`/auth/resetpassword/:${token}`,password)
    return response.data;
 }
 
