"use client"
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';


export default function Hamburger() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        <i className="bi bi-list"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className='shadow-sm' closeButton>
          <Offcanvas.Title>
            <div className='logo'>
              <img src='/images/logo.jpg' width={50} className='rounded-circle' />
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className='row text-center'>
            <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>דף הבית</Link>
            <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/neighborhoodInfo'}>מידע שכונתי</Link>
            <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/forum'}>פורומים</Link>
            <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>לכל המשפחה</Link>
            <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>נדלן</Link>
            <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>לוח</Link>
            <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>צור קשר</Link>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
