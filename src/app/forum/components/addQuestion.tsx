"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'


export const dynamic = 'auto';
export default function AddQuestion() {
    const router = useRouter();
    const topicRef: any = useRef();
    const tittleRef: any = useRef();
    const descriptionRef: any = useRef();

    const [addForum, setAddForum] = useState(false);


    const doApi = async (e: any) => {
        e.preventDefault();

        const topic = topicRef.current.value;
        const tittle = tittleRef.current.value;
        const description = descriptionRef.current.value;

        console.log(topic, tittle, description);

        const resp = await axios({
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/forum`,
            method: 'POST',
            data: { topic, tittle, description },
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(resp.data);
        console.log(topic, tittle, description);
        openForm()
        router.push('/forum');
    }


      const closeForm = () => {
        setAddForum(false);
    }
   

    const openForm = () => {
        setAddForum(!addForum);
    }

    return (
        <div>
            <button onClick={openForm} className='btn btn-info rounded-circle shadow-sm m-4 w-auto'>
                <h2 className=" bi bi-plus-lg w-auto m-2"></h2>
            </button>

            {addForum && (
                <div className='position-fixed top-0 start-0 bg-dark bg-opacity-25 vw-100 vh-100 container-fluid justify-content-center align-content-center z-2'>
                    <div className='bg-info w-25 vh-50 mx-auto text-center p-5 rounded-4 shadow position-relative'>
                        <button onClick={closeForm} className="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"></button>
                        <form onSubmit={doApi}>
                            <div className="form-floating m-4">
                                <select ref={topicRef} className="form-select">
                                    <option defaultValue="שאלה">שאלה</option>
                                    <option defaultValue="עזרה">עזרה</option>
                                    <option defaultValue="בעיה">בעיה</option>
                                    <option defaultValue="תקלה">תקלה</option>
                                </select>
                                <label >בחר נושא</label>
                            </div>
                            <div className="form-floating mb-3 m-4">
                                <input ref={tittleRef} type="text" className="form-control" />
                                <label >כותרת</label>
                            </div>
                            <div className="form-floating m-4">
                                <textarea ref={descriptionRef} className="form-control" ></textarea>
                                <label>תוכן</label>
                            </div>

                            <div className="container text-center m-2">
                                <div className="row">
                                    <div className="col">
                                        <input type='file' className='form-control' multiple></input>
                                    </div>
                                    <div className="col">

                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">

                                    </div>
                                    <div className="col">

                                    </div>
                                    <div className="col">
                                        <button className='btn btn-primary'>שלח</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            )}
        </div>
    )
}
