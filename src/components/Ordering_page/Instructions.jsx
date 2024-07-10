import React, { useRef, useState } from 'react'
import Rectangle56 from '../../assets/Order/Rectangle 53.png'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import Elips6 from '../../assets/Order/Ellipse 6.png'

import { NavLink } from 'react-router-dom'
import { MdCancel } from 'react-icons/md'
import axios from 'axios'
import Swal from 'sweetalert2'
export default function Instructions({closemodal,selectPrice,myPizzaName,counts}) {
const handelClosemodal = ()=>{
  setTimeout(() => {
    closemodal(true)
    Swal.fire({
      position: "top-bottom",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    
  },100);
     
}
  // const [data,setdata]=useState([]);
  const price = useRef();
  const PizzaName=useRef();
  const Qty=useRef();
  const  MyInstruction= useRef();

  const FormHandelsubmit = (e)=>{
    e.preventDefault();
    
    const InputData ={
      pricing:price.current.innerText,
    Categorey_Name:PizzaName.current.value,
    qty:Qty.current.value,
    Categorey_Details:MyInstruction.current.value



    }

    axios.post(`http://localhost:4000/BaketData`,InputData).then(()=>{
      
    })
  // e.target.reset();

  }
  return (
    <form onSubmit={FormHandelsubmit}>
    <div className='w-500  shadow-2xl pb-6 relative bg-white overflow-y-auto max-h-full'>
       
      <div className='' >
            <div>
               <img src={Rectangle56} alt=""  className='h-16 w-full object-cover'/>
                  
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
             <textarea name="postcontent" ref={MyInstruction} placeholder='Write your special instructions here...' rows={4} cols={25} className='bg-Mackdonaldcolor rounded-2xl shadow-xl p-4 outline-none border' />
          </div>
          {/* for your pizza detail */}
          <div className='my-4 '> 
             <h1 className='text-center ml-4 font-bold text-orange-500 text-2xl' >your pizza and quantities</h1>
             <div className='flex py-4'>
              <input type="number"  className='no-arrows w-10 bg-Mackdonaldcolor rounded-xl text-2xl text-center outline-none text-orange-500 'value={counts} ref={Qty} readOnly />
              <input type="text" className='mx-4 w-72 bg-Mackdonaldcolor rounded-xl text-2xl px-5 outline-none text-orange-500 ' value={myPizzaName} ref={PizzaName} readOnly/>
             </div>
          </div>
          </div>
{/* for payment-button */}
          <div className=' flex items-center justify-between mx-2' >
                <div className='flex items-center justify-between bg-orange-500 text-white font-bold rounded-lg'>
                             <div className='flex items-center px-2 py-2' >
                                <p className='mr-2'>Total to pay  &nbsp;&#8377;<span ref={price}>{selectPrice}</span> </p> 
                                {/* <input className='text-xl  w-8 bg-orange-500' value={selectPrice} ref={price} readOnly/> */}
                               </div>
                             </div>
                <p className='text-xs'>Delivery & Tax will be calculated in the next step</p>
         </div> 
{/* for payment-button-end */}

{/* for add-cart-button */}
          <div className='flex  items-center justify-end mx-10'>
               <NavLink to='/order' className='underline underline-offset-2' >Take me back</NavLink>
                    <button   type="submit" className='flex items-center justify-between  bg-green-600 text-white font-bold  rounded-lg mx-2 ' onClick={handelClosemodal}>
                             <div className='flex items-center justify-center px-4 py-3' >
                                <p className='mr-5 text-xl'><BsArrowRightCircleFill/></p> 
                                <p className='text-md' >Add!</p>
                               </div>
                    </button>
        </div> 
{/* for add-cart-button-end */}

    

      </div>

   </div>
   </form>
  )
}
