import { useEffect } from "react";
import { useState } from "react";
import { showOrderDetail } from "../../../services/Api";
import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
    const navigate = useNavigate()
    const [order, setOrder] = useState([]);

    const fetchOrderdata = async () => {
        try {
            const res = await showOrderDetail();
            if (res.success === true) {
                alert("res are fetched successfully");
                console.log("showOrder", res)
                setOrder(res.data)
            }
        } catch (err) {
            console.log("error in the order data are not fetched", err.response)
        }
    };

    useEffect(() => {
        fetchOrderdata()
    }, [])
    return (
        <>
            <div className="container max-w-full bg-slate-400">
                <h1>Order List</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center justify-center flex-row bg-white rounded-lg col-span-2">
                        {
                            order.length === 0 ? (
                                <div className="">
                                    <h1 className="text-2xl font-semibold text-center">user Order</h1>
                                </div>
                            ) : (
                                order && order.items.map((item) => (
                                    <div key={item._id} className="bg-slate-400 flex items-center w-full border rounded-md">
                                        <p className="text-xl">{item.}</p>
                                    </div>
                                ))
                            )
                        }

                    </div>

                    <div className='px-4 py-6 border-b col-span-1 bg-white rounded-md'>
                        <div className='flex items-center justify-between'>
                            <p className='font-bold'>Sub Total:</p>
                            <span className=' text-sm'>&#8377;&nbsp;{order?.grandTotal}</span>
                        </div>

                        <div className='flex items-center justify-between py-2'>
                            <p className='font-bold'>deliveryAddress</p>
                            <span>{order?.deliveryAddress}</span>
                        </div>

                        <div className='flex items-center justify-between '>
                            <p className='font-bold'>Delivery Fee:</p>
                            <span>{order?.paymentStatus}</span>
                        </div>

                     

                    </div>
                </div>
            </div>
        </>

    )
};

export default OrderDetail;