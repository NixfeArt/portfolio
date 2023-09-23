'use client'
import { useAuthContext } from "../../context/auth-context"
import SignUp from "./signup"

const Authentication = () => {
  const {state} = useAuthContext()
  const { isAuthenticated, user } = state

  return (
    <>
      {!isAuthenticated
      ?
        <SignUp />
      :
      <>
        <p>Im logged in now</p>
        <p>{user.userName}</p>
      </>
      }
    </>
  )
}

export default Authentication