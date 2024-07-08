import axios from 'axios'
import React from 'react'

export default async function comment(props: any) {

  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment`
   const resp = await axios.get(url);
  let commentAr = resp.data;
   console.log(resp.data);


  // let url = `${process.env.NEXT_PUBLIC_API_URL}/api/forum/comment`
  // const resp = await axios({
  //   url,
  //   method: 'POST',
  //   data: {
  //     forumMsgId: "6683ec611b6b53ae6a8b0355",
  //     comment: "this is a comment"
  //   },
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });
  // console.log(resp.data);


  return (
    <div>
       {commentAr.map((item:any) => {
        return ( 
         <div key={item._id}>{item.userName}</div> 
        )
        
    })}
    </div>
  )
}
