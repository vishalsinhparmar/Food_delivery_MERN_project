import React, { useState } from 'react'

function PasswordComponets({onChangefn,valName,placeholderName,label,name}) {
    const [showpasssword ,setshowPassword] = useState(false);
    console.log("valName",valName)

    const handleSetpassword = ()=>{
         setshowPassword((prevpassword)=> !prevpassword)
    }
  return (
    <>
    <div className='relative'>
      <input 
              className="bg-white rounded-sm  border-black border border-2  focus:outline-none focus:shadow-sm focus:border-yellow-300  p-3 w-full text-xl placeholder-gray-500"
              value={valName}
              placeholder= {placeholderName}
              onChange={onChangefn}
              name={name}
       
      />
          <button onClick={handleSetpassword}
           className="absolute right-3 top-4 text-sm font-medium text-blue-600 hover:underline"
           type='button'
           aria-label={showpasssword ? "Hide password" : "Show password"}
           >{showpasssword ? "hide":"show"
             
            }</button>

</div>
      </>
  )
}

export default PasswordComponets;