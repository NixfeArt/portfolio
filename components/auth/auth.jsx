import { useAuthContext } from "../../context/auth-context"
import SignIn from "./signIn"

const Authentication = () => {
  const {state} = useAuthContext()
  const { isAuthenticated, user } = state

  return (
    <>
      {!isAuthenticated
      ?
        <SignIn />
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