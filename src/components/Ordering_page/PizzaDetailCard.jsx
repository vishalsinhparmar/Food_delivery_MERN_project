import { useContext, useEffect, useState } from 'react'
import Redchilli1 from '@assets/Order/icons8-chilli-96_2.png'
import Redchilli2 from '@assets/Order/icons8-chilli-96_5.png'
import Modal from 'react-modal'
Modal.setAppElement('#root');
import Instructions from './Instructions'
import PizzaModal from './PizzaModal'
import { getfoodcategory } from '../adminDashboard/Apibaseurl'
import { OrderContext } from './context/MyContext'

export default function PizzaDetailCard() {

  const { orderCopmonentValue,categoryData ,setdataCategory,Subcategoryprice,setSubcategoryprice,handleModelisopen,modelIsopen,nextmodalIsopen,handleModelisclose} = useContext(OrderContext)




  const HandelSelectedButton = (price) => {
    setSubcategoryprice((prev)=>(
      {
        ...prev,
       price:Number(price)

      }
    ))
    handleModelisopen()
  }


  return (
    <div>
      <div className=''>
        {/* modal-start */}
        <Modal isOpen={modelIsopen}
          onRequestClose={handleModelisclose}
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[1000] '
          overlayClassName='z-50'
        >
          <PizzaModal />
        </Modal>
        {/* first-modal-end */}

        {/* second-modal-for add-cart-start*/}

        <Modal isOpen={nextmodalIsopen}
        onRequestClose={handleModelisclose}
          overlayClassName='z-50'
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[1000]'>
          <Instructions />
       </Modal>
        {/* second-modal-for add-cart-end*/}


        {/* model-end-pizza detail */}


        <div className='grid grid-flow-row gap-5'>
          {categoryData.map((item) => (
            <div className='bg-white rounded-lg shadow-xl p-4 border cursor-pointer' key={item.id} >
              <div className='flex items-center justify-items-center justify-between gap-10'>
                <div className='felx items-center justify-between '>

                  <h1 className='text-2xl font-semibold' >{item.categoryItemName}</h1>
                  <div className='flex items-center '>

                    <img src={Redchilli1} alt="" className='w-6' />
                    <img src={Redchilli1} alt="" className='w-6' />
                    <img src={Redchilli1} alt="" className='w-6' />
                    <img src={Redchilli1} alt="" className='w-6' />
                    <img src={Redchilli2} alt="" className='w-6' />

                  </div>
                  <p className='text-sm py-4 max-w-56' >{item.description}</p>
                </div>

                <div className=' rounded-full w-36 ' >
                  <img src={item.image} className='w-full object-cover ' />
                </div>
              </div>

              <div className='grid lg:grid-flow-row grid-row-2 grid-cols-2 lg:gap-2 gap-1 pt-8'>
                {item.pricing.map((price) => (
                  <>

                    <div className="flex flex-col  bg-white items-center  justify-center">
                      <div className={`flex w-full border p-2 items-center justify-between  hover:bg-slate-300 hover:text-white  bg-slate-100 rounded-md ${Subcategoryprice.price ? "":"bg-black "} `} onClick={() => HandelSelectedButton(price.price)}>
                        <p className='lg:mr-5 mr-2 text-black  '>{price.size}</p>
                        <p className='py-2 lg:px-4 px-2 bg-green-700 text-white font-bold rounded-md'>&#8377;&nbsp;{price.price}</p>
                      </div>

                    </div>

                  </>
                ))}

              </div>


            </div>

          ))}
          {/* map */}
        </div>
        {/* Pizza-Card-end*/}
      </div>

    </div>
  )
}
