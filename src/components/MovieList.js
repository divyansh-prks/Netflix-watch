import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-8 pb-5">
      <h1 className="text-xl md:text-2xl text-white pb-3">{title}</h1>
      <div className="flex overflow-x-scroll py-3 scrollbar-hide">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList

// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   return (
//     <div >
//       <h1 className="text-black">{title}</h1>
//       <div >
//         <div className="flex">
//           {
//             movies.map((movie) => (
//               <MovieCard key={movie.id} posterPath={movie?.poster_path} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;