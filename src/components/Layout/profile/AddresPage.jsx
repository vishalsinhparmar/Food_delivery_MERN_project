import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { getAddressdetail } from "../../../services/Api";

const Addresslayout = () => {
    const [addressData, setsavedAddress] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const addressDetail = async () => {
        try {
            const res = await getAddressdetail();
            if (res.success) {
                setsavedAddress(res.data);
            } else {
                setError("No address found.");
            }
        } catch (err) {
            setError("Error fetching address details. Please try again.");
            console.log("Error in fetching address", err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        addressDetail();
    }, []);

    return (
        <div className=" max-w-7xl mx-auto p-6 bg-gray-50 rounded-md">
            {/* Page Header */}
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Your Saved Addresses</h1>

            {/* Conditional Content */}
            {loading ? (
                <div className="flex justify-center items-center min-h-[50vh]">
                    <div className="text-lg font-semibold animate-pulse">Loading...</div>
                </div>
            ) : error ? (
                <div className="flex justify-center items-center min-h-[50vh]">
                    <div className="text-lg font-semibold text-red-600">{error}</div>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* No Address Found */}
                    {addressData.length === 0 ? (
                        <div className="col-span-full text-center text-xl font-medium text-gray-500">
                            No address found.
                        </div>
                    ) : (
                        // Address Cards
                        addressData.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Address Header */}
                                <div className="flex items-center mb-4">
                                    <FaHome className="text-4xl text-blue-500 mr-3" />
                                    <h2 className="text-xl font-bold text-gray-800">Address</h2>
                                </div>

                                {/* Address Details */}
                                <p className="text-gray-600 text-sm leading-relaxed">{item.address}</p>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default Addresslayout;
