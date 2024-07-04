

import React, { useEffect } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios';
import AddQuestion from './components/addQuestion';

export default async function Forum() {

    let forum_ar



    let url = `${process.env.VERCEL_URL}/api/forum`;
    let resp = await axios.get(url);
    console.log(resp.data);
    forum_ar = resp.data;



    // let url = 'api/forum';
    // let resp = await fetch(url);
    // let data = await resp.json();
    // forum_ar =  data;






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

            <div className='tittle text-center d-flex align-items-center justify-content-center z-1'>
                <p> תושבי רמות אחד בשביל השני<br />
                    שואלים, עונים...וכו וכו מילים של רחלי...</p>
            </div>
            <AddQuestion />
            <div>
                {forum_ar.map((item: any) => {
                    return (
                        <div key={item._id} className='bg-info rounded bg-opacity-25 pb-2 px-2 h-auto mb-4'>
                            <span className="text-dark top-0 start-100 translate-middle badge shadow-sm rounded-pill bg-white text-muted" style={{ zIndex: 1 }}>
                                {item.topic}
                            </span>
                            <div className='d-flex h-75 pt-2 rounded shadow bg-light'>
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
                    )
                })}

            </div>
        </div>
    )
}
