import React from 'react'
import Beach1 from "../components/img/beach1.jpeg"
import Beach2 from "../components/img/beach2.jpeg"
import Beach3 from "../components/img/beach3.jpeg"
import Beach4 from "../components/img/beach4.jpeg"
import Beach5 from "../components/img/beach5.jpeg"



const Pic = () => {
  return (
    <div className='w-full cursor-pointer hover:text-blue-600'>
        <div className='w-full  flex  justify-center  '>
            <p className='p-4'>Booking Counter</p>
            <p className='p-4'>Competitive Rates</p>
            <p className='p-4'>Trip Insurance</p>
            <p className='p-4'>Book with Flexibility</p>
        </div>
      
        <div className=' max-w-full mx-auto py-12 px-4 grid lg:grid-cols-2 gap-4 pl-20 '>
          <div className='grid grid-cols-2 gap-20 items-center justify-evenly'>
          <div className='columns-2 gap-3  '>
          <img className='object-cover w-full h-full row-span-3 p-2'  src={Beach1} alt="/"/>
   <img  className='object-cover w-full h-[170px] p-2' src={Beach2} alt="/" />
   <img  className='object-cover w-full h-full  aspect-square p-2' src={Beach3} alt="/"/>
   <img  className='object-cover w-full h-full  aspect-square  p-2' src={Beach4} alt="/"/>
   <img  className='object-cover w-full h-full aspect-square  p-2 ' src={Beach5} alt="/"/>

          </div>
          <div className='flex flex-col justify-center w-[800px]  h-full'>
      <h1 className='text-3xl text-black font-bold'>Plan Your Next Trip</h1>
      <p className='text-2sm'>When will you go out side?</p>
      <p className='text-2sm'>So many beautiful places are here.It attracts the people from all countries.</p>
      <div className='mt-3'>
        <button className='text-black mr-5 w-[100px] h-[30px] border-2 border-gray-400 
                            rounded-l hover:shadow-xl bg-gray-200'>Learn More</button>
        <button className='text-black w-[150px] h-[30px] border-2 border-gray-900 
                            rounded-l hover:shadow-xl bg-gray-300'>Book Your Trip</button>
      </div>
    </div></div>
    </div>
 
        </div>
      

  )
}

export default Pic
