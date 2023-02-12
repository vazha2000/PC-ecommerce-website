import React, {useState} from 'react'
import {ComputersItems} from './ComputersItems'
import {BsCart3} from 'react-icons/bs'

function ComputersList({priceRange, checkbox1, checkbox2, checkbox3, checkbox4}) {

  const [currentPage, setCurrentPage] = useState(1);
  const elements = [...ComputersItems];
  let filteredElements = [...elements];
  if (checkbox1) {
    filteredElements = filteredElements.filter(item => item.cpuGen === "Intel Core i3");
  }
  if (checkbox2) {
    filteredElements = filteredElements.filter(item => item.cpuGen === "Intel Core i5");
  }
  if (checkbox3) {
    filteredElements = filteredElements.filter(item => item.cpuGen === "Intel Core i7");
  }
  if (checkbox4) {
    filteredElements = filteredElements.filter(item => item.cpuGen === "Intel Core i9");
  }
  filteredElements = filteredElements.filter(item => item.price >= priceRange)
 
  const elementsPerPage = 6;
  const totalPages = Math.ceil(filteredElements.length / elementsPerPage)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }

  

  const currentElements = filteredElements.slice((currentPage - 1) * elementsPerPage, currentPage * elementsPerPage);
  
  
  
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 md:w-full gap-x-10 '>

      {currentElements.map(item => {
        return (
          <div key={item.id} className=' border border-slate-300  mb-5 flex flex-col  items-center  rounded-xl   h-auto md:w-[220px] shadow-sm shadow-black'>
            <img src={item.image} className="max-w-[390px]   md:w-[180px] mt-4 bg-yellow-500" />
            <div className='flex items-center cursor-pointer md:w-auto w-[390px] px-4 h-auto  relative md:h-[30px]  py-2 my-3 transition ease-in-out duration-100 shadow shadow-[#a8a1a1] hover:bg-[#ffc72c] rounded-full '>
              <BsCart3 className='mr-3' />
              <button className='text-[13px]  font-medium'>ADD TO CART</button>        
            </div>
            <div className='w-[400px] md:w-[180px] '>
              <p className='justify-center flex text-center '>{item.name}</p>
            </div>
            <div className='w-[400px] md:w-[180px]  my-5'>
              <p className='justify-center flex text-center '>{item.price}</p>
              <p>{priceRange}</p>
            </div>
          </div> 
             
        )
      })}
      <div className='flex justify-center md:justify-start gap-4'>
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
    </div>    
    </>
  )
}

export default ComputersList