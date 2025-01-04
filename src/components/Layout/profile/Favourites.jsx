import pagenotFound from '../../../assets/pagenotFound/pagenotFound.png';

const Favourites = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-6">
            {/* Message */}
            <p className="text-2xl font-semibold text-gray-800 text-center mb-6">
                PAGE NOT FOUND
            </p>

            {/* Image */}
            <div className="w-full max-w-md">
                <img 
                    src={pagenotFound} 
                    alt="Page Not Found" 
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default Favourites;
