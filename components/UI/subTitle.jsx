const SubTitle = ({
  children,
  extraStyle,
  extraClasses
}) => {
  return <h2
    className={`text-gray-800 text-center text-lg sm:text-xl font-roboto500 ${extraClasses}`}
    style={extraStyle}>
    {children}
  </h2>
}

export default SubTitle