import { MdOutlineVerified } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import RazorpayPayment from "../../../utils/PaymentGateway";
import { useState } from "react";

const OrderPage = () => {
  const [address, setAddress] = useState("");
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddAddress = () => {
    if (address.trim() === "") {
      alert("Address cannot be empty!");
      return;
    }
    setSavedAddresses([...savedAddresses, address]);
    setAddress("");
    alert("Address added successfully!");
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  return (
    <section className="bg-blue-100 flex p-10 flex-row w-full gap-5">
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
        <div className="my-4 px-5 bg-white items-center border-b-2 border-b-black">
          <label htmlFor="address" className="text-2xl flex items-center">
            <FaHome className="text-2xl mr-2" />
            Add Address
          </label>
          <textarea
            id="address"
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="bg-gray-100 rounded-md w-full p-2 my-2"
            placeholder="Enter your delivery address..."
          />
          <button
            onClick={handleAddAddress}
            className="bg-yellow-400 px-4 py-2 rounded-md text-black"
          >
            Add
          </button>
        </div>

        {/* Display Saved Addresses */}
        <div className="my-4 bg-white p-5 rounded-md">
          <h3 className="text-xl font-bold">Select Delivery Address</h3>
          {savedAddresses.length === 0 ? (
            <p className="text-gray-500">No saved addresses found.</p>
          ) : (
            savedAddresses.map((addr, index) => (
              <div
                key={index}
                className={`border p-3 my-2 rounded-md ${
                  selectedAddress === addr ? "bg-green-100" : ""
                }`}
              >
                <p>{addr}</p>
                <button
                  onClick={() => handleSelectAddress(addr)}
                  className="bg-green-500 text-white px-3 py-1 rounded-md mt-2"
                >
                  Deliver Here
                </button>
              </div>
            ))
          )}
        </div>

        {/* Payment Button */}
        <div className="mt-5">
          <button
            onClick={() => RazorpayPayment(selectedAddress)}
            className={`px-4 py-2 rounded-md ${
              selectedAddress
                ? "bg-green-500 text-white"
                : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
            disabled={!selectedAddress}
          >
            Pay Now
          </button>
        </div>
      </div>

      {/* Sidebar for Razorpay Payment */}
      <div className="border-black rounded-lg w-1/2 p-5 bg-white">
        <RazorpayPayment />
      </div>
    </section>
  );
};

export default OrderPage;
