'use client'
import MovieList from "@/components/movies/movie-list"
import SearchBar from "@/components/movies/search-bar"
// import { MovieContextProvider, useMovieContext } from "@/context/movie-context"

function Movies() {
  return (
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center w-80 sm:w-1/2">
          <SearchBar />
          <MovieList />
        </div>
      </div>
    )
}

export default Movies