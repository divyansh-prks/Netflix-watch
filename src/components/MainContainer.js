import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

function MainContainer() {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return;
    const mainMovie = movies[0]
    // console.log(mainMovie)

    const {original_title,overview ,id} =mainMovie;
    // console.log(original_title)
    // console.log(overview)
  return (
    <div>
        {/* <h1>Heading one main container </h1> */}
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
        
    </div>
  )
}

export default MainContainer