import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaDribbbleSquare } from "react-icons/fa";

const Footer = () => {

  return (
    <div className='max-w-[1000px] bg-gray-900 text-white mx-auto pb-10 '>
      <div className='grid grid-cols-2 gap-10 '>
            <div className="grid grid-cols-4 gap-6 pl-20 pt-10 ">
              <div>
                <h1 className='text-l font-bold'>Solutions</h1>
                <ul className='text-[14px] mt-2'>
                  <li>Travel</li>
                  <li>Flights</li>
                  <li>Cruises</li>
                  <li>Booking </li>
                  <li>Ground</li>
                </ul>
              </div>
                 <div>
                <h1 className='text-l font-bold'>Company</h1>
                <ul className='text-[14px] mt-2'> 
                  <li>About</li>
                  <li>Blog</li>
                  <li>Jobs</li>
                  <li>Press</li>
                  <li>Partners</li>
                </ul>
              </div>
                  <div>
                <h1 className='text-l font-bold'>Support</h1>
                <ul className='text-[14px] mt-2'> 
                  <li>pricing</li>
                  <li>documents</li>
                  <li>refunds</li>
                  <li>tours</li>
                </ul>
              </div>
                  <div>
                <h1 className='text-l font-bold'>Legal</h1>
                <ul className='text-[14px] mt-2'> 
                  <li>cliams</li>
                  <li>privacy</li>
                  <li>terms</li>
                  <li>conditions</li>
                  <li>policies</li>
                </ul>
              </div> </div>
              <div className='w-[400px] pt-10 '>
                <h1 className='text-l font-bold uppercase'>Subscribe to our newsletters</h1>
                <p className='text-[14px] mt-2'>The latest deals,articles and resources sent to your 
                  email weekly.</p>
                <form className='flex'>
                  <input type="email" className='block rounded-l mt-2 pl-2 mr-2' placeholder='Enter Email'/>
                  <button className='mt-2 w-[100px] h-5px bg-gray-500 rounded-l '>Subscribe</button>
                   </form>
                </div></div>
                <div className='m-2 max-w-[1000px] grid grid-cols-2 justify-between border-t-2 border-gray-700'>
                  <div className='pl-2'>
                    <h1>2022 Experiences , LLC. All rights reserved</h1>
                  </div>
                  <div className='flex  gap-2 justify-end pr-4 mt-2'>
                <FaGithub />
                <FaTwitter />
                <FaFacebookF />
                <RiInstagramFill />
                <FaDribbbleSquare /> </div>
                  </div></div>
                  
               
        
        
  )
}

export default Footer
