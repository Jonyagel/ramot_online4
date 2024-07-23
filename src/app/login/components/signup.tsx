"use client"

import React, { useRef } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export const dynamic = 'auto';


export default function Signup() {
    const router = useRouter();

    let nameRef: any = useRef()
    let emailRef: any = useRef()
    let passRef: any = useRef()


    const doApi = async (e: any) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;


        const resp = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/api/users`,{
            method: 'POST',
            body:JSON.stringify( { name, email, password }),
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
                    <label>name:</label>
                    <input ref={nameRef} className='form-control mx-auto mb-3' type='text' placeholder='enter your name...'></input>
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
