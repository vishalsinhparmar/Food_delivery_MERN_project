import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext/Authcontex';

function PasswordComponets({ onChangefn, valName, placeholderName, label, name, error }) {
  console.log("error in the password components",error)
  const [showpasssword, setshowPassword] = useState(false);
  console.log("showpasssword are from the password", showpasssword)
  const { Error } = useContext(AuthContext)
  console.log("valName", valName)

  const handleSetpassword = () => {
    setshowPassword((prevpassword) => !prevpassword)
  }
  return (
    <>
      <div className='relative'>
        <input
          type={showpasssword ? "text" : "password"}
          className={`bg-white rounded-sm  border-black border border-2  focus:outline-none focus:shadow-sm focus:border-yellow-300  p-3 w-full text-xl placeholder-gray-500  ${error ? "border-red-500" : "focus:border-yellow-300"
            }`} value={valName}
          placeholder={placeholderName}
          onChange={onChangefn}
          name={name}


        />

        <button onClick={handleSetpassword}
          className="absolute right-3 top-4 text-sm font-medium text-blue-600 hover:underline"
          type='button'
          aria-label={showpasssword ? "Hide password" : "Show password"}
        >{showpasssword ? "hide" : "show"

          }</button>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}


      </div>
    </>
  )
}

export default PasswordComponets;