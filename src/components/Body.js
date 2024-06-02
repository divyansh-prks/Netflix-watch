import React, { useState } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Body = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()


    const appRouter = createBrowserRouter([
        {
            path : '/',
            element : <Login />
        },
        {
            path : "/browse",
            element : <Browse />
        }
    ])


    useState(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
            const {uid , email , displayName ,photoURL} =user ;
            dispatch(addUser({uid: uid , email : email , displayName : displayName , photoURL : photoURL}))
            // navigate("/browse")
            // ...
        } else {
            // User is signed out
            // ...
            dispatch(removeUser())
            // navigate("/")
            }
          });

    }, [])
  return (
    <div>

        <RouterProvider router={appRouter} />
       

    </div>
  )
}

export default Body