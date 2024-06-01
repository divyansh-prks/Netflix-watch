 import React from 'react'
import Header from './Header'
import { useState ,useRef} from 'react';
import { checkValidateData } from '../utils/validate';

const Login = () => {
    const [isSignInForm , setIsSignInForm] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null)
    const email = useRef(null)
    const password = useRef(null)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)



    }

    const handleButtonClick = () => {
        //validate form 
        // console.log(email)
        const message =checkValidateData(email.current.value,password.current.value)
        console.log(message)
        setErrorMessage(message)
        //signin form 
    }
  return (
    <div>
        <Header />

        <div className='absolute'>

        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/86742114-c001-4800-a127-c9c89ca7bbe4/IN-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg' />
        Login page
        </div>

        <form onSubmit={(e) => e.preventDefault()} className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && 
            <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' /> }
            <input type='text' ref={email} placeholder='Email address' className='p-4 my-4 w-full bg-gray-800' />
            <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-800' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix ? Sign up Now" : "Already registered ? Sign In Now"}</p>

            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        </form>
    </div>
  )
}

export default Login