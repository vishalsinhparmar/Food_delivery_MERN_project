import { FaApple, FaGooglePay } from "react-icons/fa";

const OrderUk = () => {
    return (
        <div className="py-6 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
            {/* Header */}
            <h1 className="text-orange-600 font-bold text-2xl text-center mb-6">
                Order UK
            </h1>

            {/* Company Info */}
            <div className="flex items-center justify-center mb-8">
                <p className="text-center text-gray-600 max-w-md">
                    Company # 490039-445, Registered with House of Companies.
                </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                {/* App Store Button */}
                <button
                    onClick={() => window.location.href = "https://apps.apple.com"}
                    className="flex items-center px-4 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
                >
                    <FaApple className="h-10 w-10 mr-3" />
                    <div className="text-left">
                        <p className="text-sm">Download on the</p>
                        <p className="text-xl font-semibold">App Store</p>
                    </div>
                </button>

                {/* Google Play Button */}
                <button
                    onClick={() => window.location.href = "https://play.google.com/store"}
                    className="flex items-center px-4 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
                >
                    <FaGooglePay className="h-10 w-10 mr-3" />
                    <div className="text-left">
                        <p className="text-sm">GET IT ON</p>
                        <p className="text-xl font-semibold">Google Play</p>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default OrderUk;
