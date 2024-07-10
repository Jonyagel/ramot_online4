"use client"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'



export default function AnimationTry() {

    useEffect(() => {
        AOS.init();
    },[]);
    

  return (
    <div data-aos="fade-right"  data-aos-duration="2000" className='bg-info w-25'>AnimationTry</div>
  )
}
