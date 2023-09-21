'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { useTheme } from '@/context/theme-context'
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";

const Navigation = () => {
  const pathname = usePathname()
  const {theme, toggleTheme} = useTheme()

  return (
    <>
      {pathname !== '/auth' &&
        <header className="p-4 border-b">
          <ul className="flex gap-3 font-roboto500 items-center">
            <li className="grow hover:text-violet-600">
              <Link href={{pathname: '/'}}>HOME</Link>
            </li>
            <li className="hover:text-violet-600">
              <Link href={{pathname: '/projects'}}>PROJECTS</Link>
            </li>
            <li className="hover:text-violet-600">
              <Link href={{pathname: '/auth'}}>SIGN UP</Link>
            </li>
            <li className="hover:text-violet-600">
              <button
                className="flex text-xl"
                onClick={toggleTheme}>
                  {theme==='light' ? <IoSunnySharp /> : <IoMoonSharp />}
              </button>
            </li>
          </ul>
        </header>
      }
    </>
  )
}

export default Navigation