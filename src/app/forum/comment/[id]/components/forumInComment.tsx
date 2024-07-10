"use client"

import React, { useEffect, useState } from 'react'

export default function ForumInComment(props: any) {
    const [dataForum, setDataForum] = useState<any | []>([]);

    useEffect(() => {
        doApi2();
    }, []);

    const doApi2 = async () => {
        let url = `${process.env.NEXT_PUBLIC_API_URL}/api/forum/${props.idForum}`
        const resp = await fetch(url);
        const data = await resp.json();
        const ForumAr = data;
        setDataForum(ForumAr);

        console.log(data);

    }



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
        <div className=''>
            <div key={dataForum._id} className=' rounded bg-opacity-25 px-2 h-auto mt-4 mb-2'>
                <span className="text-dark top-0 start-100 translate-middle badge shadow-sm rounded-pill bg-white text-muted" style={{ zIndex: 1 }}>
                    {dataForum.topic}
                </span>
                <div className='d-flex h-75 pt-2 rounded bg-light'>
                    <div className='name col-1 d-block text-center mt-4'>
                        <h1 className='mb-0'>
                            <i className="bi bi-person-circle "></i>
                        </h1>
                        <p>
                            {dataForum.userName}
                        </p>
                    </div>
                    <div className='content col-9 p-2'>
                        <h5 className='mb-0' style={{ fontWeight: "bold" }}>
                            {dataForum.tittle}
                        </h5>
                        <hr className='z-1' />
                        <p>
                            {dataForum.description}
                        </p>
                    </div>
                    <div className='time-msg col-2 d-flex justify-content-between px-4 align-items-end mb-2'>
                        <p className='mb-0'>
                        {formatPostAgo(dataForum.date)}
                        </p>
                        <i className="bi bi-chat"> 0 </i>
                    </div>
                </div>
            </div>
        </div>
    )
}