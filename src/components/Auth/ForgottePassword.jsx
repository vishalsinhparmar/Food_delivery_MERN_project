import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForgottePassword } from '../../services/Api.js';
import { Verifyemail } from '../../utils/VerifyInput.js';


function ForgotPassword() {
  const [userEmail, setUseremail] = useState('');
  const [loading, setloading] = useState(false);
  const [error,setError] = useState({err:""});
  console.log("error",error)
  const navigate = useNavigate();
  console.log('userEmail', userEmail);

  const handleChange = (e) => {
    const { value } = e.target;
    setUseremail(value);
    setError({err:""})
  };

  const formPassword = async (e) => {
    e.preventDefault();
    console.log('userEmail', userEmail);
    if(!Verifyemail(userEmail)){
      setError((prev)=>(
        {
          ...prev,
          err:"provide a valid email"
        }
      ))
      setloading(false)
      return;
    }
    setloading(true)
    try {
        const Email = { email: userEmail }
        const res = await ForgottePassword(Email)
        console.log('the data is', res);
        
      if (res.success === true) {
        alert('email are verify thanks')
        navigate('/auth/newPassword');
     
      }
    } catch (err) {
      console.log('the error occur in the send mail', err.response);
      const errorMessage = err.response.data.data.email || 'Unexpected error occurred.'
      
      setError((prev)=>(
        {
           ...prev,
           err:errorMessage
        }
      ))

      setloading(false)

    } finally {
      setloading(false)
    }
  };

  return (
    <div className="flex items-center justify-center  ">
      <div className="w-full max-w-md bg-white p-8 rounded-lg ">
        <p className="text-center text-yellow-400 text-3xl font-semibold">Forgot Password</p>
        <hr className="w-28 mx-auto my-4 border-t-2 border-yellow-300" />
        <form onSubmit={formPassword} className="flex flex-col space-y-4">
           {/* {error && <p className="text-red-500 text-center mb-4"></p>} */}
          
           <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={userEmail}
              onChange={handleChange}
              
              className={`mt-1 block w-full rounded-md border-2 p-2 text-lg ${
                error?.err ? 'border-red-500' : 'border-gray-300'
              } focus:border-yellow-400 focus:outline-none`}
              placeholder="Enter your email"
              required
            />
            {error.err  && <p className="text-red-500 text-sm mt-1">{error.err}</p>}
          </div>

          <button type="submit" disabled={loading}  className={`text-white font-medium text-2xl w-1/2 mx-auto mt-3 p-3  rounded-md border ${loading ? "bg-slate-600 cursor-progress":"bg-black  hover:bg-slate-700"} `}>
          
            {loading ? "processing..." : "submit"}
            
           </button>

           
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
