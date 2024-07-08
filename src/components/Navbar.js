import React,{useState} from 'react'
import Pexels from "../components/img/pexels.jpeg"
import { HiMenuAlt3 } from "react-icons/hi";


const Navbar = () => {
    const [nav,setNav]=useState(false)
const handclick=()=>{
  setNav(!nav);
}
  return (
    <div>
    <div className='w-full text-white p-4'>
    <div onClick={handclick}>
    {!nav ?
        <div className=' flex ms:max-w-[600] pl-20 relative '>
        <img  src={Pexels}
 alt="/" h="30" w="30"/> 
 <h1 className='absolute px-4'>Experiences</h1>
 <HiMenuAlt3 className=' absolute z-20 top-2 right-20'/>

 <h6 className='pl-[10%] w-[50%] mt-32 absolute'>All Inclusive</h6>
 <h6 className='pl-[10%] w-[50%] mt-36 absolute text-4xl pt-1'>Private Beaches & Getaways</h6>
 <p className='pl-[10%] mt-40 pt-6 w-[50%] absolute '>Adding images to the .navbar-brand will likely always 
  require custom styles or utilities to properly size. Here are some examples to demonstrate.</p>
  <button className=' w-[120px] h-[30px] bg-white rounded-xl flex 
  mt-64 absolute ml-60  pl-4 text-gray-600'>Reserve Now</button>
  
  
             </div>:
             <div className='w-full flex  relative text-white '>
<div className=' flex ms:max-w-[500] pl-20 relative '>
<h1 className='absolute z-20 px-4 '>Experiences</h1>
<HiMenuAlt3 className=' absolute z-20 top-2 right-20'/>
 <img  src={Pexels} className=' opacity-20'
alt="/" h="30" w="30"/> 


<h6 className='pl-[10%] w-[50%] mt-52 absolute'>All Inclusive</h6>
<h6 className='pl-[10%] w-[50%] mt-56 absolute text-4xl pt-3'>Private Beaches & Getaways</h6>
<p className='pl-[10%] mt-64 pt-7 w-[50%] absolute '>Adding images to the .navbar-brand will likely always 
 require custom styles or utilities to properly size. Here are some examples to demonstrate.</p>
<ul className=' absolute pl-[50%]  text-sm mt-40  z-30 text-gray-900 justify-between alignitems-center  '>
 <li className='p-2'>Home</li>
    <li className='p-2'>Destinations</li>
    <li className='p-2'>Reservations</li>
    <li className='p-2'>Rooms</li>
</ul></div></div>}</div></div>
      
    </div>
  )
}

export default Navbar
