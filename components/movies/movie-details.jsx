import { useMovieContext } from "@/context/movie-context"
import Btn from "../btns/btn"
import { redirect, useRouter } from "next/navigation"
import SubTitle from "../UI/subTitle"

const MovieDetails = () => {
  const {state: {selectedMovie, isSelected}, dispatch} = useMovieContext()
  const router = useRouter()

  const handleOnClick = () => {
    dispatch({type: 'SELECTED', payload: false})
    dispatch({type: 'SELECT_MOVIE', payload: null})
    router.push('/projects/movies')
  }

  return (
    <div className="mt-5">
      <div className="flex flex-col justify-center text-center">
        {isSelected
          ? <>
          <img
            className="max-h-96 object-contain mb-5"
            src={`https://image.tmdb.org/t/p/w400${selectedMovie.poster_path}`}
          />
            <SubTitle>{selectedMovie.title}</SubTitle>
            <p>{selectedMovie.release_date}</p>
            <p>{selectedMovie.overview}</p>
            <p>{selectedMovie.vote_average && `Rating: ${selectedMovie.vote_average}`}</p>
          </>
          : <p>Movie Not selected</p>
        }
        <Btn onClick={handleOnClick}>Go Back</Btn>
      </div>
    </div>
  )
}

export default MovieDetails