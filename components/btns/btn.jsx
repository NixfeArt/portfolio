const Btn = ({children, onClick}) => {
  return <button className="btn-primary mt-5" type="submit" onClick={onClick}>
    {children}
  </button>
}

export default Btn