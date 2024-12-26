import Logo from '@assets/png_logo/LOGO_1.png'
import Facebook from '@assets/Footer/Facebook.png'
import Instagram from '@assets/Footer/Instagram.png'
import Snapchat from '@assets/Footer/Snapchat.png'
import Ticktok from '@assets/Footer/TikTok.png'
// import Rectangle3 from '@assets/ExclusiveOffer/Rectangle 8 (2).png'

import { NavLink } from 'react-router-dom'
import { FaApple, FaGooglePay, FaGooglePlay } from 'react-icons/fa'

export default function Footer() {
    const FooterImg = [
        {   
            id:1,
            img:Facebook
        },
        {
            id:2,
            img:Instagram
        },
        {
            id:3,
            img:Snapchat
        },
        {   
            id:4,
            img:Ticktok
        },

    ]
  return (
    <footer className='border-t-0 border-black'>
           
            <div className='grid lg:grid-flow-col grid-flow-row  justify-items-center items-center gap-6  bg-Aboutcolor  container'>

          
{/* 1 */}
           
              <div className='py-5 '>
                <div className=' flex justify-center'>
                  <img src={Logo} alt="logo" />
                </div>

                  {/* button */}
                     <div  className='flex  justify-center mt-5'>
                          <button onClick={() => window.location.href="https://apps.apple.com"} 
                                 className="flex items-center px-2 py-2 bg-black text-white rounded-md hover:bg-gray-800">
                              <FaApple className="h-8 w-8 mr-2" />
           
                                <div className="text-left">
                                   <p className="text-xs">Download on the</p>
                                      <p className="text-lg font-semibold">App Store</p>
                                 </div>
                             </button>

                         <button className='bg-black text-white  px-2 py-2 border flex justify-center items-center rounded-md '>
                             <FaGooglePlay className='h-6 w-6 mr-3'/>
                             <div className='text-left'>
                                 <p className='text-xs' >GET IT ON</p> 
                                   <p className='text-lg font-semibold'>Google Play</p>
                             </div>
                         </button>

                       </div>
                       {/* button */}
                     <div className='flex items-center w-full justify-center'>
                       <p className='mt-5 justify-item text-center max-w-42'>Company # 490039-445, Registered with House of companies.</p>

                       </div>
              </div>
{/*  1 */}
               <div className='py-5 sm:pt-0 footer'>
                      <h1 className='text-center'>Get Exclusive Deals in your Inbox</h1>
                         <div className='flex -ms-2 justify-center'>
                            <input type="text" className='rounded-full p-3 border placeholder-black mt-5 placeholder:text-sm  focus:outline-none lg:w-64 sm:w-56 w-52'  placeholder='  e.g. EC4R 3TE'/>
                             <button className=' bg-orange-400 lg:p-2 lg:px-5 px-3 rounded-full text-white mt-5 -ml-10'>Subscribe</button>
                         </div>
                      <p className='my-5 text-center'>we wont spam, read our email policy</p>

                       <div className='flex justify-center' >
                        {FooterImg.map((item)=>(
                        <img src={item.img} key={item.id} className='cursor-pointer'  />
                         ))}
                       </div>
                       
               </div>
 {/* 2 */}

                  <div className='py-5'>
                       <ul>
                        <li><h1 className='font-bold' >Legal Pages</h1></li>
                        <li className='underline mt-1' ><NavLink>Terms and conditions</NavLink></li>
                        <li className='underline'><NavLink>Privacy</NavLink></li>
                        <li className='underline'><NavLink>Cookies</NavLink></li>
                        <li className='underline'><NavLink>Modern Slavery Statement</NavLink></li> 
                       </ul>
                  </div>
{/* 3 */}
                  <div className='py-5 '>
                       <ul>
                        <li><h1 className='font-bold' >Important Links</h1></li>
                        <li className='underline mt-1'><NavLink>Get help</NavLink></li>
                        <li className='underline'><NavLink>Add your restaurant</NavLink></li>
                        <li className='underline'><NavLink>Sign up to deliver</NavLink></li>
                        <li className='underline'><NavLink>Create a business account</NavLink></li>
                        
                       </ul>
                  </div>
                  
         </div>
         
         <div className='flex justify-between bg-Footercolor text-white py-5 text-xs '>
             <p className='text-center w-96' >Order.uk Copyright 2024, All Rights Reserved.</p>
             <ul className='lg:inline-flex hidden'>
                <li className='px-4'><NavLink>Privacy Policy</NavLink></li>
                <li className='px-4'><NavLink>Terms</NavLink></li>
                <li className='px-4'><NavLink>Pricing </NavLink></li>
                <li className='px-4'><NavLink>Do not sell or share my personal information</NavLink></li>
                 
             </ul>
            
         </div>
    </footer>
  )
}
