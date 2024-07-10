"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'

export const dynamic = 'auto';

export default function AddComment(props: any) {

    const [commentValue, setComment] = useState("");
    const router = useRouter();
    const commentRef:any = useRef();

    useEffect(() => {
        doApi();
      }, [commentValue])

    const doApi = async () => {
        const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            forumMsgId: props.idForum,
            comment: commentValue
          }),
        });
        const data = await resp.json();
        console.log(data);
        router.push(`/forum/comment/${props.params.id}`);
    
    
      }


const addComment = () => {
    const comment = commentRef.current.value;
    setComment(comment);
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
