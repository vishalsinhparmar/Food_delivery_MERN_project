import { useEffect, useState } from "react";
import { showOrderDetail } from "../../../services/Api";

const OrderDetail = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrderData = async () => {
    try {
      const res = await showOrderDetail();
      console.log("Response of orders", res);
      if (res.success) {
        setOrders(res.data);
      } else {
        setError("Failed to fetch order details");
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="loader animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
        <p className="text-lg font-medium text-gray-700 ml-4">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-lg font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-lg font-semibold text-gray-600">No orders found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Order Details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white border rounded-lg shadow-sm p-6 transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="mb-2">
              <p className="text-sm font-semibold text-gray-500">Grand Total:</p>
              <p className="text-lg font-bold text-gray-900">₹{order.grandTotal}</p>
            </div>
            <div className="mb-2">
              <p className="text-sm font-semibold text-gray-500">Delivery Address:</p>
              <p className="text-sm text-gray-700">{order.deliveryAddress || "Not provided"}</p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-500">Payment Status:</p>
              <p
                className={`text-sm font-bold ${
                  order.paymentStatus === "success"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {order.paymentStatus || "Pending"}
              </p>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Items:</h3>
            {order.cartItem?.Iteam?.length === 0 ? (
              <p className="text-sm text-gray-500">No items in this order</p>
            ) : (
              order.cartItem.Iteam.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between mb-3"
                >
                  <div className="flex items-center">
                    <img
                      src={item.subcategoryId.image}
                      alt={item.subcategoryId.subCategoryname}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-gray-700">
                        {item.subcategoryId.subCategoryname}
                      </p>
                      <p className="text-xs text-gray-500">
                        Info: {item?.additionalInfo?.detailinfo || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Qty: {item.qty}</p>
                    <p className="text-sm font-bold text-gray-800">
                      ₹{item.total}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetail;
