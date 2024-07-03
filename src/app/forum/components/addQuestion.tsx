"use client"

import React, { useState } from 'react'

export default function AddQuestion() {

    const [addForum, setAddForum] = useState(false);

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
                        <button className="btn-close position-absolute top-0 end-0 m-2" aria-label="Close"></button>
                        <form>
                            <div className="form-floating m-4">
                                <select className="form-select">
                                    <option selected>שאלה</option>
                                    <option value="1">עזרה</option>
                                    <option value="2">בעיה</option>
                                    <option value="3">תקלה</option>
                                </select>
                                <label >בחר נושא</label>
                            </div>
                            <div className="form-floating mb-3 m-4">
                                <input type="text" className="form-control" />
                                <label >כותרת</label>
                            </div>
                            <div className="form-floating m-4">
                                <textarea className="form-control" ></textarea>
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
