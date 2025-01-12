import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Rectangle56 from '@assets/Order/Rectangle_53.png';
import { MdCancel } from 'react-icons/md';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { getsubcategory } from '../adminDashboard/Apibaseurl';
import { OrderContext } from './context/MyContext';
import { addsubcategoryCartdata } from '../../services/Api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function PizzaModal() {
    const navigate = useNavigate();
    const { 
        orderCopmonentValue, 
        fetchCartData, 
        setInstructionid, 
        Subcategoryprice, 
        NextsetmodelIsopen, 
        handleModelisclose
    } = useContext(OrderContext);

    const [data, setData] = useState([]);
    const [selectPizza, setSelectPizza] = useState(null);
    const [categorystate, setCategoryState] = useState({});
    console.log("categorystate",categorystate)

    const defaultPrice = Number(Subcategoryprice.price) || 0;

    const handleNext = async () => {
        if (Object.keys(categorystate).length === 0) {
            alert("Please select an item first");
            return;
        }

        const keys = Object.keys(categorystate);
        const categoryItem = {
            qty: categorystate[keys[0]].qty,
            total: categorystate[keys[0]].total,
            subcategoryId: keys[0]
        };

        try {
            const res = await addsubcategoryCartdata(categoryItem);
            if (res.success) {
              Swal.fire('Success', 'Item added successfully', 'success');
                const instructionId = Array.isArray(res.data.Iteam) ? res.data.Iteam.pop() : res.data._id;
                setInstructionid(instructionId);
                NextsetmodelIsopen(true);
                handleModelisclose();
                await fetchCartData();
            }
        } catch (err) {
            console.error("Error in PizzaModal:", err.response);
            Swal.fire({
                title: "Unauthorized",
                html: `User not authorized! Please <a href='/auth' style='color:blue; text-decoration:underline;'>Sign In</a>`
            });
            if (err.response) navigate('/auth');
        }
    };

    const handleSelectPizza = (pizzaId) => {
        setSelectPizza(pizzaId);
        setCategoryState({
            [pizzaId]: {
                qty: 1,
                total: defaultPrice
            }
        });
    };

    const handleIncrement = (id) => {
        setCategoryState((prevState) => {
            const newCount = prevState[id]?.qty || 0;
            return {
                ...prevState,
                [id]: {
                    qty: newCount + 1,
                    total: (prevState[id]?.total || 0) + defaultPrice
                }
            };
        });
    };

    const handleDecrement = (id) => {
        setCategoryState((prevState) => {
            const newCount = prevState[id]?.qty || 0;
            if (newCount > 1) {
                return {
                    ...prevState,
                    [id]: {
                        qty: newCount - 1,
                        total: (prevState[id]?.total || 0) - defaultPrice
                    }
                };
            }
            return prevState;
        });
    };

    useEffect(() => {
        const fetchSubCategories = async () => {
            try {
                const res = await getsubcategory(orderCopmonentValue.id);
                if (res.success) {
                    setData(res.data.subcategories);
                } else {
                    console.error("Failed to fetch subcategories");
                }
            } catch (error) {
                console.error("Error fetching subcategories:", error);
            }
        };
        fetchSubCategories();
    }, [orderCopmonentValue.id]);

    return (
        <div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="w-full max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden relative">
                <img src={Rectangle56} alt="Header" className="w-full h-16 object-cover" />
                <button
                    className="absolute top-4 right-4 text-2xl text-orange-500 hover:text-orange-600"
                    onClick={handleModelisclose}
                    aria-label="Close modal"
                >
                    <MdCancel />
                </button>

                <div className="p-4">
                    <h2 className="text-center text-xl font-bold mb-4">Please select your first Pizza</h2>

                    <div className="space-y-4">
                        {data.map((item) => (
                            <div
                                key={item._id}
                                className={`p-4 flex items-center justify-between border rounded-lg cursor-pointer transition-colors ${selectPizza === item._id ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-300'}`}
                                onClick={() => handleSelectPizza(item._id)}
                            >
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.subCategoryname} className="w-16 h-16 rounded-full" />
                                    <span className="font-bold">{item.subCategoryname}</span>
                                </div>
                                {selectPizza === item._id && (
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="px-2 py-1 bg-orange-500 text-white rounded-full"
                                            onClick={(e) => { e.stopPropagation(); handleDecrement(item._id); }}
                                        >-
                                        </button>
                                        <span>{categorystate[item._id]?.qty || 1}</span>
                                        <button
                                            className="px-2 py-1 bg-orange-500 text-white rounded-full"
                                            onClick={(e) => { e.stopPropagation(); handleIncrement(item._id); }}
                                        >+
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 lg:flex justify-between items-center">
                        <button className="px-4 py-2 bg-orange-500 text-white font-bold rounded-lg">
                            Total: ₹{categorystate[selectPizza]?.total || 0}
                        </button>
                        <p className="text-sm lg:mt-0 mt-2">Delivery & Tax will be calculated in the next step</p>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <button
                            className="underline text-blue-500"
                            onClick={handleModelisclose}
                        >
                            Take me back
                        </button>
                        <button
                            className="px-4 py-2 bg-green-600 text-white font-bold rounded-lg"
                            onClick={handleNext}
                            disabled={Object.keys(categorystate).length === 0}
                        >
                            Next <BsArrowRightCircleFill className="inline ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
