import React from 'react'

export default function Editpage() {
    const [data,setdata]=useState([]);
    const {id} = useParams();
    const Categorey_Name = useRef();
    const Categorey_Details = useRef();
    const Categorey_Img = useRef();
    const Small_pricing = useRef();
    const Medium_pricing = useRef();
    const Large_pricing = useRef();
    const XlLarge_pricing = useRef();

    const FormHandelSubmit = (e)=>{
        e.preventDefault();
        if(!selectvalue){
            alert('plese select a category')
        }
    const ins = {
        Categorey_Name:Categorey_Name.current.value,
        Categorey_Details:Categorey_Details.current.value,
        Categorey_Img:Categorey_Img.current.value,
        Small_pricing :Small_pricing.current.value,
        Medium_pricing :Medium_pricing.current.value,
        Large_pricing:Large_pricing.current.value,
        XlLarge_pricing:XlLarge_pricing.current.value,
        
    }

    axios.post(`http://localhost:4000/${selectvalue ? selectvalue.label:''}`,ins).then(()=>{
        // passed message
    })

    e.target.reset();
    }

    useEffect(()=>{
        if(selecMangetCategory){
        axios.get(`http://localhost:4000/${selecMangetCategory ? selecMangetCategory:''}`).then((res)=>{
             setdata(res.data);
        }).catch((error)=>{console.error('provide me error:',error)})
    }
    },[selecMangetCategory])
    
  return (


 
    <div>
        
        <div className='py-4 '> 
            <h1 className='text-3xl font-semibold my-2'>Category name :<span className=' underline underline-offset-8 ml-2 text-blue-400 mb-3 font-normal'>{selectvalue ? selectvalue.label:''}</span>
                

            </h1>
            <p className='opacity-50 font-medium'>Add this category</p>
        </div>
     
        <form onSubmit={FormHandelSubmit}>
        {/* {data.map((item)=>( */}
            <div>
                
                <div className='py-1 text-xl'>
                 <p className=' font-bold py-1'>Categorey Name:</p>
                 <input type="text" className='w-full rounded-2xl p-3 border outline-none ' ref={Categorey_Name} value={selecMangetCategory ? selecMangetCategory.Categorey_Name:""} />
                </div>
               
                <div className='py-1 text-xl'>
                <p className=' font-bold py-1'>Categorey Details:</p>
                <textarea type="text" className='w-full rounded-2xl p-3 border outline-none ' rows={4} cols={10} ref={Categorey_Details} />
                </div>

                <div className='py-1 text-xl'>
                <p className=' font-bold py-1'>Category Img:</p>
                <input type="text" className='w-full rounded-2xl p-3 border outline-none ' ref={Categorey_Img} />
                </div>

                <div className='py-4 text-xl flex flex-rows items-center'>
                <p className=' font-bold py-1 mr-5'>Pricing:</p>
                <div className='flex justify-around items-center gap-3'>
                <input type="number" className='w-40 rounded-2xl p-3 border outline-none no-arrows' ref={Small_pricing} />
                <input type="number" className='w-40 rounded-2xl p-3 border outline-none no-arrows ' ref={Medium_pricing} />
                <input type="number" className='w-40 rounded-2xl p-3 border outline-none no-arrows' ref={Large_pricing} />
                <input type="number" className='w-40 rounded-2xl p-3 border outline-none no-arrows' ref={XlLarge_pricing} />

                
                </div>
                </div>

                <div className='py-4 flex items-center justify-center space-x-4'>
                   <button type='submit' className='p-2 px-4 border bg-blue-400 hover:bg-blue-500 text-white rounded-lg '>Submit</button>
                   <button type='reset' className='p-2 px-4 border bg-red-300 hover:bg-red-400 text-white rounded-lg '>Reset</button>

                </div>



            </div>
             {/* ))} */}
        </form>
        
    </div>
  )
}
