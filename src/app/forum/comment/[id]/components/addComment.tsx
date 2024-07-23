"use client"

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
// import data from '@emoji-mart/data'
// import Picker from '@emoji-mart/react'
import { CldUploadButton } from 'next-cloudinary';
import EmojiPicker from 'emoji-picker-react';
import { EmojiStyle } from 'emoji-picker-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { HiddenEmoji } from 'emoji-picker-react';

export const dynamic = 'auto';

export default function AddComment(props: any) {

  const router = useRouter();
  const commentRef: any = useRef();
  const [chosenEmoji, setChosenEmoji] = useState(false);
  const [fileName, setFileName] = useState("");
  const [signIn, setSignIn] = useState(false);




  useEffect(() => {

  }, [])

  const onEmojiSelect = (emoji: any) => {
    console.log(emoji);
    commentRef.current.value += emoji.emoji;
  };

  const notify = () => toast.error("אתה צריך להירשם");

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header></Popover.Header>
      {/* <Picker data={data} onEmojiSelect={onEmojiSelect}/> */}
      <EmojiPicker onEmojiClick={onEmojiSelect} emojiStyle={EmojiStyle.GOOGLE} searchDisabled={true} />
    </Popover>
  );



  const doApi = async (commentBody: any) => {
    if (props.replay === false) {
      props.commentReplying.commentId = null;
    }
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        forumMsgId: props.idForum,
        comment: commentBody,
        commentReplayId: props.commentReplying.commentId,
        commentReplayContent: props.commentReplying.dataComment,
        commentReplayUserName: props.commentReplying.userComment,
      }),
    });
    const data = await resp.json();
    console.log(data);
    props.doApiProps();
    getForum();
  }


  const getForum = async () => {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/forum/${props.idForum}`
    const resp = await fetch(url);
    const data = await resp.json();
    const ForumAr = data;
    // setDataForum(ForumAr.numOfComments + 1);
    putForum(ForumAr.numOfComments + 1)
    // console.log(dataForum);
    // console.log(data);
    // console.log((ForumAr.numOfComments + 1) + "fffffffff");

  }

  const putForum = async (updateForum: any) => {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/${props.idForum}`, {
      method: 'PUT',
      body: JSON.stringify({
        numOfComments: updateForum
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await resp.json();
    console.log(data);
    props.doApiForum();
  }


  const addComment = () => {
    const comment = commentRef.current.value;
    if (comment) {
      commentRef.current.value = null;
      doApi(comment);
      router.refresh();
      console.log(comment);
      props.setReplay(false);
    }
  }

  const handleUpload = (result: any) => {
    if (result.event === 'success') {
      const publicId = result.info.public_id;
      // Extract the file name from the public_id
      const fileName = publicId.split('/').pop(); // Extracts the file name
      console.log('Uploaded file name:', fileName);
      // setFileName(fileName);
      setFileName(fileName);
      // fileNameAr.push(fileName);
      // console.log('File uploaded successfully' + fileNameAr);
    }
  };

  const checkSignIn = async () => {
    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/checkLogin`);
      const data = await resp.json();
      console.log(data);
      if (data.status === 401) {
        notify();
        setSignIn(false);
      }
      else if (data.status === 200) {
        setSignIn(true);
        addComment();
      }
    }
    catch (error) {
      console.error('Error:', error);
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault(); // מונע את ברירת המחדל של שליחת הטופס
    checkSignIn();
    if (signIn) {
      addComment();
    }
  };

  return (
    <div className='sticky-bottom'>
      <div className='bg-light rounded px-2 p-2 mx-2 shadow'>
        {props.replay &&
          <div className='bg-opacity-25 rounded shadow-sm mb-2 justify-content-between d-flex' style={{ background: 'rgb(230, 230, 230)', marginRight: "7.5%" }}>
            <div className='d-flex'>
              <div className='bg-dark rounded ms-2' style={{ width: "4px", height: "100%" }}> </div>
              <div className=''>
                <p className='fw-bold m-0'>{props.commentReplying.userComment}</p>
                <p className='m-0'>{props.commentReplying.dataComment}</p>
              </div>
            </div>
            <button onClick={() => { props.setReplay(false) }} className='btn mx-1' ><i className="bi bi-x-circle"></i></button>
          </div>
        }
        <div className='d-flex'>
          <CldUploadButton className='btn btn-light' uploadPreset="my_upload_test" onSuccess={handleUpload}
            onError={(error) => {
              console.error('Upload error:', error);
              // Here you can show an error message to the user
              alert('Upload failed. The file might be too large or of an unsupported format.');
            }}
            options={{
              sources: ['local'],
              maxFileSize: 5000000, // 5MB in bytes
              maxImageWidth: 2000, // Optional: limit image width
              maxImageHeight: 2000, // Optional: limit image height
              clientAllowedFormats: ['jpg', 'jpeg', 'png', 'webp'], // Optional: limit file types
            }}
          > <i className="bi bi-paperclip"></i></CldUploadButton>
          <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <Button className='btn btn-light'><i className="bi bi-emoji-smile"></i></Button>
          </OverlayTrigger>
          <form className='d-flex w-100' onSubmit={handleSubmit}>
            <input ref={commentRef} type="text" placeholder='add a comment' className='form-control border-0 bg-light' />
            <button className='btn btn-light me-4'><p className="bi bi-send m-0" style={{ transform: 'rotate(225deg)' }}></p></button>
          </form>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </div >
  )
}
