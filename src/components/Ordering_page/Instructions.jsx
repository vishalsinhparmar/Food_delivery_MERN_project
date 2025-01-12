
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
  const {instructionId,handelClosemodal,NextsetmodelIsopen,fetchCartData} = useContext(OrderContext)
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
    
      console.log("id for instructionId",instructionId)
      const res = await addInstructiondata(instructionId,description);
      if(res.success === true){
         Swal.fire('Success', 'description added successfully',"success");
         await fetchCartData()

         NextsetmodelIsopen(false)
      }

    }catch(err){
      console.log("error occur in the instructions",err.response)
    }



  }
  return (
    <div className="w-full sm:w-96 md:w-500 shadow-2xl pb-6 bg-white overflow-auto max-h-screen rounded-lg">
      {/* Header Image */}
      <div>
        <img src={Rectangle56} alt="Header" className="h-16 w-full object-cover rounded-t-lg" />
      </div>

      <div className="px-4 sm:px-6 md:px-10 py-4">
        {/* Title */}
        <p className="my-4 font-bold text-black text-center sm:text-left">Customise your Chicken Pizza</p>

        {/* Image and Heading */}
        <div className="flex items-center justify-center sm:justify-start pb-4">
          <div className="border-r-2 border-black px-2">
            <img src={Elips6} alt="Margherita" className="w-14 sm:w-10 md:w-14" />
          </div>
          <h1 className="text-center ml-4 font-bold text-orange-500 text-lg sm:text-xl md:text-2xl">
            Add your Special Request
          </h1>
        </div>

        {/* Textarea */}
        <div>
          <textarea
            name="detailinfo"
            placeholder="Write your special instructions here..."
            rows={8}
            className="w-full bg-Mackdonaldcolor rounded-2xl shadow-xl p-4 outline-none border"
            value={description.detailinfo || ""}
            onChange={handleDescription}
          />
        </div>
      </div>

      {/* Payment Information */}
      <div className="flex flex-col sm:flex-row items-center justify-between mx-4 sm:mx-6 md:mx-10 py-4">
        <div className="flex items-center justify-between bg-orange-500 text-white font-bold rounded-lg px-4 py-2">
          <p className="mr-2">
            Total to pay &nbsp;&#8377;<span>299</span>
          </p>
        </div>
        <p className="text-xs text-center sm:text-right">
          Delivery & Tax will be calculated in the next step
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between mx-4 sm:mx-6 md:mx-10">
        <NavLink
          to="/order"
          className="underline underline-offset-2 text-center sm:text-left"
          onClick={handelClosemodal}
        >
          Take me back
        </NavLink>
        <button
          type="submit"
          className="flex items-center justify-center bg-green-600 text-white font-bold rounded-lg px-4 py-3 mt-4 sm:mt-0 sm:ml-2"
          onClick={handeladdNext}
          disabled={!instructionId}
        >
          <BsArrowRightCircleFill className="mr-2 text-xl" />
          Add!
        </button>
      </div>
    </div>
  );



}
