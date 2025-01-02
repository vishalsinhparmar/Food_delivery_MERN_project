import { FaApple, FaGooglePay } from "react-icons/fa";

const OrderUk = () => {
    return (
        <div className="py-3">
            <h1 className="text-orange-600 font-semibold">Order Uk</h1>


            <div>
                <div className='flex items-center w-full justify-center'>
                    <p className='mt-5 justify-item text-center max-w-42'>Company # 490039-445, Registered with House of companies.</p>

                </div>
                {/* button */}
                <div className='flex  justify-center mt-5'>
                    <button onClick={() => window.location.href = "https://apps.apple.com"}
                        className="flex items-center px-2 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                        <FaApple className="h-8 w-8 mr-2" />

                        <div className="text-left">
                            <p className="text-xs">Download on the</p>
                            <p className="text-lg font-semibold">App Store</p>
                        </div>
                    </button>

                    <button className='bg-black text-white  px-2 py-2 border flex justify-center items-center rounded-md '>
                        <FaGooglePay className='h-6 w-6 mr-3' />
                        <div className='text-left'>
                            <p className='text-xs' >GET IT ON</p>
                            <p className='text-lg font-semibold'>Google Play</p>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    )
};

export default OrderUk;