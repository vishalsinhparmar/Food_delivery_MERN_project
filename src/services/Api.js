import axios  from "axios";


const api = axios.create({
    baseURL:"https://foodapprestapi-production.up.railway.app/api"
});

api.interceptors.request.use(
   (config) => {
     // Get token from localStorage (or any other secure storage)
     const token = localStorage.getItem("authToken");
 
     if (token) {
       // Add token to headers
       config.headers.Authorization = `Bearer ${token}`;
     }
 
     return config;
   },
   (error) => {
     // Handle errors before request is sent
     return Promise.reject(error);
   }
 );

export const getcategory = async ()=>{
   const response = await api.get('/admin/foodcategorydatashow')
   return response.data;
}

// Cart api

export const getCartData = async ()=>{
   const response = await api.get('/cart/cartdetail')
   return response.data;
}

export const addsubcategoryCartdata = async (cartData)=>{
   const response = await api.post('/cart/addCart',cartData)
   return response.data;
}

export const addInstructiondata = async (id,info)=>{
   const response = await api.post(`/cart/addinfoCart/${id}`,info)
   return response.data;
}



export const deleteCartdata = async (id)=>{
   const response = await api.delete(`/cart/deleteCartcategory/${id}`)
   return response.data;
}





// auth api
export const UserSignUp = async (formdata)=>{
    const response = await api.post('/auth/SignUp',formdata)
    return response.data;
 }

 export const VerifyUser = async (token)=>{
    const response = await api.get(`/auth/verifyemail/${token}`)
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
    const response = await api.post(`/auth/resetpassword/${token}`,password)
    return response.data;
 }
 

//  order api

export const razorpayOrderid = async ()=>{
   const response = await api.post(`/cart/create_order`)
   return response.data;
}
export const chekOut= async (paymentData)=>{
   console.log("paymentData",paymentData)
   const response = await api.post(`/cart/verify_order`,paymentData)
   return response.data;
}

// adresses

export const addAddress = async (address)=>{
   const response = await api.post(`/cart/addAddress`,address)
   return response.data;
}
export const getAddressdetail = async ()=>{
   const response = await api.get(`/cart/showAddress`)
   return response.data;
}

export const selectAddaddressid = async (addressId)=>{
   const response = await api.post(`/cart/selectAddress`,addressId)
   return response.data;
}

// order

export const showOrderDetail = async ()=>{
   const response = await api.get(`/cart/userOreder`)
   return response.data;
}


export const showUserdata = async ()=>{
   const response = await api.get(`/auth/user`)
   return response.data;
}


// productdata
 
export const ProductData = async ()=>{
   const response = await api.get(`/admin/categorydata`)
   return response.data;
}