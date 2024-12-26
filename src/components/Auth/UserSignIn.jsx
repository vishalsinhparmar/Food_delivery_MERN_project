import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordComponets from './PasswordInput';
import { UserSignIn } from '../../services/Api';


function SignIn() {
  const navigate = useNavigate();
  const [Form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null); // Error state for displaying form errors
  const [loading,setloading] = useState(false);
  
  // const { setuserToken } = useContext(myContext);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...Form, [name]: value
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setloading(true)
    const { email, password } = Form;

    try {
        const user  =  { email, password };
        console.log('user in signIn',user)
        const res = await UserSignIn(Form)
      if (res.ok) {
        const result = await res.json();
        console.log('result is',result)
        if (result.token) {
          localStorage.setItem('token', result.token);
          setuserToken(result.token);
          setForm({ email: '', password: '' });
          setError(null); 
          navigate('/');
        } else {
          setError('Invalid credentials. Please try again.'); // Set error message if no token
        }
      } else {
        setError('Error during sign-in. Please try again later.'); // Generic error message
      }

    } catch (err) {
      console.log(err);
      setError('Something went wrong. Please try again.');
    } finally {
       setloading(false)
    }
  };

  return (
    <div className="rounded-md  flex items-center justify-center">
      <div className=" w-full max-w-md p-8 rounded-md ">
        <p className="text-center text-3xl font-semibold text-yellow-500 mb-4">Sign In</p>
        <hr className="w-1/4 mx-auto mb-5 border-gray-300" />

        {/* Form */}
        <form onSubmit={submitForm} className="flex flex-col space-y-4">
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={Form.email}
              onChange={handleChange}
              className="bg-white rounded-sm  border-black border border-2  focus:outline-none focus:shadow-sm focus:border-yellow-300  p-3 w-full text-xl placeholder-gray-500"
            />
          </div>  

          <div className=''>
         <PasswordComponets
              onChangefn = {handleChange} 
              valName = {Form.password} 
              name = "password" 
              label="passsword"
              placeholderName = "passsword"
         />
          </div>

          <button
            
            type="submit"
            disabled = {loading}
            className={` text-white text-2xl font-medium rounded-md p-3 mt-5 ${loading ? `bg-slate-600 blur-none cursor-progress`:"hover:bg-slate-800 bg-black"} transition duration-200`}
          >
           {loading ? "processing...":"Sign In"} 
          </button>
        </form>

        {/* Sign Up and Forgot Password Links */}
        <div className="mt-4 text-right">
          <p className="text-sm font-light">Don't have an account? <Link to="/auth/SignUp" className="text-blue-600 font-medium hover:underline">Sign Up</Link></p>
          <button
            className="text-red-500 text-sm font-medium mt-3 hover:underline"
            onClick={() => navigate('/auth/ForgottePassword')}
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
