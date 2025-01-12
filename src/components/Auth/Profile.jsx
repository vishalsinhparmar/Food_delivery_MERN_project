import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext/Authcontex";

const Userprofile = () => {
    const {handleLogout} = useContext(AuthContext)
    return (
        <>
            <div className=" mx-auto mb-5 px-4 md:px-10">
                <h1 className="text-center font-semibold text-3xl mb-6 text-gray-700">User Profile</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full  ">
                    {/* Sidebar */}
                    <div className="bg-slate-600  text-white rounded-lg shadow-md p-6 md:h-full">
                        <ul className="flex flex-col space-y-4">
                        <NavLink 
                        to="/profile" 
                        end
                        className={({ isActive }) => 
                            isActive ? "text-lg font-semibold bg-slate-400 p-3 rounded-md" : "text-lg font-semibold hover:bg-slate-400 p-3 rounded-md"
                        }
                    >         Orders
                    </NavLink>
                            <NavLink to="address" className={({isActive})=>isActive ? "text-lg font-semibold bg-slate-400 p-3 rounded-md":"text-lg font-semibold hover:bg-slate-400 p-3 rounded-md" } >
                                Address
                            </NavLink>
                            <NavLink to="payments" className={({isActive})=>isActive ? "text-lg font-semibold bg-slate-400 p-3 rounded-md":"text-lg font-semibold hover:bg-slate-400 p-3 rounded-md" } >
                                Payments
                            </NavLink>
                            <NavLink to="Favourites" className={({isActive})=>isActive ? "text-lg font-semibold bg-slate-400 p-3 rounded-md":"text-lg font-semibold hover:bg-slate-400 p-3 rounded-md" } >
                            favourites
                            </NavLink>

                            <button className="bg-red-500 px-4 rounded-md py-2" onClick={handleLogout}>Logout?</button>
                        </ul>
                    </div>

                    {/* Main Content Area */}
                    <div className="bg-slate-400 w-full col-span-3 rounded-lg shadow-md p-8">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Userprofile;
