import React from "react";

const AddressList = ({ savedAddress, selectedAddress, onSelectAddress }) => {
  return (
    <div className="my-8 grid gap-6 p-6 rounded-md bg-white shadow-md">
      {savedAddress.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {savedAddress.map((adr, index) => (
            <div
              key={index}
              className={`border rounded-lg p-5 shadow-sm transform transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                adr._id === selectedAddress ? "bg-green-50 border-green-400" : "bg-white"
              }`}
            >
              <p className="text-lg font-medium mb-2 text-gray-700">{adr.address}</p>
              <button
                onClick={() => onSelectAddress(adr._id)}
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:ring-2 focus:ring-green-300 transition-all"
              >
                Deliver Here
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-700">Select Delivery Address</h3>
          <p className="text-gray-500 mt-2">No saved addresses found. Please add a new address.</p>
        </div>
      )}
    </div>
  );
};

export default AddressList;
