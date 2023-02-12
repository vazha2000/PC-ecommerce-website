import React, {useState} from 'react'
import  {CategoriesItems}  from './CategoriesItems';
import {BsChevronRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';



function CategoriesListsMain() {
  return (
    <div className='bg-slate-100'>
      {CategoriesItems.map(items => {
        return <div className='w-[250px] h-[50px] flex flex-col justify-center hover:bg-slate-300'>
          <Link to={items.path}>
            <div className='flex justify-between w-full'>
              <div className='flex items-center'>
                <img className='w-[30px] mx-2' src={items.image}/> 
                  <span>{items.name}</span>       
              </div> 
            </div>
        </Link>
      </div>
      })}
    </div>
  )
}

export default CategoriesListsMain