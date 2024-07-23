"use client"
import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddComment from './addComment';
import { CldImage } from 'next-cloudinary';
import Modal from 'react-bootstrap/Modal';

// import './style.css';

export const dynamic = 'auto';

export default function CommentById(props: any) {
  const [dataForum, setDataForum] = useState(props.forumData);
  const [dataComment, setDataComment] = useState(props.commentAr);
  // const [isHovered, setIsHovered] = useState(false);
  const [hoveredCommentId, setHoveredCommentId] = useState<string | null>(null);
  const [commentReplying, setCommentReplying] = useState({});
  const [replay, setReplay] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    // doApi();
    // doApiForum();
  }, [])


  // const doApi = async () => {
  //   let urlGet = `${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment/${props.idForum}`
  //   const respGet = await fetch(urlGet);
  //   const dataGet = await respGet.json();
  //   let commentAr = dataGet;
  //   console.log(dataGet);
  //   setDataComment(commentAr);
  // }

  // const doApiForum = async () => {
  //   let url = `${process.env.NEXT_PUBLIC_API_URL}/api/forum/${props.idForum}`
  //   const resp = await fetch(url);
  //   const data = await resp.json();
  //   const ForumAr = data;
  //   setDataForum(ForumAr);
  //   console.log(data);

  // }


  const formatPostAgo = (date: number): string => {
    const timePosted = Date.now() - date;
    const minutesAgo = Math.floor(timePosted / (1000 * 60));
    if (minutesAgo < 1) return "עכשיו";
    if (minutesAgo < 60) return `לפני ${minutesAgo} דקות`;
    const hoursAgo = Math.floor(minutesAgo / 60);
    if (hoursAgo < 24) return `לפני ${hoursAgo} שעות`;
    const daysAgo = Math.floor(hoursAgo / 24);
    if (daysAgo < 30) return `לפני ${daysAgo} ימים`;

    const dateTest = new Date(date * 1000); // מכפיל ב-1000 אם הזמן בשניות
    const formatter = new Intl.DateTimeFormat('he-IL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    return formatter.format(date);
  }

  const handleCommentReply = (dataComment: any, userComment: any, commentId: any) => {
    setCommentReplying({ dataComment, userComment, commentId })
  }




  return (
    <div className=''>   <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <CldImage
        src={dataForum.fileName} // Use this sample image or upload your own via the Media Explorer
        width="700" // Transform the image: auto-crop to square aspect_ratio
        height="500"
        sizes="100vw"
        crop={{
          type: 'fill',
          source: true
        }}
        radius={30}
        alt='#'
        priority
        onClick={handleShow}
      />
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
      <div key={dataForum._id} className='rounded bg-opacity-25 px-2 h-auto mt-4 mb-2'>
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
            <div className='flex'>
              {dataForum.fileName &&
                <CldImage
                  src={dataForum.fileName} // Use this sample image or upload your own via the Media Explorer
                  width="100" // Transform the image: auto-crop to square aspect_ratio
                  height="100"
                  sizes="100vw"
                  crop={{
                    type: 'fill',
                    source: true
                  }}
                  radius={100}
                  alt='hi'
                  // priority
                  onClick={() => { handleShow() }}
                />
              }
            </div>
          </div>
          <div className='time-msg col-2 d-flex justify-content-between px-4 align-items-end mb-2'>
            <p className='mb-0'>
              {formatPostAgo(dataForum.date)}
            </p>
            <i className="bi bi-chat"> {dataForum.numOfComments} </i>
          </div>
        </div>
      </div>
      {dataComment && dataComment.map((item: any) => {
        return (
          <div onMouseEnter={() => setHoveredCommentId(item._id)}
            onMouseLeave={() => setHoveredCommentId(null)}
            key={item._id} className='d-flex rounded bg-opacity-25 px-2 h-auto mb-2 me-auto justify-content-between w-100' style={{ width: "92%" }}>
            <div className='align-content-center w-25 text-start ps-3'>
              <button onClick={() => {
                handleCommentReply(item.comment, item.userName, item._id);
                setReplay(true)
              }} className='comment_on_comment btn rounded-circle' style={{ opacity: hoveredCommentId === item._id ? 1 : 0 }}><i className="bi bi-arrow-90deg-left"></i></button>
            </div>
            <div className='bg-light rounded col-10 p-2'>
              {item.commentReplayId &&
                <div className='bg-opacity-25 rounded shadow-sm mb-2 justify-content-between d-flex' style={{ background: 'rgb(230, 230, 230)', marginRight: "7.5%" }}>
                  <div className='d-flex'>
                    <div className='bg-dark rounded ms-2' style={{ width: "4px", height: "100%" }}> </div>
                    <div className=''>
                      <p className='fw-bold m-0'>{item.commentReplayUserName}</p>
                      <p className='m-0'>{item.commentReplayContent}</p>
                    </div>
                  </div>
                </div>
              }
              <div className='d-flex '>
                <div className='name col-1 d-block text-center mt-4'>
                  <h1 className='mb-0'>
                    <i className="bi bi-person-circle "></i>
                  </h1>
                  <p>
                    {item.userName}
                  </p>
                </div>
                <div className='content col-9 p-2'>
                  <p>
                    {item.comment}
                  </p>
                </div>
                <div className='time-msg col-2 d-flex justify-content-between px-4 align-items-end mb-2'>
                  <p className='mb-0'>
                    {formatPostAgo(item.date)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )

      })}
      {/* <AddComment idForum={props.idForum} doApiProps={doApi} doApiForum={doApiForum} commentReplying={commentReplying} replay={replay} setReplay={setReplay} /> */}
      <AddComment idForum={props.idForum} dataComment={dataComment} doApiForum={dataForum} commentReplying={commentReplying} replay={replay} setReplay={setReplay} />
    </div>
  )
}
