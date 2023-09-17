const InfoBoxAuth = () => {
  return (
    <div>
      <ul className="text-xs text-slate-500 font-semibold italic">
        <p className="mb-2">Username must meet the following criteria:</p>
        <li>Minimum 6 characters in length</li>
        <li>Must start with an uppercase letter</li>
        <li>Can only contain letters (both uppercase and lowercase)</li>
        <li>No spaces or special characters allowed</li>
      </ul>
    </div>
  )
}

export default InfoBoxAuth