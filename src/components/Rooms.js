import React from 'react'
import room1 from "../components/img/room1.jpeg"
import room2 from "../components/img/room2.jpeg"
import room3 from "../components/img/room3.jpeg"

const Rooms = () => {
  return (
    <div>
      <div className='max-w-[1010px] h-[250px] bg-blue-200 mx-auto items-center flex'>
        <div className='grid grid-cols-2 gap-3 sm:text-[10px]'>
        <div className='  text-black  pl-5 mx-auto pt-[90px] '>
            <h1 className='font-bold'>Fine Interior Rooms</h1>
            <p>The standard hotel room amenities may vary depending on the hotel's rating and location,
                 but typically include a bed and linens, bathroom with towels and toiletries,
                  television, telephone,  kettle and air conditioning.</p></div>
      
        <div className='columns-2 gap-1 z-10 top-5 right-20 pt-20'>
            <img src={room2}/><img src={room1}  className='pt-2 w-[215px]'/><
                img src={room3} className='w-[200px] h-[301px]'/>   

        </div>  </div>
      </div>
    </div>
  )
}

export default Rooms
