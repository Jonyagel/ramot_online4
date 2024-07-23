import React from 'react'
import StripCarousel from '../home/components/stripCarousel'
import CardCategory from './components/cardCategory'
import AcordionShops from './components/acordionShops'
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function NeighborhoodInfo() {
    return (
        <div className='container'>
            <StripCarousel />
            <CardCategory />
           <AcordionShops />
        </div>
    )
}
