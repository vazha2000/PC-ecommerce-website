import React, {useState} from 'react'
import MonitorsList from './MonitorsList';

function MonitorsFiltersResp() {
  const [priceRange, setPriceRange] = useState(0);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);


  const handleCkechboxChange = (event, setCheckbox) => {
    setCheckbox(event.target.checked)
  }

  

  const handlePriceRangeChange = event => {
    setPriceRange(event.target.value);
  };
  return (
    <>
      <div>
        <div className='flex flex-col'> 
          <div className='w-auto flex  justify-center mx-10 '>
            <div className=' hidden lg:ml-2 lg:flex lg:flex-col lg:w-1/5 w-full '>
              <div className="relative mb-2  hidden lg:flex flex-col ">
                  <label className="block mb-2 py-2 border-y-gray-400 border border-x-0">
                  <p className='px-4'>Price Range: 1$ - 2100$</p>
                  <input 
                    type="range" 
                    min="0" 
                    max="2100" 
                    className="w-full mt-3"
                    value={priceRange}
                    onChange={handlePriceRangeChange}/>
                  <div>
                    <h1>{priceRange}</h1>
                  </div>
                </label>
              </div>
              <div className='lg:flex flex-col hidden'>
                <p className='border-b-gray-400 pb-2 border border-x-0 border-t-0 px-4'>Brands</p>
                <div className='flex'>
                  <input 
                  type="checkbox"
                  className=''
                  checked={checkbox1}
                  onChange={(e) => handleCkechboxChange(e, setCheckbox1)}
                  name="Intel Core i3"
                  />
                  <label className='ml-2'>AOC</label>
                </div>
                <div className='flex'>
                  <input 
                  type="checkbox"
                  className=''
                  checked={checkbox2}
                  onChange={(e) => handleCkechboxChange(e, setCheckbox2)}
                  />
                  <label className='ml-2'>Asus</label>
                </div>
                <div className='flex'>
                  <input 
                  type="checkbox"
                  className=''
                  checked={checkbox3}
                  onChange={(e) => handleCkechboxChange(e, setCheckbox3)}  
                  />
                  <label className='ml-2'>Dell</label>
                </div>
              </div>
              <div className='lg:flex flex-col hidden'>
                <p className='border-y-gray-400 py-2 border border-x-0 px-4'>Curved Monitor</p>
                <div className='flex'>
                  <input 
                  type="checkbox"
                  className=''
                  checked={checkbox4}
                  onChange={(e) => handleCkechboxChange(e, setCheckbox4)}             
                  />
                  <label className='ml-2'>Yes</label>
                </div>
                <div className='flex'>
                  <input 
                  type="checkbox"
                  className=''
                  checked={checkbox5}
                  onChange={(e) => handleCkechboxChange(e, setCheckbox5)}              
                  />
                  <label className='ml-2'>No</label>
                </div>
              </div>
              <div className='lg:flex flex-col hidden'>
                <p className='border-y-gray-400 py-2 border border-x-0 px-4'>Screen/Panel Type</p>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox6}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox6)}             
                  />
                  <label className='ml-2'>IPS</label>
                </div>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox7}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox7)}             
                  />
                  <label className='ml-2'>VA</label>
                </div>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox8}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox8)}             
                  />
                  <label className='ml-2'>TN</label>
                </div>
              </div>
            </div>
            <div className='lg:w-4/5'>
              <MonitorsList priceRange={priceRange} checkbox1={checkbox1} 
              checkbox2={checkbox2} checkbox3={checkbox3} 
              checkbox4={checkbox4} checkbox5={checkbox5} 
              checkbox6={checkbox6} checkbox7={checkbox7}
              checkbox8={checkbox8} 

              />
            </div>    
          </div>        
          <div className='pb-2'>
            <div className=' flex px-4  h-[40px] my-3 lg:hidden bg-slate-200 items-center'>
              <p className='text-[15px]'>Refine Search</p>
            </div>    
          </div> 
        </div>
        <div className="relative mb-2 lg:hidden ">
          <label className="block mb-2 py-2 border-y-gray-400 border border-x-0">
            <p className='px-4'>Price Range: 1$ - 6000$</p>
            <input 
              type="range" 
              min="0" 
              max="6000" 
              className="w-full mt-3"
              value={priceRange}
              onChange={handlePriceRangeChange}/>
              <div>
                <h1>{priceRange}</h1>
              </div>
          </label>
        </div>
        <div className='flex flex-col lg:hidden'>
          <p className='border-b-gray-400 pb-2 border border-x-0 border-t-0 px-4'>Brands</p>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox1}
              onChange={(e) => handleCkechboxChange(e, setCheckbox1)}
              name="Intel Core i3"
            />
            <label className='ml-2'>AOC</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox2}
              onChange={(e) => handleCkechboxChange(e, setCheckbox2)}
            />
            <label className='ml-2'>Asus</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox3}
              onChange={(e) => handleCkechboxChange(e, setCheckbox3)}
              
            />
            <label className='ml-2'>Dell</label>
          </div>
        </div>
        <div className='flex flex-col lg:hidden'>
          <p className='border-y-gray-400 py-2 border border-x-0 px-4'>Curved Monitor</p>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox4}
              onChange={(e) => handleCkechboxChange(e, setCheckbox4)}             
            />
            <label className='ml-2'>Yes</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox5}
              onChange={(e) => handleCkechboxChange(e, setCheckbox5)}              
            />
            <label className='ml-2'>No</label>
          </div>
        </div>
        <div className='flex flex-col lg:hidden'>
          <p className='border-y-gray-400 py-2 border border-x-0 px-4'>Screen/Panel Type</p>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox6}
              onChange={(e) => handleCkechboxChange(e, setCheckbox6)}             
            />
            <label className='ml-2'>IPS</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox7}
              onChange={(e) => handleCkechboxChange(e, setCheckbox7)}             
            />
            <label className='ml-2'>VA</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox8}
              onChange={(e) => handleCkechboxChange(e, setCheckbox8)}             
            />
            <label className='ml-2'>TN</label>
          </div>
        </div>
      </div>
      
    
    

    </>
  )
}

export default MonitorsFiltersResp