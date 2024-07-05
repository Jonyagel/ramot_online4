import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'


export default function Header() {
    return (
        <div className='bg-light sticky-top'>
            <div className=' d-flex container justify-content-between p-3'>
                <Link href={"/login"}><button className='btn btn-dark'>כניסה/הרשמה</button></Link>
                <nav className='d-flex align-items-center'>
                    <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>דף הבית</Link>
                    <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>מידע שכונתי</Link>
                    <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/forum'}>פורומים</Link>
                    <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>לכל המשפחה</Link>
                    <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>נדלן</Link>
                    <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>לוח</Link>
                    <Link className='mx-3 text-dark link-underline link-underline-opacity-0' href={'/'}>צור קשר</Link>
                </nav>
                <div className='logo bg-info'>
                    logo
                </div>
            </div>
            <Marquee className='bg-dark text-light' pauseOnHover={true} direction='right' autoFill={true} style={{ direction: 'ltr' }}>
               בסדר מצוין שלום מה קורה
            </Marquee>
        </div>
    )
}
