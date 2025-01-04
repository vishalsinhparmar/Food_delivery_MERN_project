import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import PasswordComponets from '../PasswordComponets';
import {MdMarkEmailRead} from 'react-icons/md'
import PasswordComponets from './PasswordInput';
import { ResetPassword } from '../../services/Api';
import Swal from 'sweetalert2'


function NewPassword() {

  const { token } = useParams();
  console.log("token is provide by new passsword",token)
  const navigate = useNavigate();
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false);

  console.log('userPassword', userPassword);

  const handleChange = (e) => {
    const { value } = e.target;
    setUserPassword(value);
  };

  const formPassword = async (e) => {
    e.preventDefault();
    console.log('userPassword', userPassword);
    setLoading(true)
    try {
        const resetpassword = {newpassword:userPassword}
        const res = await ResetPassword(resetpassword,token)
        console.log("res in resetpassword",res)

      if (res.success === true) {

        Swal.fire('Update','password update a successfully')
        navigate('/auth')
         
      } else {
          setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.log('The error occurred in resetting password', err.response);
      setError('Something went wrong. Please try again.')

    } finally {
       setLoading(false)
    }
  };

  return (
    <div className="flex items-center justify-center ">
      {token ? (
             <div className="w-full max-w-md bg-white p-8 rounded-lg">
             <p className="text-center text-yellow-400 text-3xl font-semibold mb-6">Set New Password</p>
             <hr className="w-28 mx-auto my-4 border-t-2 border-yellow-300" />
             <form onSubmit={formPassword} className="flex flex-col space-y-4">
               {error && <p className='text-red-400 text-center mb-10'>{error}</p>}
     
               <div>
               
                     <PasswordComponets
                   onChangefn = {handleChange} 
                   valName = {userPassword} 
                   name = "password" 
                   label="passsword"
                   placeholderName = "passsword"
                 />
               </div>
     
               <button
                 disabled = {loading}
                 type="submit"
                 className={` text-white text-2xl font-medium rounded-md p-3 mt-5 ${loading ? `bg-slate-600 blur-none cursor-progress`:"hover:bg-slate-700 bg-black"} transition duration-200`}
               >
                {loading ? "processing...":"submit"}
               </button>
             </form>
           </div>
      ):(
          <div className='flex flex-col items-center justify-center bg-slate-100 p-10 rounded-lg shadow-md'>
             <p className='font-bold text-xl'>You have sent link on email for the reset password</p>
             <span><MdMarkEmailRead className='text-5xl text-gray-700'/></span>
          </div>
      )
      
      }
    
    </div>
  );
}

export default NewPassword;
