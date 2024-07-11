

import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import axios from 'axios';
import AddQuestion from './components/addQuestion';
import Link from 'next/link';


export const dynamic = 'auto';

export default async function Forum() {

    let forum_ar



    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/forum`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    forum_ar = data;



    const formatPostAgo = (date: number): string => {
        const timePosted = Date.now() - date;
        const minutesAgo = Math.floor(timePosted / (1000 * 60));
        if (minutesAgo < 1) return "עכשיו";
        if (minutesAgo < 60) return `לפני ${minutesAgo} דקות`;
        const hoursAgo = Math.floor(minutesAgo / 60);
        if (hoursAgo < 24) return `לפני ${hoursAgo} שעות`;
        const daysAgo = Math.floor(hoursAgo / 24);
        return `לפני ${daysAgo} ימים`;
    }


    return (
        <div className='container'>

            <div className='tittle text-center d-flex align-items-center justify-content-center z-1 mt-3'>
                <p> תושבי רמות אחד בשביל השני<br />
                    שואלים, עונים...וכו וכו מילים של רחלי...</p>
            </div>
            <AddQuestion />
            <div>
                {forum_ar.map((item: any) => {
                    return (
                        <Link href={`/forum/comment/${item._id}`} className='link-underline link-underline-opacity-0 text-black'>
                            <div key={item._id} className='bg-info rounded bg-opacity-25 pb-2 px-2 h-auto mb-4'>
                                <span className="text-dark top-0 start-100 translate-middle badge shadow-sm rounded-pill bg-white text-muted" style={{ zIndex: 1 }}>
                                    {item.topic}
                                </span>
                                <div className='d-flex h-75 pt-2 rounded bg-light'>
                                    <div className='name col-1 d-block text-center mt-4'>
                                        <h1 className='mb-0'>
                                            <i className="bi bi-person-circle "></i>
                                        </h1>
                                        <p>
                                            {item.userName}
                                        </p>
                                    </div>
                                    <div className='content col-9 p-2'>
                                        <h5 className='mb-0' style={{ fontWeight: "bold" }}>
                                            {item.tittle}
                                        </h5>
                                        <hr className='z-1' />
                                        <p>
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className='time-msg col-2 d-flex justify-content-between px-4 align-items-end mb-2'>
                                        <p className='mb-0'>
                                            {formatPostAgo(item.date)}
                                        </p>
                                        <i className="bi bi-chat"> 0 </i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}
