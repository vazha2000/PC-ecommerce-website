import React from 'react'
import {HiOutlineChevronDoubleRight, HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, add } from '../../components/state/slice/CartSlice'


function ComputersAddToCart() {

  const {amount, cartItems} = useSelector(state => state.cart);

  const dispatch = useDispatch();

  return (
    <>
      <div>
            <div className='flex justify-between'>
              <div onClick={() => dispatch(add(cartItems))} className='mt-5 cursor-pointer
              transition ease-in-out duration-500  shadow-md shadow-[#a8a1a1] hover:text-[#253746] hover:bg-[#ffc72c]
            bg-gray-200 w-[160px] px-6 py-4 rounded-full justify-center relative flex items-center'>
                <HiOutlineShoppingBag size={20} className="mr-2"/>
                <button  className='font-medium text-[13px]'>ADD TO CART</button>
              </div>
              <div className='mt-5 w-[160px] h-[50px] flex items-center'>
                <div 
                  onClick={() => dispatch(decrease(cartItems))}
                  className='cursor-pointer h-[50px] rounded-l-full border w-[40px] flex justify-center items-center '>
                  <AiOutlineMinus />
                </div>
                    <div className=' bg-gray-200 flex justify-center items-center w-[90px] h-[50px]'>
                      <span>{amount}</span>
                    </div>
                <div 
                  onClick={() => dispatch(increase(cartItems))}
                  className=' cursor-pointer h-[50px] rounded-r-full border w-[40px] flex justify-center items-center'>
                  <AiOutlinePlus />
                </div>    
              </div>
            </div>
            {cartItems.map(cartItem => {
              return (
                <div className='mt-5'>
                  <span>{cartItem.price}</span>
                </div>
              )
            })}
            
      </div>           
    </>
  )
}

export default ComputersAddToCart