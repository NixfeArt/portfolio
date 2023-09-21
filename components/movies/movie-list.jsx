'use client'
import { useMovieContext } from "@/context/movie-context"
import useFetch from "@/lib/hooks/useApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SubTitle from "../UI/sub-title";

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
      router.push(`/projects/movies/movie:${selectedMovie.id}`)
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
        <div className="flex flex-wrap gap-3 justify-between w-full">
          {movies &&
            movies.map((movie) => (
              <div onClick={() => handleOnClick(movie)} key={movie.id} className="flex flex-col mb-5 w-full md:w-1/4 lg:w-1/5 hover:bg-slate-50 cursor-pointer rounded-md border-2 border-violet-50 hover:border-violet-200 max-h-full">
                <img
                  className="bg-center object-cover rounded-t-md flex-grow max-h-80 md:max-h-48 lg:max-h-60"
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                />
                <div className="mt-2 mb-2 text-center">
                  <SubTitle>{movie.title}</SubTitle>
                  <p>Realse: {movie.release_date}</p>
                  <p>Rating: {movie.vote_average}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default MovieList