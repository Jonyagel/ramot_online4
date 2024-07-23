// "use client"

import React, { useState } from 'react';
import ForumInComment from './components/forumInComment';
import CommentById from './components/commentById';



export const dynamic = 'force-dynamic';

export default async function Comment(props: any) {


const doApi = async () => {
    let urlGet = `${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment/${props.params.id}`
    const respGet = await fetch(urlGet);
    const dataGet = await respGet.json();
    let commentAr = dataGet;
    console.log(dataGet);
    return commentAr;
  }

  const doApiForum = async () => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/forum/${props.params.id}`
    const resp = await fetch(url);
    const data = await resp.json();
    const ForumAr = data;
    // setDataForum(ForumAr);
    console.log(data);
    return ForumAr;

  }

  const initialData = await doApi();
  const initialForumData = await doApiForum();

  return (
    <div className='container w-75 bg-info bg-opacity-25 rounded pb-2'>
      {/* <ForumInComment idForum={props.params.id}/> */}
      <CommentById idForum={props.params.id} commentAr={initialData} forumData={initialForumData}/>
    </div>
  )
}


