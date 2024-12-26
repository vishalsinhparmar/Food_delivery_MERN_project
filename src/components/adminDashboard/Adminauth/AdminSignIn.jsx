import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignin = ({setAdmindata})=>{
    const [form,setform] = React.useState({username:"",password:""});
   //  const [adminData,setadminData] = useState(null);
   const navigation = useNavigate();

     const handleChangeform = (e)=>{
        const {name,value} = e.target
         setform((prev)=>{
          return{ 
             ...prev,
             [name]:value
          }
         })
     }
     console.log('foem detail is',form)
     const registerFormsubmit = async (e)=>{
        e.preventDefault()
       try{
        const [signIn,adminData] = await  Promise.all(
            [
             axios.post('http://localhost:8000/api/adminauth/adminlogin',{
             form
              }),
              axios.get('http://localhost:8000/api/adminauth/adminData')
            
     ])
        console.log('the res is',signIn)
        console.log('admin data for the dashboard',adminData.data.data.userAdmin)
        if(adminData.status === 200){

           setAdmindata(adminData.data.data.userAdmin)
           setform({username:"",password:""})
           navigation("/admin/dashboard")
        }

       } catch(err){
         console.log("error in the registerFormsubmit",err.message)
       }
     }
     return (
         <>
         {/* <h1 className="">sigIn</h1> */}
            <div className="mt-5 flex items-center justify-center h-dvh">
                  <div className="flex flex-row items-center justify-center bg-white p-5 rounded-md">
                 <form onSubmit={registerFormsubmit} className="flex flex-col">
                     <input 
                      value={form.username}
                       name="username"
                       placeholder="username"
                       type="text"
                       onChange={handleChangeform}
                       className="bg-white border rounded-md p-2 my-4"
                       />
                     <input 
                        value={form.password}
                        name="password"
                        type="text" 
                        placeholder="password"
                        onChange={handleChangeform}
                       className="bg-white border rounded-md p-2 my-4"


                     />

                     <button type="submit" className="bg-red-400 px-4 py-2 border hover:bg-red-600 rounded-lg">submit</button>
                 </form>
                 </div>
            </div>
         </>
     )
}

export default AdminSignin;