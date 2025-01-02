import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { getAddressdetail } from "../../../services/Api";

const Addresslayout = () => {

    const [addressData, setsavedAddress] = useState([])
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
    return (
        <div className=" bg-slate-400 rounded-md p-4">
            <h1>Address page</h1>
            <div className="border-slate-300 p-2">
                {
                    addressData.length === 0 ? (
                        <p className="text-xl font-medium"> NO address found </p>
                    ) : (
                        addressData && addressData.map((item, index) => (
                            <div key={item._id} className="bg-white rounded-md my-2 p-4">
                                <div className=" rounded-md bg-white" >
                                    <label htmlFor="address" className="text-2xl flex items-center">
                                        <FaHome className="text-2xl mr-2" />
                                     Address
                                    </label>

                                </div>

                                <div className="flex flex-row  justify-items-center ">
                                    <p className="text-sm text-center font-normal">{item.address}</p>
                                </div>
                            </div>
                        ))

                    )
                }

            </div>
        </div>
    )
};

export default Addresslayout;