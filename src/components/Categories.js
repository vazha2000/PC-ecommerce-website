import React, {useState} from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import {TiPlus, TiMinus} from 'react-icons/ti'
import CategoriesList from '../helpers/CategoriesList'
import CategoriesListsMain from '../helpers/CategoriesListsMain'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Categories() {

  const [click, setClick] = useState(false)
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <>
    <div className='w-[full] h-[45px] bg-slate-400 flex items-center relative'>
      <div className='lg:hidden'>
        <button  className='mt-2'>
          <RxHamburgerMenu onClick={() => setOpen(!open)} size={25}/>
        </button>       
      </div>
      <div className='hidden lg:h-full lg:flex items-center lg:w-full  mx-[100px]'>
       <ul className='flex w-full gap-20 mx-3'>
        <li
        className='font-bold text-yellow-400 cursor-pointer'
        onClick={() => setClick(!click)}>Categories</li>
        <li className='hover:text-yellow-400 hover:cursor-pointer'>Purchase</li>
        <li className='hover:text-yellow-400 hover:cursor-pointer'>Delivery</li>
        <li className='hover:text-yellow-400 hover:cursor-pointer'>For Your Business</li>
        <li className='hover:text-yellow-400 hover:cursor-pointer'>Contact</li>
       </ul>
      </div>
      <AnimatePresence>
      {click && (
        <motion.div 
        initial={{height: 0}}
        animate={{height: 'auto'}}
        exit={{height: 0}}
        transition={{duration: 0.8}}
        className='absolute hidden left-[100px] top-[45px] w-[250px] overflow-hidden text-black items-center justify-start lg:flex flex-col z-30 bg-white  border-[1px] border-b-0 shadow-sm shadow-black'>         
            <CategoriesListsMain />
      </motion.div>
      )}
      </AnimatePresence>
    </div>
    <AnimatePresence>
    {open && ( 
      <motion.div 
      initial={{x: -320}}
      animate={{x: 0}}
      exit={{x: -320}}
      transition={{duration: 0.5}}
      className='bg-gray-100 w-[300px] h-screen absolute top-0 lg:hidden z-50 '>
        <div className='w-full h-[40px] flex items-center justify-between px-3  bg-yellow-600'>
          <div className='h-full flex items-center font-bold text-white'>
            CATEGORIES
          </div>
          <div className='h-full text-red-100 w-[30px] flex items-center justify-center'>
            <AiOutlineClose onClick={handleOpen} size={25} className='cursor-pointer'/>
          </div>
        </div>
        <div className='w-full  px-3 flex items-center justify-between'>
          <div className='font-[600] my-2 text-yellow-600'>
            Categories
          </div>
          <div onClick={handleShow} className='cursor-pointer hover:text-yellow-600'>
            {show ? (
            <motion.div
            animate={show && {scale: 1.1, rotate: -360}}
            transition={{duration: 0.5}}
            >
              <TiMinus />
            </motion.div>) : (
            <motion.div
            animate={!show && {scale: 1.1, rotate: 360}} 
            transition={{duration: 0.9}}
            >
              <TiPlus />
            </motion.div>)}
          </div>
        </div>
        <AnimatePresence>
          {show && (
            <motion.div
              initial={{height: 0}}
              animate={{height: 'auto'}}
              exit={{height: 0}}
              transition={{duration: 0.8}}
              className='w-full overflow-hidden'>
             <CategoriesList />
           </motion.div>
          )} 
        </AnimatePresence>  
        <div className='w-full '>
          <ul className='px-3 flex flex-col gap-2 text-[14px]'>
            <li className='hover:text-[#b17a37] hover:cursor-pointer'>Purchase</li>
            <li className='hover:text-[#b17a37] hover:cursor-pointer'>Delivery</li>
            <li className='hover:text-[#b17a37] hover:cursor-pointer'>For Your Business</li>
            <li className='hover:text-[#b17a37] hover:cursor-pointer'>Contact</li>
          </ul>
        </div>
    </motion.div>
    )}
    </AnimatePresence>
    
    </>
  )
}

export default Categories