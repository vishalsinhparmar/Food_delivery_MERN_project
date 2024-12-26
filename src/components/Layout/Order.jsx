import React from 'react'
import { FaApple, FaGoogle, FaGooglePay, FaGooglePlay } from 'react-icons/fa'
import shadowImg from '@assets/Order/Shadow_img.png'
import OrderImg from '@assets/Order/friends-laughing-using-mobiles_2.png'
import Logo from '@assets/png_logo/LOGO_1.png'
import Rectangle8 from '@assets/Order/Rectangle_8.png'
import Rectangle9 from '@assets/Order/Rectangle_8_(1).png'

export default function Order() {
  const Customer = [
    {
      id:1,
      img:Rectangle8,
      signUp:'Signup as a business',
      Partner:'Partner with us',
      detail:'Earn more with lower fees'
    },
    {
      id:2,
      img:Rectangle9,
      signUp:'Signup as a rider',
      Partner:'Ride with us',
      detail:'Avail exclusive perks'
    }
  ]
  return (
    <div className='container '>

      {/*section 1 detail*/}

       <div className='border bg-gradient-to-t from-Customgray1 to-Customgray2 relative mt-28'>
          <div className='flex flex-col lg:flex-row items-start relative justify-center '>
             <div className='relative w-full lg:w-1/2 flex justify-center mt-5 px-2'>

                <img src={shadowImg} className=' z-30  absolute right-4 bottom-0 flex-shrink-0 '/>
                <img src={OrderImg} className=' z-30 relative' />

            </div>


        <div className='lg:mt-10 h-auto relative z-20  lg:justify-items-end  lg:items-center lg:w-1/2 w-full justify-center flex-shrink-0 p-5'>
             <div className=''>
              <div className='flex items-center justify-center'>
                <img src={Logo} className='lg:w-48 w-36'/><p className='font-bold  flex lg:text-5xl text-3xl'>ing is more</p>
                </div>
              <div className='flex justify-center'>
                <button className='bg-Custombutton rounded-full lg:text-right py-3 lg:px-16 lg:-ms-48 my-4 lg:w-700 px-6 '>
                    <span className='text-orange-400 font-bold lg:text-4xl text-2xl underline underline-offset-4'>Personalised</span> 
                    <span className='text-white lg:text-4xl text-2xl'> & Instant</span>
                </button>
                </div>

                <p className='text-black my-2 text-center'>Download the Order.uk app for faster ordering</p>
                    <div  className='lg:pl-10 flex mt-5 justify-center'>
                          <button onClick={() => window.location.href="https://apps.apple.com"} 
                                 className="flex items-center lg:px-4 lg:py-2 bg-black text-white rounded-md hover:bg-gray-800 px-2 py-3">
                              <FaApple className="h-8 w-8 lg:mr-2" />
           
                                <div className="text-center">
                                   <p className="text-xs leading-3">Download on the</p>
                                      <p className="text-lg font-semibold lg:leading-6 leading-5">App Store</p>
                                 </div>

                             </button>

                         <button className='bg-black text-white  lg:px-4 lg:py-2 border flex justify-center items-center rounded-md px-2 py-3 '>
                             <FaGooglePlay className='lg:h-6 lg:w-6 lg:mr-3 mr-1 h-6 w-6'/>
                             <div className='text-left '>
                                 <p className='text-xs leading-3' >GET IT ON</p> 
                                   <p className='text-lg font-semibold lg:leading-6 leading-5'>Google Play</p>
                             </div>
                         </button>
                  </div>
                 
                </div>
           </div>
        </div>
    </div>
             
              {/* section 2 detail */}

          <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-12'>
             {Customer.map((item)=>(

             
               <div key={item.id}  className='relative w-auto h-auto'>
                   <img src={item.img} className='relative z-10  w-full h-full'/>
                   <div className='bg-gradient-to-t from-slate-700 to-slate-950  object-cover rounded-lg  opacity-65 absolute z-20 top-0 left-0 h-full w-full' >
                    </div>
                   <p className='text-orange-400 absolute z-20 flex bottom-28 left-10'>{item.signUp}</p>
                   <h1 className='font-bold text-3xl absolute  z-20 flex bottom-20 left-10 text-white'>{item.Partner}</h1>
                   <button className='bg-orange-400 py-2 px-8 text-white hover:bg-orange-600 rounded-full absolute  z-20 flex  bottom-5 left-10'  >Get Started</button>
                   <p className='bg-white text-black font-semibold py-2 px-4 rounded-b-lg absolute top-0 z-20 flex   left-10'>{item.detail}</p>
               </div>
               ))}
          </div>

    </div>
  )
}
