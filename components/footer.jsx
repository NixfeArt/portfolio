'use client'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  return (
    <>
      {pathname !== '/auth' &&
        <footer>
          [Footer]
        </footer>
      }
    </>
  )
}

export default Footer