import MovieList from "@/components/movies/movie-list"
import SearchBar from "@/components/movies/search-bar"

export const metadata = {
  title: 'Project | Movies'
}

function Movies() {
  return (
    <>
      <SearchBar />
      <MovieList />
    </>
    )
}

export default Movies