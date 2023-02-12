import React, {useState} from 'react'
import {BsCart3} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import {GrFormClose} from 'react-icons/gr'
import {FcUpRight} from 'react-icons/fc'
import { remove } from './state/slice/CartSlice'

function Navbar() {

  const {amount, cartItems} = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cartItems.map(item => item.price * item.amount).reduce((total, price) => total + price, 0);

  return (
    <>
    <div className="w-full h-[90px] bg-[#253746] text-white flex justify-between px-4 items-center relative">
      <Link to='/'>
        <div className='p-2  sm:m-4 md:ml-8 lg:ml-24  cursor-pointer text-[22px]'>TESTPC</div>
      </Link>      
      <div className='relative'>
        <input className='w-[200px] sm:w-[300px] md:w-[400px] lg:w-[450px] focus:outline-[#ffc72c] px-4 py-2 rounded-full text-[#253746]' 
        type='text' placeholder='Search'/>
        <button className='p-2 bg-[#ffc72c] hover:bg-[#f2bf30] ease-in duration-200 text-[#253746] rounded-full absolute right-0'>Search</button>
      </div>
      <div className='p-2 flex items-center gap-1 sm:mr-4 md:mr-8 lg:mr-24'>
        <motion.div
        animate={isOpen ? {scale: 1.1, rotate: -360} : {scale: 1.1, rotate: 360}}
        transition={{duration: 0.5}}
        onClick={() => setIsOpen(!isOpen)} className='cursor-pointer bg-red-500 p-2 relative rounded-full' >
          <BsCart3  size={20}/>
        </motion.div>
        <span className='hidden lg:flex'>
          {amount} item(s) - {totalPrice.toLocaleString()}$ 
        </span>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{height: 0}}
              animate={{height: 'auto'}}
              exit={{height: 0}}
              transition={{duration: 0.8}}
              className='w-[290px] overflow-hidden text-black items-center justify-start flex flex-col absolute top-[85px] right-[5%] lg:right-[9%] z-30 bg-white  border-[1px] border-b-0 shadow-sm shadow-black'>
              {cartItems.length === 0 ? (
                <>
                  <div className='h-[60px] flex items-center justify-center overflow-hidden'>
                    Your cart is empty
                  </div>
                </>
              ) : (
                <motion.div >
                  {cartItems.map(cartItem => {
                    return (
                      <>
                      <div
                        key={cartItem.id} className='w-full text-[14px] font-semibold  my-1 items-center justify-center gap-[45px] flex'>
                        <div className=''>
                          <img src={cartItem.image} className='w-[50px] ' />
                        </div>
                        <div>
                          <span>x{cartItem.amount}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <div>
                            <span>{cartItem.price.toLocaleString()} $</span>
                          </div>
                          <div onClick={() => dispatch(remove(cartItem))}>
                            <GrFormClose className='cursor-pointer' size={20}/>
                          </div>
                        </div>
                      </div>
                      </>
                    )
                  })}
                  <div className='w-full border border-x-0 border-gray-400 flex py-5 justify-end gap-10 pr-6'>
                    <div className='font-semibold'>
                      Total Price:
                    </div>
                    <div className='font-semibold text-blue-800'>
                      <span>{totalPrice.toLocaleString()}$</span>
                    </div>
                  </div>
                  <div className='w-full flex justify-end items-center py-3 pr-6 gap-2'>
                    <div >
                      <FcUpRight size={18} />
                    </div>
                    <Link to='/checkout'>
                      <p className='font-bold'>Checkout</p>
                    </Link>
                  </div>
                </motion.div>
              )}
              
            </motion.div>
          )}
       </AnimatePresence>
      </div>
    </div>
    </>
  )
}

export default Navbar