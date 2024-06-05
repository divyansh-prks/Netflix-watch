import React from 'react'
import { signOut , onAuthStateChanged} from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
// import {  onAuthStateChanged } from "firebase/auth";
// import { auth } from '../utils/Firebase';
// import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = user.uid;
        const {uid , email , displayName ,photoURL} =user ;
        dispatch(addUser({uid: uid , email : email , displayName : displayName , photoURL : photoURL}))
        navigate("/browse")
        // ...
    } else {
        // User is signed out
        // ... 
        dispatch(removeUser())
        navigate("/")
        }
      });

      //unsubsubscribe when component unmount 

      return () => unsubscribe()

}, [])
const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
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

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    
        <div className='absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
            <img 
            className='w-36'
            src={LOGO} alt='logo' />

        {user && ( <div className='flex  '>
          {showGptSearch&& (
          <select className='m-2 p-2 bg-gray-900 text-white'  onChange={handleLanguageChange}>

            {SUPPORTED_LANGUAGES.map( (lang ) => ( 
              <option key={lang.identifier} value={lang.identifier} >
                {lang.name}
              </option>
            ))}

          </select>
        )}
            <button className='bg-purple-800 p-3 mr-3 my-2 text-white rounded-sm ' onClick={handleGptSearchClick}> {showGptSearch ? "Homepage" : "GPT Search"} </button>
            <img className='my-2 w-12 h-12 rounded-full' src='https://th.bing.com/th/id/OIP.f3DM2upCo-p_NPRwBAwbKQHaHa?w=189&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='logo' />
        <button className='m-2 p-3 font-bold text-white bg-red-500' onClick={handleSignOut}>Sign Out</button>
        </div>)
}
        </div>
        
    
  )
}

export default Header