import React, { useEffect, useState } from 'react'
//  import  {Font} from '@fortawesome/fontawesome-svg-core'
import {TfiEmail} from 'react-icons/tfi'
import {FcApproval} from 'react-icons/fc'
import { Link, useParams } from 'react-router-dom';
import { VerifyUser } from '../../services/Api';

function VerifyuserBymail() {
  const [data,setdata] = useState();
  const {token} = useParams();
  console.log('the data for the verifyEmail',data)
  // if(!token) return;
  const fetchMessage = async () => {
    console.log('verifyToken',token)
    try {
        const res = await VerifyUser(token)
         console.log("res of the verifyEmail",res)
        if(res.success === true){
          alert("user verified")
          setdata(res);
        }
    } catch (err) {
        console.log("error occur in the",err.response);
    }
};


useEffect(() => {
    if(token){

        fetchMessage();
    }
}, []);

  return (
    <>
    {/* <p>verify email</p> */}
    {
     token &&  data ? (
       
        <div className='max-w-full mx-auto items-center flex justify-center my-4 '>
        <div className='flex  flex-col justify-center items-center h-56 border shadow-lg border-dotted px-4 w-full  rounded-lg bg-blue-50 '>
            <p className='text-black font-semibold text-xl text-center'>{data?.data}</p>
             <span><FcApproval className=' text-6xl'/></span>
            <TfiEmail className='text-4xl text-blue-700 mt-4'/>
         {/* <p>{data?.message}</p> */}
             <span className='text-sm font-semibold  underline underline-offset-4 mt-4'><Link to="/auth">You can SignIn now</Link></span>
         </div>
         </div>
        
      ):(

        <>
                   <div className='max-w-full mx-auto items-center flex justify-center my-2 shadow-md  '>
           <div className='flex  flex-col justify-center items-center h-56 border shadow-lg border-dotted px-4 w-full max-w-1/2 rounded-lg bg-yellow-400'>
            <p className='text-slate-800  text-center font-normal text-xl'>You can verify to check your Mail and click on the link</p>
            <TfiEmail className='text-4xl text-white mt-4'/>
         <p>{data?.message}</p>
         </div>
         </div> 
        </>
      )
  }
  </>
  )
}

export default VerifyuserBymail