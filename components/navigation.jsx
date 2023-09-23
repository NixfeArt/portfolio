'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { useTheme } from '@/context/theme-context'
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";
import { useAuthContext } from '@/context/auth-context';

const Navigation = () => {
  // const pathname = usePathname()
  const {theme, toggleTheme} = useTheme()
  const {state: {isAuthenticated, user}, dispatch} = useAuthContext()

  return (
    <>
      <header className="p-4 border-b">
        <ul className="flex gap-3 font-roboto500 items-center">
          <li className="grow hover:text-violet-600">
            <Link href={{pathname: '/'}}>HOME</Link>
          </li>
          <li className="hover:text-violet-600">
            <button
              className="flex text-xl"
              onClick={toggleTheme}>
                {theme==='light' ? <IoSunnySharp /> : <IoMoonSharp />}
            </button>
          </li>
          <li className="hover:text-violet-600">
            <Link href={{pathname: '/projects'}}>PROJECTS</Link>
          </li>
          <li className="hover:text-violet-600">
            {
              isAuthenticated
              ? <>
              <span>{user.userName}&nbsp;</span>
              <span
              onClick={() => {
                dispatch({ type: 'SET_AUTH', value: false })
              }}
              className="text-xs cursor-pointer">(Log-Out)</span>
              </>
              : <Link href={{pathname: '/auth/login'}}>LOG IN</Link>
            }
          </li>
        </ul>
      </header>
    </>
  )
}

export default Navigation