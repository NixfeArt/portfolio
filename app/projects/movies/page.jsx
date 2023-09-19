'use client'
import MovieList from "@/components/movies/movie-list"
import SearchBar from "@/components/movies/search-bar"
// import { MovieContextProvider, useMovieContext } from "@/context/movie-context"

function Movies() {
  return (
    <>
      <SearchBar />
      <MovieList />
    </>
    )
}

export default Movies