import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {FaHome} from 'react-icons/fa'
import {HiOutlineChevronDoubleRight} from 'react-icons/hi'
import black_case from '../assets/black-case.png'
import ComputersFiltersResp from './pagesHelpers/ComputersFiltersResp'
import { Link } from 'react-router-dom'


function Computers() {


  return (
    <div>
      <Navbar />
      <Categories />
      <div className='w-auto h-[40px] gap-2 mt-3 mx-6 lg:mx-[100px] border-t border-b border-slate-400 mb-9 flex items-center justify-center md:justify-start lg:px-2'>
        <Link to='/'>
          <FaHome className='cursor-pointer hover:text-[#dfb238]' size={13} />
        </Link> 
        <HiOutlineChevronDoubleRight size={13}/>
        <span className='text-[14px] text-[#dfb238] cursor-pointer'>Computers</span>
      </div>
      <div className=' w-auto h-auto mx-6 lg:mx-[100px]'>
      <div>
        <h1 className='font-bold text-[25px] tracking-wide'>COMPUTERS</h1>
      </div>
      <div className='md:flex gap-5 items-center'>
        <img src={black_case} className="w-[80px]" />
        <p className='font-medium'>Find the computer you want and enjoy the quality</p>
      </div>
      </div>
      <div className='w-full gap-4 flex pt-5   h-auto  pb-10'> 
        <div className='w-screen flex flex-col justify-center'>
          <ComputersFiltersResp />
        </div>        
      </div>
      <Footer />
        
    </div>
  )
}

export default Computers