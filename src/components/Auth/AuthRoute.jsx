import authimg from '@assets/Auth/authImage.jpg';
import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './AuthContext/Authcontex';
// import { AuthContext } from './AuthContext/Authcontex';

const AuthRoute = () => {
  return (
    <div className="h-screen  w-full relative bg-gray-100">
      {/* Blurred Image Background */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full">
        <img
          src={authimg}
          alt="Background"
          className="object-cover w-full h-full filter blur-sm"
          loading="lazy"
        />
      </div>

      {/* Form Content */}
      <div className="absolute inset-0 flex    items-center justify-center bg-white/70 lg:bg-transparent p-6 lg:p-0">
        <div className="w-full max-w-md bg-white  rounded-lg shadow-lg p-6">
           <AuthContextProvider>
              <Outlet />     
           </AuthContextProvider>    
        </div>
      </div>
    </div>
  );
};

export default AuthRoute;
