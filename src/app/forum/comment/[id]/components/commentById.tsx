
import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useRouter } from 'next/navigation';

// export const dynamic = 'auto';

export default function CommentById(props: any) {

// const router = useRouter();

    const [dataComment, setDataComment] = useState([]);



useEffect(() => {
  doApi(); 
},[])

    const doApi = async () => {

        let urlGet = `${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment/${props.idForum}`
        const respGet = await fetch(urlGet);
        const dataGet = await respGet.json();
        let commentAr = dataGet;
        setDataComment(commentAr);
        console.log("hnjtj"+dataGet);
      }
     

    const formatPostAgo = (date: number): string => {
        const timePosted = Date.now() - date;
        const minutesAgo = Math.floor(timePosted / (1000 * 60));
        if (minutesAgo < 1) return "עכשיו";
        if (minutesAgo < 60) return `לפני ${minutesAgo} דקות`;
        const hoursAgo = Math.floor(minutesAgo / 60);
        if (hoursAgo < 24) return `לפני ${hoursAgo} שעות`;
        const daysAgo = Math.floor(hoursAgo / 24);
        return `לפני ${daysAgo} ימים`;
      }


  return (
    <div>
          {dataComment.map((item: any) => {
        return (
          <div key={item._id} className=' rounded bg-opacity-25 px-2 h-auto mb-2 me-auto' style={{width:"92%"}}>
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
          
        )

      })}
    </div>
  )
}
