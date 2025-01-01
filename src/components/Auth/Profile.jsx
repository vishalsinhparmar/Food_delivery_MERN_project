const Userprofile = ()=>{
     return(
        <>
           <div className="py-4 px-4 rounded-md">
                <h1 className="text-center font-semibold text-3xl ">user profile</h1>
                 <div className="grid grid-cols-4 ">
                      
                    <div className="bg-slate-500 text-white  col-span-1 ">
                          <ul className="flex  w-full flex-col">
                              <li className="p-4 border-b-2 cursor-pointer">Orders</li>
                              <li className="p-4 border-b-2 cursor-pointer">Address</li>
                              <li className="p-4 border-b-2 cursor-pointer">Payments</li>
                              <li className="p-4 border-b-2 cursor-pointer">Favourites</li>
                          </ul>
                    </div>


                    <div className="bg-slate-400 w-full col-span-3">
                        <p>detail item</p>
                    </div>


                 </div> 
           </div>
        </>
     )
};

export default Userprofile