"use client"

import React, { useRef } from 'react'
import { useRouter } from 'next/navigation';

export const dynamic = 'auto';

export default function LoginForm() {

  const router = useRouter();

  let emailRef: any = useRef()
  let passRef: any = useRef()


  const doApi = async (e: any) => {
    e.preventDefault();

    const email:any = emailRef.current.value;
    const password:any = passRef.current.value;




    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`,{
      method: 'POST',
      body:JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await resp.json();
    console.log(data);
    router.push('/')
  }




  return (
    <div>
      <div className='w-50 bg-secondary bg-opacity-50 mx-auto text-center rounded shadow p-3'>
        <form onSubmit={doApi} className='w-50 mx-auto'>
          <label>email:</label>
          <input ref={emailRef} className='form-control mx-auto mb-3' type='email' placeholder='enter your email...'></input>
          <label>password:</label>
          <input ref={passRef} className='form-control mx-auto mb-3' type='password' placeholder='enter your password...'></input>
          <button className='btn btn-danger' type='submit' onSubmit={doApi}>send</button>
        </form>
      </div>
    </div>
  )
}
