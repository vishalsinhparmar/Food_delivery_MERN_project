import { useEffect, useState } from "react";
import { showOrderDetail } from "../../../services/Api";
import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
    const navigate = useNavigate();
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true); // To manage loading state
    const [error, setError] = useState(null); // To manage error state

    const fetchOrderData = async () => {
        try {
            const res = await showOrderDetail();
            console.log("res of order",res)
            if (res.success) {
                setOrder(res.data);
            }
        } catch (err) {
            setError("Error fetching order details. Please try again.");
            console.log("Error fetching order details", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrderData();
    }, []);

    const orderData = order[0] || {};

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="text-lg font-semibold">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="text-lg font-semibold text-red-600">{error}</div>
            </div>
        );
    }

    return (
        <div className=" max-w-full bg-gray-100 rounded-lg p-6  ">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">Order Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Order Items Section */}
                <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">User's Order</h2>
                    {orderData?.cartItem?.Iteam?.length === 0 ? (
                        <div className="text-center text-xl text-gray-500">No items in the cart</div>
                    ) : (
                        orderData?.cartItem?.Iteam.map((item) => (
                            <div key={item._id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg mb-4">
                                <div className="flex items-center">
                                    <img
                                        src={item.subcategoryId.image}
                                        alt={item.subcategoryId.subCategoryname}
                                        className="w-16 h-16 object-cover rounded-md mr-4"
                                    />
                                    <div>
                                        <p className="text-lg font-semibold text-gray-700">{item.subcategoryId.subCategoryname}</p>
                                        <p className="text-sm text-gray-600">Info: {item.additionalInfo || "N/A"}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-sm text-gray-600">Qty: {item.qty}</span>
                                    <span className="text-lg font-bold text-gray-800">Total: ₹{item.total}</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Order Summary Section */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>

                    <div className="flex justify-between mb-4">
                        <p className="font-semibold text-gray-700">Grand Total:</p>
                        <span className="text-lg font-bold text-gray-800">₹{orderData?.grandTotal}</span>
                    </div>

                    <div className="flex justify-between mb-4">
                        <p className="font-semibold text-gray-700">Delivery Address:</p>
                        <span className="text-sm text-gray-600">{orderData?.deliveryAddress || "Not provided"}</span>
                    </div>

                    <div className="flex justify-between mb-6">
                        <p className="font-semibold text-gray-700">Payment Status:</p>
                        <span className="text-sm text-gray-600">{orderData?.paymentStatus || "Pending"}</span>
                    </div>

                    {/* Order Button */}
                    <button
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 transition"
                        onClick={() => navigate('/orders')}
                    >
                        Back to Orders
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
