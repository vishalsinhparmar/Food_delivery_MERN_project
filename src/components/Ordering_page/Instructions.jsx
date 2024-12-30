
import Rectangle56 from '@assets/Order/Rectangle_53.png'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import Elips6 from '@assets/Order/Ellipse_6.png'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useContext, useState } from 'react'
import { addInstructiondata } from '../../services/Api'
import { OrderContext } from './context/MyContext'
export default function Instructions() {
  const [description, setDescription] = useState({});
  const {instructionId,handelClosemodal,NextsetmodelIsopen} = useContext(OrderContext)
  console.log('instructionId',instructionId);
  const handleDescription = (e) => {
    const { name, value, } = e.target
    setDescription((prevData) => (
      {
        ...prevData,
        [name]:value
      }
    ))
  };

  console.log("detail of the description",description);
  const handeladdNext = async () => {
    
    try{
      if(!instructionId){
        alert("cartId not found you can please added a cart item")
      }
      const res = await addInstructiondata(instructionId,description);
      if(res.success === true){
         alert("cart item in additional info are successfully added")
         
    setTimeout(() => {
      
      Swal.fire({
        position: "top-bottom",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });

    }, 100);
         NextsetmodelIsopen(false)
      }

    }catch(err){
      console.log("error occur in the instructions",err.response)
    }



  }
  return (

    <div className='w-500  shadow-2xl pb-6 relative bg-white overflow-y-auto max-h-full'>

      <div className='' >
        <div>
          <img src={Rectangle56} alt="" className='h-16 w-full object-cover' />

        </div>
       <div className='px-10 py-2'>
          <div>
            <p className=' my-4 font-bold text-black'>Customise your chicken Pizza</p>
          </div>

          <div className='  flex items-center justify-start pb-4'>
            <div className='border-r-2 border-black px-2' >
              <img src={Elips6} alt="Margherita" className='w-14' />
            </div>
            <h1 className='text-center ml-4 font-bold text-orange-500 text-2xl'>Add your special request</h1>

          </div>


          <div>
            <textarea name="detailinfo"
              placeholder='Write your special instructions here...'
              rows={8} cols={25}
              className='bg-Mackdonaldcolor rounded-2xl shadow-xl p-4 outline-none border'
              value={description.detail}
              onChange={handleDescription}
            />
          </div>
          {/* for your pizza detail */}

        </div>
        {/* for payment-button */}
        <div className=' flex items-center justify-between mx-2' >
          <div className='flex items-center justify-between bg-orange-500 text-white font-bold rounded-lg'>
            <div className='flex items-center px-2 py-2' >
              <p className='mr-2'>Total to pay  &nbsp;&#8377;<span ></span> </p>
              {/* <input className='text-xl  w-8 bg-orange-500' value={selectPrice} ref={price} readOnly/> */}
            </div>
          </div>
          <p className='text-xs'>Delivery & Tax will be calculated in the next step</p>
        </div>
        {/* for payment-button-end */}

        {/* for add-cart-button */}
        <div className='flex  items-center justify-end mx-10'>
          <NavLink to='/order' className='underline underline-offset-2' onClick={handelClosemodal}>Take me back</NavLink>
          <button type="submit" className='flex items-center justify-between  bg-green-600 text-white font-bold  rounded-lg mx-2 ' onClick={handeladdNext} disabled = {instructionId === null || undefined} >
            <div className='flex items-center justify-center px-4 py-3' >
              <p className='mr-5 text-xl'><BsArrowRightCircleFill /></p>
              <p className='text-md' >Add!</p>
            </div>
          </button>
        </div>
        {/* for add-cart-button-end */}



      </div>

    </div>

  )
}
