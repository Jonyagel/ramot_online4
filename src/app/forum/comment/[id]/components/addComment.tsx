"use client"

import React, { useRef } from 'react'

export default function AddComment(props: any) {

    const commentRef:any = useRef();

const addComment = () => {
    const comment = commentRef.current.value;
    props.commentValue(comment);
    console.log(comment);
}

    return (
        <div className='sticky-bottom'>
            <div className='bg-light rounded px-2 d-flex pt-3'>
                <button className='btn btn-danger' onClick={addComment}>+</button>
                <input ref={commentRef} type="text" placeholder='add a comment' className='form-control' />
            </div>
        </div>
    )
}
