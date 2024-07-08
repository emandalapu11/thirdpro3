import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Food2 from './Food2';
import Food3 from './Food3';
import Food4 from './Food4';
import Food5 from './Food5';
import Food1 from './Food1'

const Carou = () => {
  return (
    <div className='mt-[80px] max-w-[1000px]  mx-auto'>
      <Carousel> 
      <Food1/>
        <Food2/>
        <Food3/>
        <Food4/>
        <Food5/>
      </Carousel>
   </div>
  )
}

export default Carou
