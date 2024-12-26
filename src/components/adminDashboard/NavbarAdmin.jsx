  import React from 'react'
  import { CiGift, CiSearch } from 'react-icons/ci'
  import { IoMdNotifications } from 'react-icons/io'
  import { MdNotifications, MdOutlineMessage, MdOutlineNotifications } from 'react-icons/md'
  import { IoSettingsOutline } from 'react-icons/io5'
  import { TiMessage } from 'react-icons/ti'
  import Avatar2 from '@assets/png_logo/placeholder.png'
  import { Link } from 'react-router-dom'

  export default function NavbarAdmin({adminData}) {
    console.log('navbar in admin',adminData?.username)
    return (
    <div className=''>
      <ul className='flex flex-row items-center'>
        <li>
            <div className='relative w-400 h-auto'>
            <input type="text" placeholder='Search here' className='p-3 border rounded-lg w-400 placeholder:text-gray-500 outline-none px-4  z-10 relative' />
            
            <button className='absolute top-0 right-5 text-black z-30 inset-y-0 font-bold'><CiSearch className=''/></button>
            
            </div>
        </li>

        <li>
            <div className='flex flex-row items-center border-r border-gray-300 pr-10'>
                <div className='bg-blue-100 rounded-xl p-3 relative mx-4'>
                    <MdOutlineNotifications className='text-blue-700 text-2xl'/> 
                    <span className='bg-blue-500 text-white flex items-center justify-center  absolute -top-2 w-4 h-4 p-3 -right-2 z-20 rounded-full text-xs' >16</span>
                </div>
              
              <button>
                <div className='bg-blue-100 rounded-xl p-3 relative mr-4'>
                    <TiMessage className='ext-blue-700 text-2xl text-blue-700'/> 
                    <span className='bg-blue-500 text-white flex items-center justify-center  absolute -top-2 w-4 h-4 p-3 -right-2 z-20 rounded-full text-xs' >8</span>
                </div>
              </button>
            
              <button>
                <div className=' bg-slate-200 rounded-xl p-3 relative mr-4'>
                    <CiGift className='ext-blue-700 text-2xl text-slate-800'/> 
                    <span className='bg-slate-600 text-white flex items-center justify-center  absolute -top-2 w-4 h-4 p-3 -right-2 z-20 rounded-full text-xs' >21</span>
                </div>
                </button>
            
            <button>
                <div className='bg-red-100 rounded-xl p-3 relative'>
                    <IoSettingsOutline className='text-red-500 text-2xl'/> 
                    <span className='bg-red-500 text-white flex items-center justify-center  absolute -top-2 w-4 h-4 p-3 -right-2 z-20 rounded-full text-xs' >10</span>
                </div>
            </button>

            </div>
        </li>

        <li >
          <Link to="sigIn">
            {adminData  ? (
              <div className='px-5 flex items-center justify-center'>
              <p className='px-4'>{adminData?.username}</p>
              <img src={adminData?.filepath} alt=""  className='w-10 rounded-full'/>
            </div>
            ):(
              <div className='px-5 flex items-center justify-center'>
              <p className='px-4'>sigIn</p>
              {/* <img src={Avatar2} alt=""  className='w-10 rounded-full'/> */}
          </div>
            )}
          </Link>
        </li>
      </ul>
      </div>
    )
  }
