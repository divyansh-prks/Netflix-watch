import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

function GPTSearch() {
  return (
    <div>
      <img className='absolute -z-10'
      src= {BG_URL}
      alt='logo'
      />
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GPTSearch