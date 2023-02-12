import React from 'react'
import {CardsItems} from '../helpers/CardsItems'
import sale from '../assets/sale-logo.png'
import { Link } from 'react-router-dom'


function CardsSlider() {
  return (
    <div className='w-full mt-10'>
      <div className=' h-[50px]  bg-[#f0eeee] flex items-center justify-center'>
        <p>Current Sales</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 mt-5'>
      {CardsItems.map(item => {
        return (    
          <div className='w-[180px] mx-auto h-auto border-[2px] flex flex-col relative hover:border-slate-400 border-slate-300 rounded-xl mb-5'>
              <div className='hover:scale-110 transition duration-300 ease-in-out'>
                <Link to={item.path}>
                  <img src={item.image} className="w-[160px] mx-auto mt-3  
                  transition ease-out duration-300"/>
                </Link>
                <img src={sale} className="w-[80px] absolute top-2"/>
              </div>        
            <div className='flex flex-col justify-center items-center mt-1   mx-auto'>
              <Link to={item.path}>
                <p className='text-[15px] hover:underline flex text-center mt-2'>{`${item.category === "notebook" && `Notebook: ${item.name}` || `${item.category === "monitor" && `Monitor: ${item.name}`}` }   `}</p>
              </Link>
              <div className='flex justify-between px-4 w-full'>
              <p className='text-[20px] text-decoration-line: line-through'>{item.price}</p>
              <p className='text-[20px] font-bold'>{item.newPrice}</p>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
    
  )
}

export default CardsSlider