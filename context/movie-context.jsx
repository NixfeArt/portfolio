import React, { createContext, useContext, useReducer } from 'react'

const SET_SEARCH = 'SET_SEARCH'
const SET_MOVIES = 'SET_MOVIES'
const SET_URL = 'SET_URL'
const SELECT_MOVIE = 'SELECT_MOVIE'
const SELECTED = 'SELECTED'

const movieReducer = (state,action) => {
  switch(action.type){
    case SET_SEARCH:
      return {...state, search: action.value}
    case SET_MOVIES:
      return {...state, movies: action.payload}
    case SELECT_MOVIE:
      return {...state, selectedMovie: action.payload}
    case SELECTED:
      return {...state, isSelected: action.payload}
    case SET_URL:
      return {...state, url: action.value}
    default:
      return state
  }
}

const initialState = {
  url: '',
  search: '',
  movies: null,
  selectedMovie: null,
  isSelected: false
}

const MovieContext = createContext()

export const useMovieContext = () => {
  return useContext(MovieContext)
}

export const MovieContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(movieReducer, initialState)

  return <MovieContext.Provider value={{state, dispatch}}>{children}</MovieContext.Provider>
}