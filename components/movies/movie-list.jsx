'use client'
import { useMovieContext } from "@/context/movie-context"
import useFetch from "@/lib/hooks/useApi";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const MovieList = () => {
  const router = useRouter()
  const {state: {url, movies, selectedMovie, isSelected}, dispatch} = useMovieContext()
  const { loading, data, error } = useFetch(url)

  useEffect(() => {
    if (data) {
      dispatch({ type: 'SET_MOVIES', payload: data.results });
    }
  }, [data, dispatch]);

  useEffect(() => {
    if(isSelected) {
      // redirect('/projects/movies/movie')
      router.push('/projects/movies/movie')
    }
  }, [selectedMovie, isSelected])

  const handleOnClick = (movie) => {
    dispatch({type: 'SELECTED', payload: true})
    dispatch({type: 'SELECT_MOVIE', payload: movie})
  }
  

  return (
    <div className="mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <>
          {movies &&
            movies.map((movie) => (
              <div key={movie.id} className="flex justify-between mb-5">
                <p>{movie.title}</p>
                <button onClick={() => handleOnClick(movie)}>Details</button>
              </div>
            ))}
        </>
      )}
    </div>
  )
}

export default MovieList