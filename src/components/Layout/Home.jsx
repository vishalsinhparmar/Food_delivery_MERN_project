import { useContext, useEffect, useState } from "react"
import AdminLayout from "../adminDashboard/AdminLayout"
import PizzaModal from "../Ordering_page/PizzaModal"
import AboutUs from "./AboutUs"
import Categories from "./Categories"
import Exclusicedeal from "./Exclusicedeal"
import Hersection from "./Hersection"
import Order from "./Order"
import Restaurant from "./Restaurant"
import Modal from 'react-modal'
import AdminComponents from "./AdminComponents"
import { NavLink } from "react-router-dom"
import MyBasket from "../Ordering_page/cart/MyBasket"
import { AuthContext } from "../Auth/AuthContext/Authcontex"
import { CgClose } from "react-icons/cg"
Modal.setAppElement('#root');

const Home = ()=>{
const {modelIsopen,handleModelisclose} = useContext(AuthContext)
     const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCount, setShowCount] = useState(0);
  const maxShowCount = 4; // Number of times to show the modal

  useEffect(() => {
    if (showCount < maxShowCount) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 10000); // Show modal after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [showCount]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (showCount < maxShowCount) {
      setTimeout(() => setShowCount((prev) => prev + 1), 4000); // Schedule next show
    }
  };

    
     return (
        <>
             <Hersection/>
            <Exclusicedeal/>
            <Categories/>
            <Restaurant/>
            <Order/>
            <AboutUs/>

            <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[1000]"
        overlayClassName="z-50"
      >
        <div className="bg-white p-5 rounded-md shadow-md w-full max-w-lg">
          <h2 className="text-lg font-bold mb-4">Admin Panel Preview</h2>
             <p className="ml-2">click the admin panel :<NavLink to ='admin' className="ml-2 text-blue-400 text-xl underline text-center" >Admin</NavLink></p>
          <button
            onClick={handleCloseModal}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Close
          </button>
        </div>
      </Modal>
    <div className="relative">
      <Modal isOpen={modelIsopen}
                  onRequestClose={handleModelisclose}
                  className='fixed inset-0 flex mt-5 items-center justify-center bg-white bg-opacity-100 z-[1000] '
                  overlayClassName='z-50'
                >
       <p className="text-2xl text-orange-500 my-4 absolute top-0 right-2 cursor-pointer" onClick={handleModelisclose}><CgClose/></p>
                  <MyBasket />
                </Modal>
                </div>
        </>
     )
}

export default Home