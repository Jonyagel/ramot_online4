"use client"
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';


export default function StripCarousel() {
    return (
        <div className='container strip'>
            <div className='mt-2' >
            <Carousel className='w-75 rounded shadow mx-auto' >
                <Carousel.Item>
                    <img src='/images/strip/neighborhood1.jpg' className='d-block w-100 rounded' style={{height:"50vh" }}></img>
                    <Carousel.Caption className='bg-light bg-opacity-50 rounded text-dark'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/images/strip/neighborhood2.jpg' className='d-block w-100 rounded' style={{height:"50vh"}}></img>
                    <Carousel.Caption className='bg-light bg-opacity-50 rounded text-dark'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/images/strip/neighborhood3.jpg' className='d-block w-100 rounded' style={{height:"50vh"}}></img>

                    <Carousel.Caption className='bg-light bg-opacity-50 rounded text-dark'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    )
}
