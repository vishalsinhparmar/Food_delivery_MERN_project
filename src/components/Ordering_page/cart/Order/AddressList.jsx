const AddressList = ({ savedAddress, selectedAddress, onSelectAddress }) => {
    return (
      <div className="my-4 grid grid-cols-2 gap-4 bg-white p-5 rounded-md">
        {savedAddress.length > 0 ? (
          savedAddress.map((adr, index) => (
            <div
              className={`border rounded-md p-4 my-2 ${adr._id === selectedAddress ? "bg-green-100" : ""}`}
              key={index}
            >
              <p>{adr.address}</p>
              <button
                onClick={() => onSelectAddress(adr._id)}
                className="bg-green-500 text-white px-3 py-1 rounded-md mt-2 w-full"
              >
                Deliver Here
              </button>
            </div>
          ))
        ) : (
          <>
            <h3 className="text-xl font-bold">Select Delivery Address</h3>
            <p className="text-gray-500">No saved addresses found.</p>
          </>
        )}
      </div>
    );
  };
  
  export default AddressList;
  