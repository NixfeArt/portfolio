'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"

const Navigation = () => {
  const pathname = usePathname()

  return (
    <>
      {pathname !== '/auth' &&
        <header className="p-4 border-b">
          <ul className="flex gap-3 font-roboto500 text-violet-900">
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
              <Link href={{pathname: '/auth/signin'}}>LOG IN</Link>
            </li>
          </ul>
        </header>
      }
    </>
  )
}

export default Navigation