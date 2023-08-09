import PropTypes from "prop-types"
import './Pixel.css';

const Pixel = ({ onClick, color }) => {
  return (
    <div
        className={ `pixel border border-dark ${color && color}` }
        onClick={ onClick }
    >
    </div>
  )
}

Pixel.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Pixel;
