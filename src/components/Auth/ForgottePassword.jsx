import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ForgottePassword } from '../../services/Api.js';


function ForgotPassword() {
  const [userEmail, setUseremail] = useState('');
  const [loading, setloading] = useState(false);
  const [error,setError] = useState();
  const navigate = useNavigate();
  console.log('userEmail', userEmail);

  const handleChange = (e) => {
    const { value } = e.target;
    setUseremail(value);
  };

  const formPassword = async (e) => {
    e.preventDefault();
    console.log('userEmail', userEmail);
    setloading(true)
    try {
        const userEmail = { email: userEmail }
        const res = await ForgottePassword(userEmail)
   
      if (res.ok) {
        const data = await res.json();
        console.log('the data is', data);
        navigate('/newPassword');
        alert(`the message is ${data.message}`);
      } else {
        const data = await res.json();
        console.log('the error', data.err);
        setError('Something went wrong please try again')
      }
    } catch (err) {
      console.log('the error occur in the send mail', err.message);
      setError('Something went wrong please try again')

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
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={userEmail}
              onChange={handleChange}
              className="bg-white rounded-sm  border-black border border-2  focus:outline-none focus:shadow-sm focus:border-yellow-300  p-3 w-full text-xl placeholder-gray-500"
            />
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
