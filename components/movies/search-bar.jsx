'use client'
import { useMovieContext } from "@/context/movie-context"
import Btn from "../btns/btn"
import { useState } from "react"

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const {dispatch} = useMovieContext()


  const handleSubmit = (e) => {
    e.preventDefault()
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=81deca48c2e2f641991fbb93c24dc798&query=${searchInput}`
    dispatch({type: 'SET_SEARCH', value: searchInput})
    dispatch({type: 'SET_URL', value: apiUrl})
  }

  const handleOnChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col w-full mt-5"
    >
      <label className="text-sm font-semibold text-violet-700">Search Movies</label>
      <input
        value={searchInput}
        onChange={handleOnChange}
        className="input-field"
        type="text"
      />
      <Btn>Search</Btn>
    </form>
  )
}

export default SearchBar