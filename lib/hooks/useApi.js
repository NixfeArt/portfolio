import { useEffect, useReducer } from "react"

const FETCH_START = 'FETCH_START'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILURE = 'FETCH_FAILURE'
const POST_START = 'POST_START'
const POST_SUCCESS = 'POST_SUCCESS'
const POST_FAILURE = 'POST_FAILURE'

const initialState = {
  loading: false,
  data: null,
  error: null,
  posting: false,
  postSuccess: false,
  postError: null
}

function fetchReducer(state, action) {
  switch(action.type){
    case FETCH_START:
      return {...state, loading: true, error: null}
    case FETCH_SUCCESS:
      return {...state, loading: false, data: action.payload, error: null}
    case FETCH_FAILURE:
      return {...state, loading: false, data:null, error: action.payload}
    case POST_START:
      return {...state, posting: true, postError:null}
    case POST_SUCCESS:
      return {...state, posting: false, postError:null, postSuccess: true}
    case POST_FAILURE:
      return {...state, posting: false, postError:action.payload, postSuccess: true}
    default:
      throw new Error("Action doesn't exist!")
  }
}

const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState)

  const fetchData = async() => {
    dispatch({type: FETCH_START})
    try{
      const resp = await fetch(url)
      const result = await resp.json()
      dispatch({type: FETCH_SUCCESS, payload: result})
    } catch (err) {
      dispatch({type: FETCH_FAILURE, payload: err})
    }
  }

  useEffect(() => {
    if(!url) {
      return
    }
    fetchData()
  }, [url])

  const postData = async (data) => {
    dispatch({type:POST_START})
    try{
      const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      const result = await resp.json()
      dispatch({type:POST_SUCCESS, payload: result})
    } catch(err){
      dispatch({ type: POST_FAILURE, payload: err })
    }
  }

  return {...state, postData}
}

export default useFetch