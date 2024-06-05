import React from 'react'
import Header from './Header'
// import { API_OPTIONS } from '../utils/constants';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addNowPlayingMovies } from '../utils/moviesSlice';
import useNowPlayingMovies from './hooks/useNowPlayingMovies';
import usePopularMovies from "./hooks/usePopularMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies()

 
  return (
    <div>
        <Header />
        {/* 
        -MainContainer
          - Video Background 
          - VideoTitle
        SecondaryContainer
         -MovieList * n
         -cards * n
        */}

        {showGptSearch ? (  
        <GPTSearch /> 
       ): (
        <>

        <MainContainer />
        <SecondaryContainer />
        </>
        )}
        
    </div>
  )
}

export default Browse