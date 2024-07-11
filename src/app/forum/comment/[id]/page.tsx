"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ForumInComment from './components/forumInComment';
import AddComment from './components/addComment';
import CommentById from './components/commentById';



export const dynamic = 'auto';

export default function Comment(props: any) {

  // const [commentValue, setComment] = useState("");
  // const router = useRouter();

  // useEffect(() => {
  //   doApi2();
  // }, [commentValue])



  // const doApi2 = async () => {
  //   const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       forumMsgId: props.params.id,
  //       comment: commentValue
  //     }),
  //   });
  //   const data = await resp.json();
  //   console.log(data);
  //   router.push(`/forum/comment/${props.params.id}`);


  // }




  return (
    <div className='container w-75 bg-info bg-opacity-25 rounded pb-2'>
      <ForumInComment idForum={props.params.id} />
      <CommentById idForum={props.params.id}/>
      <AddComment idForum={props.params.id}/>
    </div>
  )
}


