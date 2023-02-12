import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {HiOutlineChevronDoubleRight} from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import {HiPlusSm, HiMinusSm} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'
import { increase, decrease, remove } from '../components/state/slice/CartSlice'


function Checkout() {

  const {amount, cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.map(item => item.price * item.amount).reduce((total, price) => total + price, 0);


  return (
    <>
    <div>
      <Navbar />
      <Categories />
      <div className='w-auto h-[40px] gap-2 mt-3 mx-6 lg:mx-[100px] border-t border-b border-slate-400 mb-9 flex items-center justify-center md:justify-start lg:px-2'>
        <Link to='/'>
          <FaHome className='cursor-pointer hover:text-[#dfb238]' size={13} />
        </Link> 
        <HiOutlineChevronDoubleRight size={13}/>
        <span className='text-[14px] text-[#dfb238] cursor-pointer'>Checkout</span>
      </div>
      <div className='overflow-x-auto mx-6 lg:mx-[100px] mb-[100px] '>
        <table className='table-auto  lg:w-full w-[1000px]'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='px-4 py-2 border border-gray-400'>Image</th>
              <th className='px-4 py-2 border border-gray-400'>Name</th>
              <th className='px-4 py-2 border border-gray-400'>Quantity</th>
              <th className='px-4 py-2 border border-gray-400'>Remove</th>
              <th className='px-4 py-2 border border-gray-400'>Unit Price</th>
              <th className='px-4 py-2 border border-gray-400'>Total</th>
            </tr>
          </thead>
          {cartItems.map(cartItem => {
            return (
            <tbody>
              <tr className='bg-gray-100 text-center'>
                <td className='border border-gray-400 px-4 py-2 w-[100px]'>
                  <img src={cartItem.image}/>
                </td>
                <td className='border border-gray-400  px-4 py-2'>{cartItem.name}</td>
                <td className='border border-gray-400 px-4 py-2'>
                  <div className='flex gap-2 justify-around items-center'>
                    <button
                    disabled={cartItem.amount === 1}
                    onClick={() => dispatch(decrease(cartItem))} className='bg-[#253746] cursor-pointer text-white p-1 rounded-full'>
                      <HiMinusSm size={20} />
                    </button>
                    <div>{cartItem.amount === 0 ?  cartItem.amount === 1 : cartItem.amount }</div>
                    <button onClick={() => dispatch(increase(cartItem))} className='bg-[#253746] cursor-pointer text-white p-1 rounded-full'>
                      <HiPlusSm size={20} />
                    </button>
                  </div>
                </td>
                <td className='border border-gray-400 px-4 py-2'>
                  <div className='flex items-center justify-center'>
                    <button onClick={() => dispatch(remove(cartItem))}>
                      <GrClose size={20} />
                    </button>
                  </div>
                </td>
                <td className='border border-gray-400 px-4 py-2'>{cartItem.price.toLocaleString()}$</td>
                <td className='border border-gray-400 px-4 py-2'>{(cartItem.price * cartItem.amount).toLocaleString()}$</td>
              </tr>
          </tbody>
            )
          })}
          
        </table>
      </div>
    </div>
    </>
  )
}

export default Checkout