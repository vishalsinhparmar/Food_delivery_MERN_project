import { MdOutlineVerified } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import RazorpayPayment from "../../../utils/PaymentGateway.js";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../context/MyContext";
import { addAddress, getAddressdetail, selectAddaddressid } from "../../../services/Api.js";

const OrderPage = () => {
  const handleformsubmit = RazorpayPayment()
  const [address, setAddress] = useState({});
  console.log("address is", address)
  const [savedAddress, setsavedAddress] = useState([]);
  const [selectAddress, setSelectedAddress] = useState("");
  console.log("selectAddress", selectAddress);
  const { data } = useContext(OrderContext);
  console.log("data", data)

  const handleAddAddress = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => (
      {
        ...prevAddress,
        [name]: value
      }
    ))
  }

  const handleAddress = async () => {
    if (address.address.trim() === "") {

      alert('fill the address first');
      return;

    }

    try {
      const resAddress = await addAddress(address);
      if (resAddress.success === true) {
        alert('address added success')
      }

    } catch (err) {
      console.log('error occur in the addAddress')
    }

  }


  const addressDetail = async () => {
    try {
      const res = await getAddressdetail();
      console.log("res of addressDetail", res)
      if (res.success === true) {
        setsavedAddress(res.data)
      }
    } catch (err) {
      console.log("error in the fetch address", err.message)
    }
  }
  useEffect(() => {

    addressDetail()
  }, [])



  const handleSelectAddress = async (selectId) => {
      const addressId = {
        addressId:selectId
      }
    try {
      const resAddress = await selectAddaddressid(addressId);
      if (resAddress.success === true) {
        alert('address added success')
        setSelectedAddress(addressId)
      }

    } catch (err) {
      console.log('error occur in the addAddress',err.response)
    }
     
  }

  // console.log("savedAddress",savedAddress)

  // api of address



  return (
    <section className="bg-blue-200 max-w-full ">

      <div className="flex p-10 flex-row w-full gap-5">
        {/* User Info and Address Section */}
        <div className="w-1/2">
          {/* User Status */}
          <div className="border-b-2 border-b-black py-10 my-5 bg-white rounded-md">
            <p className="text-black text-3xl flex items-center justify-center">
              <MdOutlineVerified className="text-green-500 text-5xl mx-4" />
              User is logged in!
            </p>
          </div>

          {/* Add Address */}
          <div className="my-4 px-5 py-4 rounded-md bg-white items-center border-b-2 border-b-black">
            <label htmlFor="address" className="text-2xl flex items-center">
              <FaHome className="text-2xl mr-2" />
              Add Address
            </label>
            <textarea
              id="address"
              rows={3}
              name="address"
              value={address.address}
              onChange={handleAddAddress}

              className="bg-gray-100 rounded-md w-full p-2 my-2"
              placeholder="Enter your delivery address..."
            />
            <button
              onClick={handleAddress}
              className="bg-yellow-400 px-4 py-2 rounded-md text-black"
            >
              Add
            </button>
          </div>

          {/* Display Saved Addresses */}
          <div className="my-4 bg-white p-5 rounded-md">


            {savedAddress.length > 0 ? (
              savedAddress.map((adr, index) => (
                <>
                  <div className={`border rounded-md p-4 my-2 ${adr._id == selectAddress.addressId? "bg-green-100" : ""}`} key={index}>
                    <p>{adr.address}</p>
                    <button
                      onClick={() => handleSelectAddress(adr._id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md mt-2"
                    >
                      Deliver Here
                    </button>
                  </div>
                </>
              ))

            ) : (
              <>

                <h3 className="text-xl font-bold">Select Delivery Address</h3>

                <p className="text-gray-500">No saved addresses found.</p>
              </>
            )


            }




          </div>

          {/* Payment Button */}

        </div>

        {/* Sidebar for Razorpay Payment */}
        <div className="border-black rounded-lg w-1/2 p-5 bg-white">
          <div className='py-2'>
            {data?.Iteam && data?.Iteam.map((item) => (
              <>
                <div className='grid grid-flow-col  gap-2 border-b items-center px-4 py-2' >
                  <div className='col-auto'>
                    <div className='bg-green-500 rounded-full  flex items-center justify-center w-10 h-10' >
                      <p className='font-bold text-md text-white' >{item?.qty}x</p>
                    </div>
                  </div>

                  <div className='ml-3' >
                    <h1 className='font-bol text-green-600 '>&#8377;{item?.total}</h1>
                    <p className='font-bold'>12” {item?.subcategoryId?.subCategoryname} </p>
                    <p>{item.additionalInfo?.detailinfo}</p>
                  </div>
                  <div className='ml-3 w-full  object-cover' >
                    <img src={item.subcategoryId?.image} className="object-cover h-24 rounded-full" alt="" />
                  </div>
                </div>
              </>



            ))}
          </div>
          {/* total */}
          {data ? (
            <>

              <div className='px-4 py-6 border-b'>
                <div className='flex items-center justify-between'>
                  <p className='font-bold'>Sub Total:</p>
                  <span className=' text-sm'>&#8377;&nbsp;{data?.subtotal}</span>
                </div>

                <div className='flex items-center justify-between py-2'>
                  <p className='font-bold'>Discounts:</p>
                  <span>{data?.discount}</span>
                </div>

                <div className='flex items-center justify-between border-b'>
                  <p className='font-bold'>Delivery Fee:</p>
                  <span>{data?.deliveryFee}</span>
                </div>



              </div>
            </>
          ) : (
            <>
              no item found
            </>
          )
          }
        </div>

      </div>
      <div className="w-full flex items-end">
        <button onClick={handleformsubmit} className={`${selectAddress.addressId ? "bg-blue-600" : "bg-slate-200 "} rounded-md px-4 py-2 text-white cursor-pointer`}
          disabled={!selectAddress}>
          Pay Now
        </button>
      </div>
    </section>
  );
};

export default OrderPage;
