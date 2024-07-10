
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AdminOrderDetail() {
  const navigation = useNavigate();
  const {id}= useParams();
  const [Productdata,setProductdata]=useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:4000/BaketData`).then((res)=>{
         setProductdata(res.data);
    })
  },[Productdata]);

  const HandelSuccess = (id)=>{
    
    axios.delete(`http://localhost:4000/BaketData/${id}`).then(()=>{
      Swal.fire({
        position: "top-bottom",
        icon: "success",
        title: "item has successfully delivered",
        showConfirmButton: false,
        timer: 900
      });
 }) 
  }
  const handelPandeing=()=>{
    Swal.fire({
      position: "top-bottom",
      icon: "warning",
      title: "item has not delivered",
      showConfirmButton: false,
      timer: 1500
    });
  }


  return (
      <div className='py-4'>
            <div className=' py-5'>
              <h1 className=' font-semibold text-4xl' >Order list data</h1>
              <p className=' opacity-55'>detail about my order list</p>
            </div>

            <table className='w-full border border-black' cellPadding={10}>
               <thead className='bg-slate-200 p-4 mx-10 font-bold text-xl'>
                 <tr className=' bg-slate-200 p-4 px-5'>
                  <td className='p-4' >ID</td>
                  <td>Qty</td>
                  <td>Price</td>
                  <td>ProductDescription</td>
                  <td>ProductDetail</td>
                  <td>Action</td>
                 </tr>
               </thead>

               <tbody>
                {Productdata.map((item)=>(
                  <tr className=' border-b border-black p-4 bg-blue-50 font-semibold' key={item.id}>
                    <td><button >{item.id}</button></td>
                    <td>{item.qty}</td>
                    <td>&#8377;{item.pricing}</td>
                    <td className=' w-14'>{item.Categorey_Details}</td>
                    <td className=' w-44'>{item.Categorey_Name}</td>
                    <td className='space-x-2'><button className='bg-green-500 hover:bg-green-400 p-2 px-4 rounded-xl text-white howe'onClick={()=>{HandelSuccess(item.id)}}>Success</button>
                    <button className='bg-blue-500 hover:bg-blue-400 p-2 px-4 rounded-xl text-white howe' onClick={handelPandeing}>Pending</button>
                   
                    </td>
                    
                    
                  </tr>

                ))}
               </tbody>
            </table>
      </div>
  )
}