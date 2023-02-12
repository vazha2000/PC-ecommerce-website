import React from 'react'
import {GrFacebook, GrInstagram, GrYoutube, GrTwitter} from 'react-icons/gr'

function Footer() {
  return (
    <div className='w-full h-auto bg-[#253746]   text-[#ffc72c] flex flex-col items-center'>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto md:w-[750px]  xl:w-[1240px] bg-[#253746]'>
      <div className='ml-3  mb-10 '>
        <h1 className='text-white mb-4'>Information</h1>
        <ul>
          <li className='cursor-pointer mb-2 text-[15px] hover:text-white transition duration-200 ease-in-out'>Privacy Policy</li>
          <li className='cursor-pointer text-[15px] hover:text-white transition duration-200 ease-in-out'>Product Warranties & Returns</li>
        </ul>
      </div>
      <div className='ml-3 text-[#ffc72c] mb-10  md:w-[1/2]'>
        <h1 className='text-white'>Locations</h1>
        <ul className='list-disc mt-5'>
          <li className='ml-4 mb-2 hover:text-white transition duration-200 ease-in-out'>Sokhumi, Shartava Ave. #1</li>
          <li className='ml-4 mb-2  hover:text-white transition duration-200 ease-in-out'>Tskhivnali, Shindisi Heroes' Ave. #1</li>
          <li className='ml-4 hover:text-white transition duration-200 ease-in-out'>Tbilisi, Rustaveli Ave. #10</li>
        </ul>
      </div>
      <div className='ml-3 '>
        <h1 className='text-white'>Contact Information</h1>
        <ul className='mt-5'>
          <li className='mb-2 hover:text-white transition duration-200 ease-in-out'>555 000 000</li>
          <li className='mb-2 hover:text-white transition duration-200 ease-in-out'>500 111 111</li>
          <li className='mb-2 hover:text-white transition duration-200 ease-in-out'>testpc@bbbb.com</li>
        </ul>
      </div>
      </div>
      <div className='w-full h-auto flex justify-center items-center gap-5 text-white py-10'>
        
          <GrFacebook className='hover:text-[#1877f2] cursor-pointer' size={22} />
          <GrInstagram className='hover:text-[#ee4a56] cursor-pointer' size={22}/>
          <GrYoutube className='hover:text-[#f70000] cursor-pointer' size={22}/>
          <GrTwitter className='hover:text-[#1c96e8] cursor-pointer' size={22}/> 
      </div>
      
      

    </div>
  )
}

export default Footer