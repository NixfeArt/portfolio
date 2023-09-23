'use client'
import { useAuthContext } from "@/context/auth-context"
import FormWrapper from "../UI/form-wrapper"
import Title from "../UI/title"
import Label from "../UI/label"
import SubTitle from "../UI/sub-title"
import { useRef, useState } from "react"
import Input from "../UI/input"
import Btn from "../btns/btn"
import Paragraph from "../UI/paragraph"
import Link from "next/link"
import AuthErrorMsg from "./auth-error-msg"
import { useRouter } from "next/navigation"

const LogIn = () => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  const {state: { user }, dispatch} = useAuthContext()

  const userNameRef = useRef(null)
  const userPasswordRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name === '' || pass === '') {
      setError(true)
      return
    }
    if((name === user.userName) && (pass === user.password)) {
      setError(false)
      dispatch({ type: 'SET_AUTH', value: true })
      router.push('/')
    } else {
      setError(true)
      userNameRef.current.focus()
      return
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
        <SubTitle>Log In and Enjoy the Experience</SubTitle>
        <Label
          label="User Name"
          extraStyle={{marginTop: 10}}
        />
        <Input
          className="input-field"
          type="text"
          name="name"
          ref={userNameRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label
          label="Password"
          extraStyle={{marginTop: 10}}
        />
        <Input
          className="input-field"
          type="password"
          name="pass"
          ref={userPasswordRef}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {error && <AuthErrorMsg msg="User Name or Password are wrong!" />}
        <Btn>Log in</Btn>
      </FormWrapper>
      <Paragraph>
        Don't have an account?{' '}
        <Link
          className="text-violet-500 hover:text-violet-400 font-roboto700"
          href="/auth">
          Register Now!
          </Link>
      </Paragraph>
    </div>
  )
}

export default LogIn