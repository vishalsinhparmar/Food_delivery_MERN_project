import React, { useEffect, useState } from 'react'
import { BsArrowDownCircleFill } from 'react-icons/bs'
import PizzaImg1 from '../../assets/Order/Rectangle 46 (1).png'
import PizzaImg2 from '../../assets/Order/Rectangle 46 (2).png'
import PizzaImg3 from '../../assets/Order/Rectangle 46 (3).png'
import Redchilli1 from '../../assets/Order/icons8-chilli-96 2.png'
import Redchilli2 from '../../assets/Order/icons8-chilli-96 5.png'
// import Rectangle56 from '../../assets/Order/Rectangle 53.png'
import Elips1 from '../../assets/Pizza/Ellipse 6 (3).png'
import Elips2 from '../../assets/Order/Ellipse 6.png'
import Elips3 from '../../assets/Pizza/Ellipse 6 (1).png'
import Elips4 from '../../assets/Pizza/Ellipse 6 (2).png'

import Modal from 'react-modal'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'
// import 'react-modal/dist/style.css'
Modal.setAppElement('#root');
// import { BsArrowRightCircleFill } from 'react-icons/bs'


import { NavLink } from 'react-router-dom'
import Instructions from './Instructions'
import { Value } from 'sass'
import axios from 'axios'
import PizzaModal from './PizzaModal'
// import Popup from 'popup'




export default function PizzaDetailCard() {

// for category data for my pizzacard\

const[data,setdata]=useState([]);

 useEffect(()=>{
    axios.get(`http://localhost:4000/Pizza`).then((res)=>{
         setdata(res.data)
         console.log('the error in this ',res.data)
    })
 },[])


    const [modelIsopen,setmodelisOpen]=useState();

    // this state is to set the value of modal


    // for add to cart usestate
    const [nextmodalIsopen,NextsetmodelIsopen]=useState();
    const [nextSelectedValue,SetaddSelectedValue]=useState(null);


    const closemodal = ()=>{
        setmodelisOpen(false)
        NextsetmodelIsopen(false)
      

    }
    const Modelisopen = (name)=>{
         setmodelisOpen(true)
        
    }

    const AddMOdelisOpen = (name)=>{
        NextsetmodelIsopen(true)
        SetaddSelectedValue(name)
        setmodelisOpen(false)
       
    }




// for selected button value

   const [selectPrice,setSelctedPricebutton]=useState({});


   const [selectButton,setselectedButton]=useState({});
   const HandelSelectedButton = (pizzaId,size,price)=>{
        setselectedButton(preState=>({
          ...preState,
          [pizzaId]:size
        }));
        setSelctedPricebutton(price)
      

        setSelectedPizza({ pizzaId, size, price:Number(price) });
        setTimeout(() => {
            Modelisopen(true);
        },500);
        
   }

   const [totalPrice,setTotalPrice]=useState();
   const [pizza,setSelectedPizza]=useState(null);
   const [count,setCount]=useState(0);







  return (
       <div>
             <div className=''>
                {/* modal-start */}
              <Modal isOpen={modelIsopen}
                      onRequestClose={closemodal}
                      className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[1000] '
                      overlayClassName='z-50' 
              >
            <PizzaModal closemodal={closemodal} selectPrice={selectPrice } AddMOdelisOpen={AddMOdelisOpen} setCount={setCount}  setTotalPrice={setTotalPrice} setSelectedPizza={setSelectedPizza}   />
              

               
               </Modal>
               {/* first-modal-end */}

               {/* second-modal-for add-cart-start*/}

                  <Modal isOpen={nextmodalIsopen}
                          
                         overlayClassName='z-50' 

                          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[1000]'>
                    {nextSelectedValue && (
                          <Instructions closemodal={closemodal} selectPrice={totalPrice} myPizzaName={pizza ? pizza.subCategoryName:''} counts={count}/>
                    )}
                  
                  </Modal>
               {/* second-modal-for add-cart-end*/}


               {/* model-end-pizza detail */}

   
                <div className='grid grid-flow-row gap-5'>
                   {data.map((item)=>(
                     <div className='bg-white rounded-lg shadow-xl p-4 border cursor-pointer' key={item.id} >
                        <div className='flex items-center justify-items-center justify-between gap-10'>
                          <div className='felx items-center justify-between '>
                            {selectPrice.pizzaId}
                              <h1 className='text-2xl font-semibold' >{item.Categorey_Name}</h1>
                              <div className='flex items-center '>
                                
                                <img src={Redchilli1} alt="" className='w-6'/>
                                <img src={Redchilli1} alt="" className='w-6' />
                                <img src={Redchilli1} alt="" className='w-6'/>
                                <img src={Redchilli1} alt="" className='w-6'/>
                                <img src={Redchilli2} alt="" className='w-6' />
                                
                              </div>
                              <p className='text-sm py-4 max-w-56' >{item.Categorey_Details}</p>
                          </div>

                          <div className=' rounded-full w-36 ' >
                              <img src={item.Categorey_Img} className='w-full object-cover '/> 
                          </div>
                      </div>

                      <div className='grid lg:grid-flow-col grid-row-2 grid-cols-2 lg:gap-2 gap-1 pt-8'>

                       <button onClick={()=>{HandelSelectedButton(item.id,'Small',item.Small_pricing)}}>  
                         <div className={`border p-2 flex items-baseline   rounded-md ${selectButton[item.id]=='Small'? 'bg-black text-white':''}`}>
                              <p className='lg:mr-5 mr-2 '>Small</p>
                              <p className='py-2 lg:px-4 px-2 bg-green-700 text-white font-bold rounded-md'>&#8377;&nbsp;{item.Small_pricing}</p>
                          </div>
                        </button>

                     <button onClick={()=>{HandelSelectedButton(item.id,'Medium',item.Medium_pricing)}}>  
                          <div className={`border p-2 flex items-baseline rounded-md ${selectButton[item.id]=='Medium'? 'bg-black text-white':''}`}>
                              <p className='lg:mr-5 mr-2'>Medium </p>
                              <p className='py-2 lg:px-4 px-2 bg-green-700 text-white font-bold rounded-md'>&#8377;&nbsp;{item.Medium_pricing}</p>                           
                          </div>
                     </button>

                      <button onClick={()=>{HandelSelectedButton(item.id,'Large',item.Large_pricing)}} className=''>
                          <div className={`border p-2 flex items-baseline rounded-md ${selectButton[item.id]=='Large'? 'bg-black text-white':''}`}>
                              <p className='lg:mr-5 mr-2'>Large</p>
                              <p className='py-2 lg:px-4 px-2 bg-green-700 text-white font-bold rounded-md'>&#8377;&nbsp;{item.Large_pricing}</p>                           
                          </div>
                     </button> 
                      </div>

                      <button onClick={()=>{HandelSelectedButton(item.id,'Xllarge',XlLarge_pricing)}} className='flex justify-items-start'>
                      <div className={`border p-2 flex items-baseline rounded-md w-80 mt-2 ${selectButton[item.id]=='Xllarge'? 'bg-black text-white':''}`}>
                              <p className='mr-5'>XL Large with Sauces</p>
                              <button type='reset' className='py-2 px-4 bg-green-700 text-white font-bold rounded-md'>&#8377;&nbsp;{item.XlLarge_pricing}</button>                           
                          </div>
                     </button>
                     </div>
                     
                     ))}
                     {/* map */}
                </div>
                
           
               
               {/* Pizza-Card-end*/}
             </div>
         
       </div>
  )
}
