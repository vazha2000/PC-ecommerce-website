import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import {FaHome} from 'react-icons/fa'
import {HiOutlineChevronDoubleRight} from 'react-icons/hi'
import laptop from '../assets/laptop-default.png'
import NotebooksFiltersResp from '../pages/pagesHelpers/NotebooksFiltersResp'
import { Link } from 'react-router-dom'

function Notebooks() {
  return (
    <div>
      <Navbar />
      <Categories />
      <div className='w-auto h-[40px] gap-2 mt-3 mx-6 lg:mx-[100px] border-t border-b border-slate-400 mb-9 flex items-center justify-center md:justify-start lg:px-2'>
        <Link to='/'>
          <FaHome className='cursor-pointer hover:text-[#dfb238]' size={13} />
        </Link>       
        <HiOutlineChevronDoubleRight size={13}/>
        <span className='text-[14px] text-[#dfb238] cursor-pointer'>Notebooks</span>
      </div>
      <div className=' w-auto h-auto mx-6 lg:mx-[100px]'>
      <div>
        <h1 className='font-bold text-[25px] tracking-wide'>NOTEBOOKS</h1>
      </div>
      <div className='md:flex gap-5 items-center'>
        <img src={laptop} className="w-[80px]" />
        <p className='font-medium'>Find the Notebook you want and enjoy the quality</p>
      </div>
      </div>
      <div className='w-full gap-4 flex pt-5   h-auto  pb-10'> 
        <div className='w-screen flex flex-col justify-center'>
          <NotebooksFiltersResp />
        </div>        
      </div>
        
    </div>
  )
}

export default Notebooks