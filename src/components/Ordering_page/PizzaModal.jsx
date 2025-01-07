import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Rectangle56 from '@assets/Order/Rectangle_53.png'
import { MdCancel } from 'react-icons/md';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { getsubcategory } from '../adminDashboard/Apibaseurl';
import { OrderContext } from './context/MyContext';
import { addsubcategoryCartdata } from '../../services/Api';

export default function PizzaModal() {
    // const [counts, setCounts] = useState({});
    const { orderCopmonentValue,fetchCartData,setInstructionid, Subcategoryprice,NextsetmodelIsopen,handleModelisclose} = useContext(OrderContext)
    const [data, setdata] = useState([]);
   
    const [selectPizza, setselectpizza] = useState(null)
    const [categorystate, setcatecorystate] = useState({});

    const handleNext = async ()=>{
        if(Object.keys(categorystate).length === 0) return alert("you can select item first")
        console.log('category pizza',categorystate)
        const keys = Object.keys(categorystate)
        console.log("keys",keys)
         const categoryItem  = {
            qty:categorystate[keys]?.qty,
            total:categorystate[keys]?.total,
            subcategoryId:keys[0]
         };
         console.log('categoryItem',categoryItem)

         try{
            const res = await addsubcategoryCartdata(categoryItem)
            console.log('res is',res)
            if(res.success === true){
                alert('added a success a subcategories to a cart')
                setInstructionid(res.data._id)
                NextsetmodelIsopen(true)
                handleModelisclose()
                await fetchCartData()
            }
         }catch(err){
            console.log("error occur in pizzamodel",err.response)
         }
    }
 
    // console.log("counts",counts)
    const defautprice = Number(Subcategoryprice.price) || 0;

    const handleselectpizza = (pizzaId) => {
        // if(setselectpizza(pizza === pizza._id)) return;
        setcatecorystate ({})
        setselectpizza(pizzaId)
        if (selectPizza !== pizzaId) {
            setcatecorystate((prevstate) => (
                {
                    ...prevstate,
                    [pizzaId]: {
                        qty:1,
                        total: defautprice
                    }
                }))
        }else{
            setcatecorystate({})
        }
    }

    const handleIncrement = (id) => {
        setcatecorystate((prevstate) => {
            const newCount = prevstate[id]?.qty ;
            const prevId = prevstate[id]
        if(prevId && newCount >= 1){
           return {
                ...prevstate,
                [id]: {
                    qty: newCount + 1 ,
                    total: prevstate[id]?.total + defautprice
                }
            }
        }
        return prevstate
        }
        )

    }

    const handleDecrement = (id) => {
        setcatecorystate((prevstate) => {
            const prevId = prevstate[id]
            const prevcount = prevstate[id]?.qty;
            if(prevId && prevcount>1){
              return {  
                ...prevstate,
                [id]: {
                    qty: prevcount - 1,
                    total: prevstate[id]?.total - defautprice
                }
            }
         }
           
          return prevstate  
        }
        )
    }

    useEffect(() => {
        const FetchsubCategory = async () => {
            const res = await getsubcategory(orderCopmonentValue.id);

            if (res.success === true) {
                setdata(res.data.subcategories)
            }
            console.log('res of subcategories', res)
        }
        FetchsubCategory()
    }, [orderCopmonentValue.id]);

  
     
    return (
        <div>

            <div className='lg:w-550 overflow-y-auto max-h-full  shadow-2xl pb-3 relative bg-white'>

                <div className='' >
                    <div>
                        <img src={Rectangle56} alt="" className='h-16 w-full object-cover' />
                        <div className='' >
                            <MdCancel className='text-4xl text-orange-500 absolute top-0 right-0 bg-orange-50 cursor-pointer' onClick={handleModelisclose} />
                        </div>
                    </div>

                    <div>
                        <p className=' text-center my-4 font-bold text-black'>Please select your first Pizza</p>
                    </div>

                    <div className='lg:w-96 w-auto  mx-auto'>
                        {data.map((item) => (

                            <div onClick={(e) => { e.stopPropagation(); handleselectpizza(item._id) }}
                                className={`lg:w-96 w-auto my-2 
                                        ${selectPizza && selectPizza === item._id ? 'bg-black text-white ' : 'hover:bg-none'} mx-auto bg-Aboutcolor hover:bg-slate-900 hover:text-white cursor-pointer  rounded-lg`}
                                key={item.id}
                            >
                                <div className=' w-full    flex justify-between pr-4 ' key={item._id}>


                                    <div className='p-4  flex items-center justify-between'>
                                        <div className='border-r-2 px-2' >
                                            <img src={item.image} alt="" className='w-14 h-14 rounded-full' />
                                        </div>

                                        <div className='ml-4 font-bold'>
                                            <h1 className=''>{item.subCategoryname} </h1>
                                        </div>

                                    </div>
                                    {selectPizza && (
                                        <div className='inline-flex items-center'>
                                            <div>
                                                <button className={`bg-black  rounded-full w-6 text-white flex justify-center ${selectPizza && selectPizza == item._id ? 'bg-orange-500 text-white ' : ''} `} onClick={(e) => { e.stopPropagation(); handleDecrement(item._id)  }} disabled={categorystate[item._id?.qty === 1]}>-</button>
                                            </div>
                                            <div className='px-2'>
                                                <input type='number' className={`w-16 h-16 rounded-lg focus:outline-none ${selectPizza && selectPizza == item._id ? ' text-black ' : ''}   text-center text-black text-xl no-arrows`} value={categorystate[item._id]?.qty || 1 } readOnly />
                                            </div>
                                            <div>
                                                <button className={`bg-black  rounded-full w-6 text-white flex justify-center ${selectPizza && selectPizza === item._id ? 'bg-orange-500 text-white ' : ''}  `}
                                                    onClick={(e) => { e.stopPropagation(); handleIncrement(item._id) }}>+</button>
                                            </div>
                                        </div>
                                    )
                                    }

                                </div>
                            </div>
                        ))}




                    </div >

                    {/*for pay button  */}
                    <div className='mx-10 flex items-center justify-between ' >
                        <button type='input' className='flex items-center justify-between bg-orange-500 text-white font-bold rounded-lg'>
                            <div className='flex items-center px-2 py-2' >
                                <p className='mr-1'>Total to pay</p>
                                <p className='text-md' >&#8377;&nbsp;{categorystate[selectPizza]?.total || 0}</p>
                            </div>
                        </button>
                        <p className='text-xs'>Delivery & Tax will be calculated in the next step</p>
                    </div>
                    {/*for pay button-end  */}

                    <div className='flex  items-center justify-end mx-10'>
                        <p className='underline underline-offset-2 cursor-pointer' onClick={handleModelisclose} >Take me back</p>

                        <button className='flex items-center justify-between  bg-green-600 text-white font-bold  rounded-lg mx-2 cursor-pointer' onClick={handleNext} disabled={Object.keys(categorystate).length === 0}>
                            <div className='flex items-center justify-center px-4 py-3' >
                                <p className='mr-5 text-xl'><BsArrowRightCircleFill /></p>
                                <p className='text-md' >Next!</p>
                            </div>
                        </button>

                    </div>

                </div>

            </div>



        </div>
    )
}
