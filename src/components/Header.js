import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const handleSignOut = () => {

// const auth = getAuth();
signOut(auth)
.then(() => {
  // Sign-out successful.
  navigate("/")

}).catch((error) => {
  // An error happened.
  navigate('/error')
});
    }
  return (
    
        <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img 
            className='w-36'
            src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
        {user && ( <div className='flex  '>
            <img className='my-2 w-12 h-12 rounded-full' src='https://th.bing.com/th/id/OIP.f3DM2upCo-p_NPRwBAwbKQHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='logo' />
        <button className='m-2 p-3 font-bold text-white bg-red-500' onClick={handleSignOut}>Sign Out</button>
        </div>)
}
        </div>
        
    
  )
}

export default Header