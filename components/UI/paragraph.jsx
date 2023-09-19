const Paragraph = ({
  children,
  isCenter = true
}) => {
  const align = isCenter ? 'text-center' : 'text-left'
  
  return <p className={`text-gray-800 font-roboto400 p-4 ${align} text-normal sm:text-lg`}>
    {children}
  </p>
}

export default Paragraph
