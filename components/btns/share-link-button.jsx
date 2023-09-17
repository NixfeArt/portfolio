'use client'
import { useState } from "react"

const ShareLinkButton = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href)
    setClicked(true)
    setTimeout(() => setClicked(false), 2000)
  }

  return (
    <button onClick={handleClick}>
      {!clicked ? 'Copy Link' : 'Link Copied'}
    </button>
  )
}

export default ShareLinkButton