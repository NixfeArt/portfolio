'use client'
import { useRef } from "react"
import { useAuthContext } from "../../context/auth-context"
import AuthErrorMsg from "./auth-error-msg"
import Label from "../UI/label"
import Title from "../UI/title"
import SubTitle from "../UI/sub-title"
import InfoBoxAuth from "./info-box-auth"
import Btn from "../btns/btn"
import Input from "../UI/input"
import FormWrapper from "../UI/form-wrapper"
import Paragraph from "../UI/paragraph"
import Link from "next/link"
import { useRouter } from "next/navigation"

const SignUp = () => {
  const router = useRouter()
  const {state, dispatch} = useAuthContext()

  const {
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
    let firstInvalidRef = null

    if(!user.userName.match(/^[A-Z][A-Za-z]{5,}$/)) {
      dispatch({ type: 'SET_ERROR', field: 'userName', value: true })
      hasError = true
      if (!firstInvalidRef) firstInvalidRef = userNameRef
    } else {
      dispatch({ type: 'SET_ERROR', field: 'userName', value: false })
    }
    
    if(user.firstName.trim() === '') {
      dispatch({ type: 'SET_ERROR', field: 'firstName', value: true })
      hasError = true
      if (!firstInvalidRef) firstInvalidRef = firstNameRef
    } else {
      dispatch({ type: 'SET_ERROR', field: 'firstName', value: false })
    }
    
    if(user.lastName.trim() === '') {
      dispatch({ type: 'SET_ERROR', field: 'lastName', value: true })
      hasError = true
      if (!firstInvalidRef) firstInvalidRef = lastNameRef
    } else {
      dispatch({ type: 'SET_ERROR', field: 'lastName', value: false })
    }

    if (!user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      dispatch({ type: 'SET_ERROR', field: 'email', value: true })
      hasError = true
      if (!firstInvalidRef) firstInvalidRef = emailRef
    } else {
      dispatch({ type: 'SET_ERROR', field: 'email', value: false })
    }

    if (user.password.length < 6) {
      dispatch({ type: 'SET_ERROR', field: 'password', value: true })
      hasError = true
      if (!firstInvalidRef) firstInvalidRef = passwordRef
    } else {
      dispatch({ type: 'SET_ERROR', field: 'password', value: false })
    }

    if (user.password !== user.confirmPassword) {
      dispatch({ type: 'SET_ERROR', field: 'confirmPassword', value: true })
      hasError = true
      if (!firstInvalidRef) firstInvalidRef = passwordRef
    } else {
      dispatch({ type: 'SET_ERROR', field: 'confirmPassword', value: false })
    }

    if (firstInvalidRef && firstInvalidRef.current) {
      firstInvalidRef.current.focus();
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
      dispatch({ type: 'SET_AUTH', value: true })
      router.push('/')
    }
  }

  return (
    <div
      style={{minHeight: '100vh'}}
      className="flex flex-col p-5 justify-center items-center h-full">
      <FormWrapper
        onSubmit={handleSubmit}
        noValidate
        className="w-80">
          <Title>Welcome!</Title>
          <SubTitle>Register and Enjoy the Experience</SubTitle>
          <Label label="User Name" extraStyle={{marginTop: 10}} hasInfo>
            <Input
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
          <Input
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
          <Input
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
          <Input
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
          <Input
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
          <Input
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
      </FormWrapper>
      <Paragraph>
        Already have an account?{' '}
        <Link
          className="text-violet-500 hover:text-violet-400 font-roboto700"
          href="/auth/login">
          Log In Now!
          </Link>
      </Paragraph>
    </div>
  )
}

export default SignUp