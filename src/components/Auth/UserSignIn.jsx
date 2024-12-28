import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordComponets from './PasswordInput';
import { UserSignIn } from '../../services/Api';
// import { AuthContext } from './AuthContext/Authcontex';
import Swal from 'sweetalert2';
import { passwordverify, Verifyemail,} from '../../utils/VerifyInput';

// const {} = useContext(AuthContext)
function SignIn() {
  const navigate = useNavigate();
  const [Form, setForm] = useState({ email: '', password: '' });
  const [Error, setError] = useState({email:"",password:""});

  // const [error, setError] = useState(null); // Error state for displaying form errors
  const [loading,setloading] = useState(false);
  
  // const { setuserToken,Error,setError } = useContext(AuthContext);

  console.log('error message in the sigIn',Error)
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...Form, [name]: value
    });
    setError({
      ...Error,[name]:""
    })
  };

  const Handleblur = (e)=>{
      const {name,value} = e.target;
      console.log('name from the Handleblur',name)
      if(name === "email" && !Verifyemail(value)){
         setError({
          ...Error,
          email:"email is not provided basis"
         })
      }
      console.log("passsword verify output",passwordverify(value))
      if(name === "passsword" && !passwordverify(value)){
        setError({
         ...Error,
         password:"passsword lenght are not required"
        })
     }

  }

  const submitForm = async (e) => {
    e.preventDefault();
    setloading(true)
    const { email, password } = Form;
     const verifyEmail = Verifyemail(email);
     const VerifyPassword = passwordverify(password);
     console.log('VerifyPassword from the submit button',VerifyPassword)
    if(!verifyEmail || !VerifyPassword){
          setError({
            ...Error,
            email:verifyEmail ? "":"email is are not required credentials",
            password:VerifyPassword ? "":"passsword lenght are not required"
          })
    }

    try {
        const user  =  { email, password };
        console.log('user in signIn',user)
        const res = await UserSignIn(user);
        console.log("signIn res",res)
      
        
        
        if (res.success === true) {
          localStorage.setItem('token', res.token);
          // setuserToken(res.token);
          setForm({ email: '', password: '' });
          setError(null); 
          navigate('/');
          setError({email:"",password:""})
        } else {
          // Set error message if no token
        }
        
        
      } catch (err) {
      const errorData = err.response?.data?.data || {};
      console.log("errorData",errorData)
      Swal.fire({
        title: "Oops",
        text: "Please check the highlighted fields and try again.",
        icon: "error",
        timer:3000
      });
       setError({
         email:errorData.email || "",
         password:errorData.password || ""
        })
      console.log("response have error in sigIn",err.response);
      // setError('Something went wrong. Please try again.');
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

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={Form.email}
              onChange={handleChange}
              onBlur={Handleblur}
              className={`bg-white rounded-sm  border-black border border-2  focus:outline-none focus:shadow-sm focus:border-yellow-300  p-3 w-full text-xl placeholder-gray-500  ${Error.email ? "border-red-500" : "border-black"}`}
            />
           {Error.email && <p className="text-red-500 text-center mb-4">{Error.email}</p>}

          </div>  

          <div className=''>
         <PasswordComponets
              onChangefn = {handleChange} 
              valName = {Form.password} 
              name = "password" 
              label="passsword"
              placeholderName = "passsword"
              error={Error.password}
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
