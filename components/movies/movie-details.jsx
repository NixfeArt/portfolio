import { useMovieContext } from "@/context/movie-context"

const MovieDetails = () => {
  const {state: {selectedMovie, isSelected}} = useMovieContext()

  return (
    <div className="p-4">
      {isSelected ? <>
        <p>{selectedMovie.title}</p>
        <p>{selectedMovie.release_date}</p>
        <p>{selectedMovie.overview}</p>
      </>
      : <p>Movie Not selected</p>}
    </div>
  )
}

export default MovieDetails