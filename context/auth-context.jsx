import React, { createContext, useContext, useReducer } from 'react'

const SET_FIELD = 'SET_FIELD'
const SET_ERROR = 'SET_ERROR'
const SET_AUTH = 'SET_AUTH'
const TOGGLE_INFO = 'TOGGLE_INFO'
const CLEAR_ERRORS = 'CLEAR_ERRORS'

const authReducer = (state, action) => {
  switch(action.type) {
    case SET_FIELD:
      return {...state, user: {...state.user, [action.field]:action.value}}
    case SET_ERROR:
      return {...state,errors: {...state.errors, [action.field]:action.value}}
    case SET_AUTH:
      return { ...state, isAuthenticated: action.value }
    case TOGGLE_INFO:
      return { ...state, isToggled: action.value }
    case CLEAR_ERRORS:
      return {...state, errors: {}}
    default:
      return state
  }
}

const initialState = {
  isAuthenticated: false,
  isToggled: false,
  user: {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  errors: {
    userName: false,
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false
  }
}

const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}
export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
}