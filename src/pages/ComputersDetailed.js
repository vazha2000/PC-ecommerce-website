import React, {useState} from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { ComputersItems } from './pagesHelpers/ComputersItems'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import {HiOutlineChevronDoubleRight, HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { add, increase, decrease } from '../components/state/slice/CartSlice'

function ComputersDetailed() {

  let {id} = useParams();
  const item = ComputersItems.filter(item => item.id === parseInt(id))[0];

  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);

  const [currentItemAmount, setCurrentItemAmount] = useState(1)

  

  const increaseQuantity = () => {
    setCurrentItemAmount(currentItemAmount + 1);
  };

  const decreaseQuantity = () => {
    if (currentItemAmount > 1) {
      setCurrentItemAmount(currentItemAmount - 1);
    }
  };

  const addToCart = () => {
    const itemInCart = cartItems.find(
      cartItem => cartItem.id === item.id
    );

    if (itemInCart) {
      for (let i = 0; i < currentItemAmount; i++) {
        dispatch(
          increase({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            amount: currentItemAmount
          })
        );
      }
    } else {
      dispatch(
        add({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          amount: currentItemAmount
        })
      );
    }
  };

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
        <Link to='/computers'>
          <span className='text-[14px] text-[#dfb238] cursor-pointer'>Computers</span>
        </Link>
      </div>
      <div className='flex lg:mx-[100px]'>
        <div className='w-full h-[450px] justify-center
          flex flex-col items-center  mx-6 
          border-[5px] border-[#f7f7f7] lg:w-1/2'>
          <img
          src={item.image}
          className='max-w-[390px]transform hover:scale-[1.15] transition-transform duration-300'
          />
        </div>
        <div className='hidden mt-2 lg:flex flex-col'>
          <div>
            <h1 className='font-semibold '>{item.name}</h1>
          </div>
          <div className='mt-5 '>
            <table className='w-full border-slate-300 border border-x-0'>
              <tbody className=''>
                <tr className='flex pt-3'>
                  <th className='w-[200px] justify-start flex'>Category:</th>
                  <td className='font-semibold text-gray-400 w-full'>Gaming Computers</td>
                </tr>
                <tr className='flex'>
                  <th className='w-[200px] justify-start flex'>Warranty:</th>
                  <td className='font-semibold text-gray-400 w-full'>24 months</td>
                </tr>
                <tr className='flex pb-3'>
                  <th className='w-[200px] justify-start flex'>Availability:</th>
                  <td className='font-semibold text-gray-400 w-full'>In Stock</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=' border-b border-slate-300 pb-5'>
            <div className='flex justify-between'>
              <div onClick={addToCart} className='mt-5 cursor-pointer
              transition ease-in-out duration-500  shadow-md shadow-[#a8a1a1] hover:text-[#253746] hover:bg-[#ffc72c]
            bg-gray-200 w-[160px] px-6 py-4 rounded-full justify-center relative flex items-center'>
                <HiOutlineShoppingBag size={20} className="mr-2"/>
                <button className=' font-medium text-[13px]'>ADD TO CART</button>
              </div>
              <div className='mt-5 w-[160px] h-[50px] flex items-center'>
                <div 
                  onClick={decreaseQuantity}
                  className='cursor-pointer h-[50px] rounded-l-full border w-[40px] flex justify-center items-center '>
                  <AiOutlineMinus />
                </div>
                  <div className=' bg-gray-200 flex justify-center items-center w-[90px] h-[50px]'>
                    <span>{currentItemAmount}</span>
                  </div> 
                <div 
                  onClick={increaseQuantity}
                  className=' cursor-pointer h-[50px] rounded-r-full border w-[40px] flex justify-center items-center'>
                  <AiOutlinePlus />
                </div>    
              </div>
            </div>
            <div className='mt-5'>
              <span>Price: {item.price}$</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-auto h-auto flex flex-col mx-6 lg:mx-[100px] my-3  mb-[100px]'>
        <div className='lg:hidden'>
          <h1 className='font-semibold '>{item.name}</h1>
        </div>
        <div className='mt-5 lg:hidden '>
          <table className='w-full border-slate-300 border border-x-0'>
            <tbody className=''>
              <tr className='flex pt-3'>
                <th className='w-[200px] justify-start flex'>Category:</th>
                <td className='font-semibold text-gray-400 w-full'>Gaming Computers</td>
              </tr>
              <tr className='flex'>
                <th className='w-[200px] justify-start flex'>Warranty:</th>
                <td className='font-semibold text-gray-400 w-full'>24 months</td>
              </tr>
              <tr className='flex pb-3'>
                <th className='w-[200px] justify-start flex'>Availability:</th>
                <td className='font-semibold text-gray-400 w-full'>In Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='lg:hidden border-b border-slate-300 pb-5'>
          <div className='flex justify-between'>
            <div onClick={addToCart} className='mt-5 cursor-pointer
            transition ease-in-out duration-500  shadow-md shadow-[#a8a1a1] hover:text-[#253746] hover:bg-[#ffc72c]
          bg-gray-200 w-[160px] px-6 py-4 rounded-full justify-center relative flex items-center'>
              <HiOutlineShoppingBag size={20} className="mr-2"/>
              <button className=' font-medium text-[13px]'>ADD TO CART</button>
            </div>
            <div className='mt-5 w-[160px] h-[50px] flex items-center'>
              <div 
                onClick={decreaseQuantity}
                className='cursor-pointer h-[50px] rounded-l-full border w-[40px] flex justify-center items-center '>
                <AiOutlineMinus />
              </div>
              <div className=' bg-gray-200 flex justify-center items-center w-[90px] h-[50px]'>
                <span>{currentItemAmount}</span>
              </div>
              <div 
                onClick={increaseQuantity}
                className=' cursor-pointer h-[50px] rounded-r-full border w-[40px] flex justify-center items-center'>
                <AiOutlinePlus />
              </div>    
            </div>
          </div>
          <div className='mt-5'>
            <span>Price: {item.price}$</span>
          </div>
        </div>
        <div className='mt-5 h-[45px] flex justify-center items-center bg-slate-200'>
          <div className='h-full border-b-[2px] border-[#253746] flex items-center'>
            <p className='font-medium text-[#253746]'>Description</p>
          </div>
        </div>
        <div className='mt-5 px-5 border border-slate-300'>
          <table className='w-full '>
            <tbody className='flex flex-col gap-3 py-3 '>
              <tr className='flex'>
                <th className='w-[300px] justify-start flex text-start'>Type/Model of Processor/Chipset </th>
                <td className='font-semibold flex items-center text-gray-700 w-full'>{item.cpu}</td>
              </tr>
              <tr className='flex'>
                <th className='w-[300px] justify-start flex text-start'>Number of Cores / Thread</th>
                <td className='font-semibold flex items-center text-gray-700 w-full'>{item.nOfCoresThread}</td>
              </tr>
              <tr className='flex'>
                <th className='w-[300px] justify-start flex text-start'>Motherboard</th>
                <td className='font-semibold flex items-center text-gray-700 w-full'>{item.mobo}</td>
              </tr>
              <tr className='flex'>
                <th className='w-[300px] justify-start flex text-start'>RAM</th>
                <td className='font-semibold flex items-center text-gray-700 w-full'>{item.ram}</td>
              </tr>
              <tr className='flex'>
                <th className='w-[300px] justify-start flex text-start'>Graphics Card</th>
                <td className='font-semibold flex items-center text-gray-700 w-full'>{item.gpu}</td>
              </tr>
              <tr className='flex'>
                <th className='w-[300px] justify-start flex text-start'>SSD Capacity</th>
                <td className='font-semibold flex items-center text-gray-700 w-full'>{item.ssd}</td>
              </tr>
              <tr className='flex'>
                <th className='w-[300px] justify-start flex text-start'>HDD Capacity</th>
                <td className='font-semibold flex items-center text-gray-700 w-full'>{item.hdd}</td>
              </tr>
              <tr className='flex'>
                <th className='w-[300px] justify-start flex text-start'>Power Supply</th>
                <td className='font-semibold flex items-center text-gray-700 w-full'>{item.pcu}</td>
              </tr>
              <tr className='flex'>
                <th className='w-[300px] justify-start flex text-start'>Case</th>
                <td className='font-semibold flex items-center text-gray-700 w-full'>{item.caseName}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}


export default ComputersDetailed