import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoTimer } from 'react-icons/io5'
import { TiContacts } from 'react-icons/ti'

export default function InformationAbout() {
  return (
      <div className='container mt-10'>

          <div className='grid lg:grid-cols-3 grid-col-1 gap-5   bg-Mainccolor border rounded-md mt-10'>
               
               <div className='ps-10 lg:py-14'>
                    <h1 className='flex items-center my-5 font-bold text-xl'><FaLocationDot className='mr-5'/> Delivery information</h1>
                    <ul>
                        <li className='my-3'><span className='font-bold' >Monday:</span>8:00 AM-3:00 AM</li>
                        <li className='my-3'><span className='font-bold' >Tuesday:</span>8:00 AM-3:00 AM</li>
                        <li className='my-3'><span className='font-bold' >Wednesday:</span>8:00 AM-3:00 AM</li>
                        <li className='my-3'><span className='font-bold' >Thursday:</span>8:00 AM-3:00 AM</li>
                        <li className='my-3'><span className='font-bold' >Friday:</span>8:00 AM-3:00 AM</li>
                        <li className='my-3'><span className='font-bold' >Saturday:</span>8:00 AM-3:00 AM</li>
                        <li className='my-3'><span className='font-bold' >Sunday:</span>8:00 AM-12:00 AM</li>
                         <li className='my-3'><span className='font-bold' >Estimated time until delivery:</span>20 min</li>    
                    </ul>
               </div>

               <div className='px-4 lg:py-14'>
                    <h1 className='flex items-center my-5 font-bold text-xl'><TiContacts className='mr-5 text-2xl'/> Delivery information</h1>
                    <ul>
                        <li className='my-3'><p>If you have allergies or other dietary restrictions, please contact the restaurant. 
                         The restaurant will provide food-specific information upon request.</p></li>
                        <li className='my-3 font-bold'>Phone number</li>
                        <li className='my-3'>+934443-43</li>
                        <li className='my-3 font-bold'>Website</li>
                        <li className='my-3'><a href="http://mcdonalds.uk/">http://mcdonalds.uk/</a></li>
                    </ul>
               </div>
               
               <div className='ps-10 py-14 bg-Herocolor text-white'>
                    <h1 className='flex items-center my-5 font-bold text-xl'><IoTimer className='mr-5'/>Operational Times</h1>
                    <ul>
                       <li className='my-3'><span className='font-bold' >Monday:</span> 8:00 AM-3:00 AM</li>
                       <li className='my-3'><span className='font-bold' >Tuesday:</span> 8:00 AM-3:00 AM</li>
                       <li className='my-3'><span className='font-bold' >Wednesday:</span> 8:00 AM-3:00 AM</li>
                       <li className='my-3'><span className='font-bold' >Thursday:</span> 8:00 AM-3:00 AM</li>
                       <li className='my-3'><span className='font-bold' >Friday:</span> 8:00 AM-3:00 AM</li>
                       <li className='my-3'><span className='font-bold' >Saturday:</span> 8:00 AM-3:00 AM</li>
                       <li className='my-3'><span className='font-bold' >Sunday:</span> 8:00 AM-3:00 AM</li>                     
                    </ul>
               </div>


          </div>  
   
      </div>
  )
}
