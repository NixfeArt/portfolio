import { useAuthContext } from "../../context/auth-context" 

const Label = ({label, children, extraStyle, hasInfo}) => {
  const {state, dispatch} = useAuthContext()
  const {isToggled} = state

  const toggleInfo = () => {
    dispatch({type: 'TOGGLE_INFO', value: !isToggled})
  }

  return <label
    style={extraStyle}
    className="block py-1">
    <div className="flex justify-between items-center">
      <span className="block text-sm font-semibold text-violet-700">
        {label}
      </span>
      {hasInfo && <p onClick={toggleInfo} className="text-xs text-slate-500 font-semibold italic">Info</p>}
    </div>
    {children}
  </label>
}

export default Label