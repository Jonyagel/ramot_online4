// "use client"

// import React, { useEffect, useState } from 'react'
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import AddQuestion from '../forum/components/addQuestion';
// import Link from 'next/link';
// import { CldImage } from 'next-cloudinary';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

import React from 'react';
import ShowForum from './components/showForum';

export const dynamic = 'force-dynamic';

async function doApi ()  {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/forum`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    // setForum_ar(data);
    return data;
}

export default async function Forum() {
    // const [addForum, setAddForum] = useState(false);
    // const [forum_ar, setForum_ar] = useState([]);

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);


    // useEffect(() => {
    //     doApi();
    // }, [addForum])

    


    const initialData = await doApi();


    // const formatPostAgo = (date: number): string => {
    //     const timePosted = Date.now() - date;
    //     const minutesAgo = Math.floor(timePosted / (1000 * 60));
    //     if (minutesAgo < 1) return "עכשיו";
    //     if (minutesAgo < 60) return `לפני ${minutesAgo} דקות`;
    //     const hoursAgo = Math.floor(minutesAgo / 60);
    //     if (hoursAgo < 24) return `לפני ${hoursAgo} שעות`;
    //     const daysAgo = Math.floor(hoursAgo / 24);
    //     if (daysAgo < 30) return `לפני ${daysAgo} ימים`;

    //     const dateTest = new Date(date * 1000); // מכפיל ב-1000 אם הזמן בשניות
    //     const formatter = new Intl.DateTimeFormat('he-IL', {
    //         year: 'numeric',
    //         month: '2-digit',
    //         day: '2-digit'
    //     });

    //     return formatter.format(date);
    //   }


    return (
        <div className='container'>
            <ShowForum forumData={initialData}/>
            {/* <div className='tittle text-center d-flex align-items-center justify-content-center z-1 mt-3'>
                <p> תושבי רמות אחד בשביל השני<br />
                    שואלים, עונים...וכו וכו מילים של רחלי...</p>
            </div>
            <AddQuestion setAddForum={setAddForum} addForum={addForum} />
            <div>
                {forum_ar.map((item: any) => {
                    return (
                        <Link key={item._id} href={`/forum/comment/${item._id}`} className='link-underline link-underline-opacity-0 text-black'>
                            <div className='bg-info rounded bg-opacity-25 pb-2 px-2 h-auto mb-4'>
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
                                        <div className='flex'>
                                            {item.fileName &&
                                                <CldImage
                                                    src={item.fileName} // Use this sample image or upload your own via the Media Explorer
                                                    width="100" // Transform the image: auto-crop to square aspect_ratio
                                                    height="100"
                                                    sizes="100vw"
                                                    crop={{
                                                        type: 'fill',
                                                        source: true
                                                    }}
                                                    radius={100}
                                                    alt='#'
                                                    priority
                                                    onClick={handleShow}
                                                />
                                            }
                                        </div>
                                    </div>
                                    <div className='time-msg col-2 d-flex justify-content-between px-4 align-items-end mb-2'>
                                        <p className='mb-0'>
                                            {formatPostAgo(item.date)}
                                        </p>
                                        <i className="bi bi-chat"> {item.numOfComments} </i>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    )
                })}

            </div> */}

        </div>
    )
}
