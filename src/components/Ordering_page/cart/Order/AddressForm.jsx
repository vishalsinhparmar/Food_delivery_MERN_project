import { FaHome } from "react-icons/fa";

const AddressForm = ({ address, onChange, onSubmit }) => {
  return (
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
        onChange={onChange}
        className="bg-gray-100 rounded-md w-full p-2 my-2"
        placeholder="Enter your delivery address..."
      />
      <button
        onClick={onSubmit}
        className="bg-yellow-400 px-4 py-2 rounded-md text-black w-full"
      >
        Add Address
      </button>
    </div>
  );
};

export default AddressForm;
