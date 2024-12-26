import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Rectangle56 from '@assets/Order/Rectangle_53.png'
import { MdCancel } from 'react-icons/md';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { getsubcategory } from '../adminDashboard/Apibaseurl';
import { OrderContext } from './context/MyContext';

export default function PizzaModal({closemodal,selectPrice,AddMOdelisOpen,lPrice, setCount,setSelectedPizza}) {
    const [counts, setCounts] = useState({});
    const {orderCopmonentValue} = useContext(OrderContext)
    const[data,setdata]=useState([]);
    const[selectPizza,setselectpizza]=useState(null);
    const handleIncrement = (id) => {
       setCounts((previousCount)=>({
        ...previousCount,
        [id]: (previousCount[id] || 0) + 1,
       }))
    };
    const handleDecrement = (id) => {
        setCounts((previousCount)=>({
            ...previousCount,
            [id]:Math.max((previousCount[id] || 0)-1,0)
           }))
       
    }
    const calculateTotalPrice = () => {

        
        return data.reduce((total, item) => {
            const count = counts[item.id] || 0;
  
            const price = selectPizza && selectPizza.id === item.id ? selectPrice : 0;
            // console.log(`Item: ${item.subCategoryName}, Count: ${count}, Price: ${price}`);
            return total + (count * price);

        }, 0);
    };

    useEffect(()=>{
        const FetchsubCategory = async ()=>{
            const res = await getsubcategory(orderCopmonentValue.id);

            if(res.success === true){
                setdata(res.data.subcategories)
            }
            console.log('res of subcategories',res)
        }
        FetchsubCategory()
    },[orderCopmonentValue.id]);

  
  return (
    <div>
                    
                   <div className='lg:w-550 overflow-y-auto max-h-full  shadow-2xl pb-3 relative bg-white'>
         
                      <div className='' >
                          <div>
                            <img src={Rectangle56} alt=""  className='h-16 w-full object-cover'/>
                             <div className='' >
                                <MdCancel className='text-4xl text-orange-500 absolute top-0 right-0 bg-orange-50 cursor-pointer' onClick={closemodal}/>
                           </div>
                      </div>
           
                       <div>
                           <p className=' text-center my-4 font-bold text-black'>Please select your first Pizza</p>
                       </div>
           
                      <div className='lg:w-96 w-auto  mx-auto'>
                  {data.map((item)=>(
           
                   <button onClick={()=>{setselectpizza(item)}} className={`lg:w-96 w-auto my-2 ${selectPizza && selectPizza.id == item.id ? 'bg-black text-white':''} mx-auto bg-Aboutcolor  rounded-lg`}    key={item.id} >
                          <div className=' w-full    flex justify-between pr-4 '  key={item.id}>
           
                       
                           <div className='p-4  flex items-center justify-between'>
                               <div className='border-r-2 px-2' >
                                 <img src={item.image} alt="" className='w-14 h-14 rounded-full' />
                               </div>

                                <div className='ml-4 font-bold'>
                                <h1 className=''>{item.subCategoryname} </h1>
                                </div>
                               
                           </div>
           
                           <div className='inline-flex items-center'>
                               <div>
                               <button className={`bg-black  rounded-full w-6 text-white flex justify-center ${selectPizza && selectPizza.id == item.id ? 'bg-orange-500 text-white ':''} `} onClick={(e)=>{ e.stopPropagation(); handleDecrement(item.id)}}>-</button>
                               </div>
                               <div className='px-2'>
                               <input type='number' className={`w-16 h-16 rounded-lg focus:outline-none ${ selectPizza && selectPizza.id == item.id ? ' text-black ':''}   text-center text-xl no-arrows`} value={counts[item.id]||0} readOnly/>
                               </div>
                               <div>
                               <button className={`bg-black  rounded-full w-6 text-white flex justify-center ${selectPizza && selectPizza.id == item.id ? 'bg-orange-500 text-white ':''}  `} onClick={(e)=>{e.stopPropagation(); handleIncrement(item.id)}}>+</button>
                               </div>
                           </div>
                        </div>  
                         </button>
                         ))}  
                  
                         
           
                   
                    </div >
           
                     {/*for pay button  */}
                            <div className='mx-10 flex items-center justify-between ' >
                                        <button type='input' className='flex items-center justify-between bg-orange-500 text-white font-bold rounded-lg'>
                                            <div className='flex items-center px-2 py-2' >
                                            <p className='mr-1'>Total to pay</p> 
                                            <p className='text-md' >&#8377;&nbsp;{calculateTotalPrice()}</p>
                                            </div>
                                        </button>
                                   <p className='text-xs'>Delivery & Tax will be calculated in the next step</p>
                           </div> 
                   {/*for pay button-end  */}
           
                           <div className='flex  items-center justify-end mx-10'>
                                 <p className='underline underline-offset-2 cursor-pointer' onClick={closemodal} >Take me back</p>
                               
                                       <button className='flex items-center justify-between  bg-green-600 text-white font-bold  rounded-lg mx-2' onClick={()=>{AddMOdelisOpen('pizza')}}>
                                           <div className='flex items-center justify-center px-4 py-3' >
                                               <p className='mr-5 text-xl'><BsArrowRightCircleFill/></p> 
                                                <p className='text-md' >Next!</p>
                                           </div>
                                     </button>
                               
                   </div>
                    
                   </div>
           
                  </div>
             

              
    </div>
  )
}
