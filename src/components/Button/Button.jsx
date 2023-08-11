import PropTypes from "prop-types";

const Button = ({label, onClick, className}) => {
  return (
    <button
      className={`${className} btn`}
      onClick={onClick}
      
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
