"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';


export const dynamic = 'auto';

export default function AddComment(props: any) {

  const [commentValue, setComment] = useState("");
  const router = useRouter();
  const commentRef: any = useRef();

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
    router.push(`/forum/comment/${props.idForum}`);


  }


  const addComment = (e: any) => {
    // e.preventDefault();
    const comment = commentRef.current.value;
    setComment(comment);
    router.push(`/forum/comment/${props.idForum}`);
    console.log(comment);
  }

  return (
    <div className='sticky-bottom'>
      <div className='bg-light rounded px-2 p-2  shadow'>
        <div className='bg-opacity-25 mx-5 rounded shadow-sm mb-2 justify-content-between d-flex' style={{ background: 'rgb(230, 230, 230)' }}>
          <div className='d-flex'>
            <div className='bg-dark rounded' style={{ width: "4px", height: "50px" }}> </div>
            <p>gdhdhdh</p>
          </div>
          <button className='btn mx-1' ><i className="bi bi-x-circle"></i></button>
        </div>
        <div className='d-flex'>
          <button className='btn btn-light mx-1' ><i className="bi bi-paperclip"></i></button>
          <button className='btn btn-light mx-1' ><i className="bi bi-emoji-smile"></i></button>
          <form className='d-flex w-100' onSubmit={addComment}>
            <input ref={commentRef} type="text" placeholder='add a comment' className='form-control border-0 bg-light' />
            <button className='btn btn-light mx-1' style={{ transform: 'rotate(270deg)' }}><i className="bi bi-send" ></i></button>
          </form>
        </div>
      </div>
    </div>
  )
}
