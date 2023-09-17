const Title = ({
  children,
  isRoboto,
  extraStyle,
  extraClasses
}) => {
  const font = isRoboto ? 'font-roboto-900' : 'font-bebas'
  
  return (
    <h1
      className={`text-gray-800 font-black text-center text-3xl sm:text-4xl ${font} ${extraClasses}`}
      style={extraStyle}>
      {children}
    </h1>
  )
}

export default Title