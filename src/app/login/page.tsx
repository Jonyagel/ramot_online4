import React from 'react'
import LoginForm from './components/loginForm';
import { cookies } from 'next/headers'
import Signup from './components/signup';


export const dynamic = 'auto';


export default function LoginPage() {

    let isCookies: any = false

    if (cookies().has("token")) {
        isCookies = true
    }





    return (
        <div className=''>
            {isCookies ? <LoginForm /> : <Signup />
            }
        </div>
    )
}
