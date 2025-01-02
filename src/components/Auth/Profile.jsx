import { Link, NavLink, Outlet } from "react-router-dom";

const Userprofile = ()=>{
     return(
        <>
           <div className="py-10 px-4 rounded-lg h-screen ">
                <h1 className="text-center font-semibold text-3xl ">user profile</h1>
                 <div className="grid grid-cols-4 h-full ">
                      
                    <div className="bg-slate-500 text-white  col-span-1 h-full ">
                          <ul className="flex  w-full flex-col">
                              <NavLink to="Orders"><li className="p-4 border-b-2 cursor-pointer">Orders</li></NavLink>
                              <NavLink to="address"><li className="p-4 border-b-2 cursor-pointer">Address</li></NavLink>
                              <NavLink to="/payments"><li className="p-4 border-b-2 cursor-pointer">Payments</li></NavLink>
                              <li className="p-4 border-b-2 cursor-pointer">Favourites</li>
                          </ul>
                    </div>


                    <div className="bg-slate-400 w-full col-span-3">
                        <p>detail item</p>
                        <Outlet/>
                    </div>


                 </div> 
           </div>
        </>
     )
};

export default Userprofile