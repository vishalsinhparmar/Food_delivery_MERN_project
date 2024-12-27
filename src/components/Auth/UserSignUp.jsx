import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordComponets from './PasswordInput';
import { UserSignUp } from '../../services/Api';
import { FcAddImage } from 'react-icons/fc';

function SignUp() {
  const navigate = useNavigate();
  const [Form, setForm] = useState({ username: '', email: '', password: '' });
  const [image, setImage] = useState(null);
  const [error,setError] = useState();
  const [loading,setloading] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm({
      ...Form, [name]: value
    });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const { username, email, password } = Form;
    setloading(true)
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('username', username);
      if (image) {
        formData.append('image', image);
      }

       const res = await UserSignUp(formData);
       

      if (res.ok) {
        const result = await res.json();
        alert(result.message);
        setForm({ email: '', password: '', username: '' });
        setImage(null);
        navigate('/verifyemail')
      } else {
        setError('Something went wrong, please try again')
        alert("Error: " + res.message);
      }
    } catch (err) {
      setError('Something went wrong, please try again')

      console.log(err.message);
    }finally{
       setloading(false)
    }
  };

  return (
    <div className="  rounded-md  flex items-center justify-center">

      <div className="bg- w-full max-w-md p-3 rounded-lg ">

        <p className="text-center mx-auto text-yellow-500 text-3xl mb-1 ">Sign Up</p>

        <hr className="w-28 text-black mx-auto mb-5" />
        <form onSubmit={submitForm} className="flex flex-col gap-y-4">
           {error && <p className='text-red-400 text-center mb-10'>{error}</p>}
           
          <div className="w-full my-1">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={Form.username}
              onChange={handleChange}
              className="bg-white rounded-sm  border-black border border-2  focus:outline-none focus:shadow-sm focus:border-yellow-300  p-3 w-full text-xl placeholder-gray-500"
            />
          </div>

          <div className="w-full my-1">
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

          <div className="w-full my-1">
            {/* <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={Form.password}
              onChange={handleChange}
              className="bg-white rounded-md border border-gray-300 placeholder:text-gray-500 placeholder:text-xl px-2 pl-5 w-full p-3 text-xl"
            /> */}
               <PasswordComponets
              onChangefn = {handleChange} 
              valName = {Form.password} 
              name = "password" 
              label="passsword"
              placeholderName = "passsword"
            />
          </div>

          <div className="w-full my-1 flex items-center justify-items-center gap-5">
            <label htmlFor="file" className='flex items-center justify-center flex-row gap-3 border border-dashed  border-gray-400 w-1/2 rounded-lg h-14 cursor-pointer bg-gray-50'>
              <FcAddImage className='text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'/>
              <p className='text-yellow-800'>upoad image</p>

            </label>
          
            <input
             id='file'
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-1 w-full text-gray-700 hidden"/>

{image && (
  typeof image === "string" ? (
    <img src={image} alt="preview" className="w-20 h-16 object-cover rounded-lg" />
  ) : (
    <img src={URL.createObjectURL(image)} alt="preview" className=" w-20 h-20 rounded-full flex items-center justify-center  bg-cover border border-black" />
  )
)} 
          </div>

          <button type="submit" disabled={loading}  className={`text-white  font-medium text-2xl w-1/2 mx-auto mt-1 p-3  rounded-md border ${loading ? "bg-slate-600 cursor-progress":"bg-black  hover:bg-slate-800"} `}>{loading ? "processing..." : "signUp"}</button>

          <p className="font-thin text-right mt-1">Already have an account? <span className="text-blue-600"><Link to="/auth">Sign In</Link></span></p>

        </form>
      </div>
    </div>
  );
}

export default SignUp;
