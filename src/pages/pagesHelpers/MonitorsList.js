import React, {useState} from 'react'
import { MonitorsItems } from './MonitorsItems';
import {BsCart3} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { add } from '../../components/state/slice/CartSlice'
import { useDispatch } from 'react-redux'

function MonitorsList(props) {

  let navigate = useNavigate();

  const dispatch = useDispatch()

  const {priceRange, checkbox1, checkbox2, checkbox3, 
    checkbox4, checkbox5, checkbox6, checkbox7,
    checkbox8} = props

  const [currentPage, setCurrentPage] = useState(1);
  const elements = [...MonitorsItems];
  let filteredElements = [...elements];
  if (checkbox1 || checkbox2 || checkbox3) {
    filteredElements = filteredElements.filter(item => (
      (checkbox1 && item.brand === "Aoc") ||
      (checkbox2 && item.brand === "Asus") ||
      (checkbox3 && item.brand === "Dell")
    ));
  }
  if (checkbox4 || checkbox5 ) {
    filteredElements = filteredElements.filter(item => (
      (checkbox4 && item.curved === true) ||
      (checkbox5 && item.curved === false)  
    ));
  }

  if (checkbox6 || checkbox7 || checkbox8) {
    filteredElements = filteredElements.filter(item => (
      (checkbox6 && item.type === "IPS") ||
      (checkbox7 && item.type === "VA") ||
      (checkbox8 && item.type === "TN")
    ));
  }

 

  filteredElements = filteredElements.filter(item => item.price >= priceRange)

  if (filteredElements.length === 0) {
    return (
      <div className='text-red-600 bold font-bold'>
        <h1>Warning!!! No matching items found according to your filter</h1>
      </div>
    )
  }
  
 
  const elementsPerPage = 6;
  const totalPages = Math.ceil(filteredElements.length / elementsPerPage)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  

  const currentElements = filteredElements.slice((currentPage - 1) * elementsPerPage, currentPage * elementsPerPage);
  return (
    <>
    
    <div className='grid grid-cols-1 md:grid-cols-3 md:w-full lg:pl-20  gap-x-5'>

      {currentElements.map(item => {
        return (
          <div key={item.id} className=' border md:hover:border-slate-500 border-slate-300  mb-5 flex flex-col  items-center  rounded-xl   h-auto md:w-[220px] shadow-sm shadow-black'>
            <img src={item.image} onClick={() => navigate(`/monitors-detailed/${item.id}`)} className="cursor-pointer max-w-[390px]   md:w-[180px] mt-4 hover:scale-125 transition duration-300" />
            <div onClick={() => dispatch(add(item))} className='flex items-center cursor-pointer md:w-auto w-[390px] px-4 h-auto  relative md:h-[30px]  py-2 my-3 transition ease-in-out duration-100 shadow shadow-[#a8a1a1] hover:bg-[#ffc72c] rounded-full '>
              <BsCart3 className='mr-3' />
              <button className='text-[13px]  font-medium'>ADD TO CART</button>        
            </div>
            <div onClick={() => navigate(`/monitors-detailed/${item.id}`)} className='w-[400px] md:w-[180px] '>
              <p className='justify-center flex text-center hover:text-[#244c6e] hover:underline cursor-pointer '>{item.name}</p>
            </div>
            <div className='w-[400px] md:w-[180px]  my-5'>
              <p className='justify-center flex text-center '>{item.price}$</p>
            </div>
          </div> 
             
        )
      })}
      
    </div> 
    <div className='flex justify-center  gap-4'>
        <button 
          className={`px-4 py-2 bg-[#ffc72c] cursor-pointer ${currentPage === 1 && 'hover:cursor-not-allowed'} rounded-lg `}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}>
            Previous
        </button>
        <button
          className={`px-4 py-2 bg-[#ffc72c] cursor-pointer rounded-lg ${currentPage === totalPages && 'hover:cursor-not-allowed'}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}>
            Next
        </button>
      </div> 
    
    </>
  )
}

export default MonitorsList