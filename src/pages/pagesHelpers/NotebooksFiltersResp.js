import React, {useState} from 'react'
import NotebooksList from './NotebooksList';



function ComputersFiltersResp() {

  const [priceRange, setPriceRange] = useState(0);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [checkbox6, setCheckbox6] = useState(false);
  const [checkbox7, setCheckbox7] = useState(false);
  const [checkbox8, setCheckbox8] = useState(false);
  const [checkbox9, setCheckbox9] = useState(false);
  const [checkbox10, setCheckbox10] = useState(false);
  const [checkbox11, setCheckbox11] = useState(false);
  const [checkbox12, setCheckbox12] = useState(false);
  const [checkbox13, setCheckbox13] = useState(false);
  const [checkbox14, setCheckbox14] = useState(false);
  const [checkbox15, setCheckbox15] = useState(false);


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
                  <label className='ml-2'>Apple</label>
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
                <div className='flex'>
                  <input 
                  type="checkbox"
                  className=''
                  checked={checkbox4}
                  onChange={(e) => handleCkechboxChange(e, setCheckbox4)}
                  />
                  <label className='ml-2'>MSI</label>
                </div>
              </div>
              <div className='lg:flex flex-col hidden'>
                <p className='border-y-gray-400 py-2 border border-x-0 px-4'>Processor</p>
                <div className='flex'>
                  <input 
                  type="checkbox"
                  className=''
                  checked={checkbox5}
                  onChange={(e) => handleCkechboxChange(e, setCheckbox5)}             
                  />
                  <label className='ml-2'>Apple</label>
                </div>
                <div className='flex'>
                  <input 
                  type="checkbox"
                  className=''
                  checked={checkbox6}
                  onChange={(e) => handleCkechboxChange(e, setCheckbox6)}              
                  />
                  <label className='ml-2'>Intel</label>
                </div>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox7}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox7)} 
                  />
                  <label className='ml-2'>AMD Ryzen</label>
                </div>
              </div>
              <div className='lg:flex flex-col hidden'>
                <p className='border-y-gray-400 py-2 border border-x-0 px-4'>RAM</p>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox8}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox8)}             
                  />
                  <label className='ml-2'>8GB</label>
                </div>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox9}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox9)}             
                  />
                  <label className='ml-2'>16GB</label>
                </div>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox10}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox10)}             
                  />
                  <label className='ml-2'>32GB</label>
                </div>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox11}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox11)}             
                  />
                  <label className='ml-2 '>64GB</label>
                </div>
              </div>
              <div className='lg:flex flex-col hidden'>
                <p className='border-y-gray-400 py-2 border border-x-0 px-4'>SSD CAPACITY</p>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox12}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox12)}             
                  />
                  <label className='ml-2'>256GB</label>
                </div>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox13}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox13)}             
                  />
                  <label className='ml-2'>512GB</label>
                </div>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox14}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox14)}             
                  />
                  <label className='ml-2'>1TB</label>
                </div>
                <div className='flex'>
                  <input 
                    type="checkbox"
                    className=''
                    checked={checkbox15}
                    onChange={(e) => handleCkechboxChange(e, setCheckbox15)}             
                  />
                  <label className='ml-2'>2TB</label>
                </div>
              </div>
            </div>
            <div className='lg:w-4/5'>
              <NotebooksList priceRange={priceRange} checkbox1={checkbox1} 
              checkbox2={checkbox2} checkbox3={checkbox3} 
              checkbox4={checkbox4} checkbox5={checkbox5} 
              checkbox6={checkbox6} checkbox7={checkbox7}
              checkbox8={checkbox8} checkbox9={checkbox9} 
              checkbox10={checkbox10} checkbox11={checkbox11}
              checkbox12={checkbox12} checkbox13={checkbox13}
              checkbox14={checkbox14} checkbox15={checkbox15}

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
            <label className='ml-2'>Apple</label>
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
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox4}
              onChange={(e) => handleCkechboxChange(e, setCheckbox4)}
            />
            <label className='ml-2'>MSI</label>
          </div>
        </div>
        <div className='flex flex-col lg:hidden'>
          <p className='border-y-gray-400 py-2 border border-x-0 px-4'>Processor</p>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox5}
              onChange={(e) => handleCkechboxChange(e, setCheckbox5)}             
            />
            <label className='ml-2'>Apple</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox6}
              onChange={(e) => handleCkechboxChange(e, setCheckbox6)}              
            />
            <label className='ml-2'>Intel</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox7}
              onChange={(e) => handleCkechboxChange(e, setCheckbox7)} 
            />
            <label className='ml-2'>AMD Ryzen</label>
          </div>
        </div>
        <div className='flex flex-col lg:hidden'>
          <p className='border-y-gray-400 py-2 border border-x-0 px-4'>RAM</p>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox8}
              onChange={(e) => handleCkechboxChange(e, setCheckbox8)}             
            />
            <label className='ml-2'>8GB</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox9}
              onChange={(e) => handleCkechboxChange(e, setCheckbox9)}             
            />
            <label className='ml-2'>16GB</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox10}
              onChange={(e) => handleCkechboxChange(e, setCheckbox10)}             
            />
            <label className='ml-2'>32GB</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox11}
              onChange={(e) => handleCkechboxChange(e, setCheckbox11)}             
            />
            <label className='ml-2'>64GB</label>
          </div>
        </div>
        <div className='flex flex-col lg:hidden'>
        <p className='border-y-gray-400 py-2 border border-x-0 px-4'>SSD CAPACITY</p>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox12}
              onChange={(e) => handleCkechboxChange(e, setCheckbox12)}             
            />
            <label className='ml-2'>256GB</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox13}
              onChange={(e) => handleCkechboxChange(e, setCheckbox13)}             
            />
            <label className='ml-2'>512GB</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox14}
              onChange={(e) => handleCkechboxChange(e, setCheckbox14)}             
            />
            <label className='ml-2'>1TB</label>
          </div>
          <div className='flex'>
            <input 
              type="checkbox"
              className=''
              checked={checkbox15}
              onChange={(e) => handleCkechboxChange(e, setCheckbox15)}             
            />
            <label className='ml-2'>2TB</label>
          </div>
        </div>
        
      </div>
      
    
    

    </>
  )
}

export default ComputersFiltersResp