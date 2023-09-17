import { useRef } from "react"
import { useAuthContext } from "./auth-context"
import AuthErrorMsg from "./auth-error-msg"
import Label from "../UI/label"
import Title from "../UI/title"
import SubTitle from "../UI/subTitle"
import InfoBoxAuth from "./info-box-auth"
import Btn from "../btns/btn"

const SignIn = () => {

  const {state, dispatch} = useAuthContext()

  const {
    isAuthenticated,
    isToggled,
    user,
    errors
  } = state

  const userNameRef = useRef(null)
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  const validateAuth = (event) => {
    let hasError = false

    if(!user.userName.match(/^[A-Z][A-Za-z]{5,}$/)) {
      dispatch({ type: 'SET_ERROR', field: 'userName', value: true })
      hasError = true
      userNameRef.current.focus()
    } else {
      dispatch({ type: 'SET_ERROR', field: 'userName', value: false })
    }
    
    if(user.firstName.trim() === '') {
      dispatch({ type: 'SET_ERROR', field: 'firstName', value: true })
      hasError = true
      firstNameRef.current.focus()
    } else {
      dispatch({ type: 'SET_ERROR', field: 'firstName', value: false })
    }
    
    if(user.lastName.trim() === '') {
      dispatch({ type: 'SET_ERROR', field: 'lastName', value: true })
      hasError = true
      lastNameRef.current.focus()
    } else {
      dispatch({ type: 'SET_ERROR', field: 'lastName', value: false })
    }

    if (!user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      dispatch({ type: 'SET_ERROR', field: 'email', value: true })
      hasError = true
      emailRef.current.focus()
    } else {
      dispatch({ type: 'SET_ERROR', field: 'email', value: false })
    }

    if (user.password.length < 6) {
      dispatch({ type: 'SET_ERROR', field: 'password', value: true })
      hasError = true
      passwordRef.current.focus()
    } else {
      dispatch({ type: 'SET_ERROR', field: 'password', value: false })
    }

    if (user.password !== user.confirmPassword) {
      dispatch({ type: 'SET_ERROR', field: 'confirmPassword', value: true })
      hasError = true
      passwordRef.current.focus()
    } else {
      dispatch({ type: 'SET_ERROR', field: 'confirmPassword', value: false })
    }

    return hasError
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    dispatch({ type: 'SET_FIELD', field: name, value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: 'CLEAR_ERRORS' })
    
    let hasError = validateAuth()
    if (!hasError) {
      dispatch({ type: 'SET_AUTH', value: true });
    }
  }

  return (
    <div
      style={{minHeight: '100vh'}}
      className="bg-slate-200 flex flex-col p-5 justify-center items-center  h-full">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-80">
          <Title extraClasses={['text-4xl sm:text-5xl mb-3 text-left']}>Welcome!</Title>
          <SubTitle extraClasses={['text-xl sm:text-2xl leading-6']}>To my Portfolio and Enjoy the Experience</SubTitle>
          <Label label="User Name" extraStyle={{marginTop: 10}} hasInfo>
            <input
              className="input-field"
              type="text"
              name="userName"
              ref={userNameRef}
              value={user.userName}
              onChange={handleInputChange}
            />
            {isToggled && <InfoBoxAuth />}
            {
              errors.userName &&
              <AuthErrorMsg msg="User Name is not valid!" />
            }
          </Label>
        <Label label="First Name">
          <input
            className="input-field"
            type="text"
            name="firstName"
            ref={firstNameRef}
            value={user.firstName}
            onChange={handleInputChange}
          />
          {
            errors.firstName &&
            <AuthErrorMsg msg="First Name is mandatory field!" />
          }
        </Label>
        <Label label="Last Name">
          <input
            className="input-field"
            type="text"
            name="lastName"
            ref={lastNameRef}
            value={user.lastName}
            onChange={handleInputChange}
          />
          {
            errors.lastName && 
            <AuthErrorMsg msg="Last Name is mandatory field!" />
          }
        </Label>
        <Label label="Email">
          <input
            className="input-field"
            placeholder="you@example.com"
            type="email"
            name="email"
            ref={emailRef}
            value={user.email}
            onChange={handleInputChange}
          />
          {
            errors.email &&
            <AuthErrorMsg msg="Email must be email!" />
          }
        </Label>
        <Label label="Password">
          <input
            className="input-field"
            type="password"
            name="password"
            ref={passwordRef}
            value={user.password}
            onChange={handleInputChange}
          />
          {
            errors.password &&
            <AuthErrorMsg msg="Password must be at least 6 characters!" />
          }
        </Label>
        <Label label="Confirm Password">
          <input
            className="input-field"
            type="password"
            name="confirmPassword"
            ref={confirmPasswordRef}
            value={user.confirmPassword}
            onChange={handleInputChange}
          />
          {
            errors.confirmPassword && 
            <AuthErrorMsg msg="Passwords don't match!" />
          }
        </Label>
        <Btn>Submit</Btn>
        {/* <button className="btn-primary mt-5" type="submit">Submit</button> */}
      </form>
    </div>
  )
}

export default SignIn