

import React from 'react';
import ShowForum from './components/showForum';

export const dynamic = 'auto';



export default async function Forum() {

async function doApi ()  {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/api/forum`;
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    // setForum_ar(data);
    return data;
}
    

    const initialData = await doApi();




    return (
        <div className='container'>
            <ShowForum forumData={initialData}/>
        
        </div>
    )
}
