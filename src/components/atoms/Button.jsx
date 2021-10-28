const Button = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`btn ${className ? className : 'btn-secondary'}`} type="button">{label}</button>
  )
}

export default Button