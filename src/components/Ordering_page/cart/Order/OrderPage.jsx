import { useContext, useEffect, useState } from "react";
import { MdOutlineVerified } from "react-icons/md";
import RazorpayPayment from "../../../../utils/PaymentGateway.js";
import { addAddress, getAddressdetail, selectAddaddressid } from "../../../../services/Api.js";
import AddressForm from "./AddressForm";
import AddressList from "./AddressList.jsx";
import OrderDetails from "./OrderdetailPage";
import { OrderContext } from "../../context/MyContext.jsx";

const OrderPage = () => {
  const handleformsubmit = RazorpayPayment();
  const [address, setAddress] = useState({});
  const [savedAddress, setsavedAddress] = useState([]);
  const [selectAddress, setSelectedAddress] = useState("");
  const { data } = useContext(OrderContext);
  

  const handleAddAddress = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleAddress = async () => {
    if (address.address.trim() === "") {
      alert("Please fill the address first");
      return;
    }

    try {
      const resAddress = await addAddress(address);
      if (resAddress.success === true) {
        alert("Address added successfully");
        addressDetail(); // To refresh the address list
      }
    } catch (err) {
      console.log("Error occurred while adding address");
    }
  };

  const addressDetail = async () => {
    try {
      const res = await getAddressdetail();
      if (res.success === true) {
        setsavedAddress(res.data);
      }
    } catch (err) {
      console.log("Error occurred while fetching address details", err.message);
    }
  };

  const handleSelectAddress = async (selectId) => {
    const addressId = { addressId: selectId };
    try {
      const resAddress = await selectAddaddressid(addressId);
      if (resAddress.success === true) {
        alert("Address selected successfully");
        setSelectedAddress(selectId);
      }
    } catch (err) {
      console.log("Error occurred while selecting address", err.response);
    }
  };

  useEffect(() => {
    addressDetail();
  }, []);

  return (
    <section className="bg-blue-200 max-w-full px-5 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* User Info and Address Section */}
        <div className="w-full lg:w-1/2">
          <div className="border-b-2 border-b-black py-10 my-5 bg-white rounded-md">
            <p className="text-black text-3xl flex items-center justify-center">
              <MdOutlineVerified className="text-green-500 text-5xl mx-4" />
              User is logged in!
            </p>
          </div>

          <AddressForm address={address} onChange={handleAddAddress} onSubmit={handleAddress} />
          <div className="grid ">
          <AddressList savedAddress={savedAddress} selectedAddress={selectAddress} onSelectAddress={handleSelectAddress} />
          </div>
        </div>

        {/* Order Details Section */}
        <div className="border-black rounded-lg w-full lg:w-1/2 p-5 bg-white">
          <OrderDetails data={data} />
          {/* Total Section */}
          {data ? (
            <div className="px-4 py-6 border-b">
              <div className="flex items-center justify-between">
                <p className="font-bold">Sub Total:</p>
                <span className=" text-sm">₹{data?.subtotal}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <p className="font-bold">Discounts:</p>
                <span>{data?.discount}</span>
              </div>
              <div className="flex items-center justify-between border-b">
                <p className="font-bold">Delivery Fee:</p>
                <span>{data?.deliveryFee}</span>
              </div>
            </div>
          ) : (
            <p>No items found</p>
          )}
        </div>
      </div>

      {/* Payment Button */}
      <div className="w-full flex items-end justify-center mt-5">
        <button
          onClick={handleformsubmit}
          className={`${selectAddress ? "bg-blue-600" : "bg-slate-200"} rounded-md px-4 py-2 text-white cursor-pointer`}
          disabled={!selectAddress}
        >
          Pay Now
        </button>
      </div>
    </section>
  );
};

export default OrderPage;
